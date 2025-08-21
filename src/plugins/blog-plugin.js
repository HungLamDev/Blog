const blogPluginExports = require('@docusaurus/plugin-content-blog')
const defaultBlogPlugin = blogPluginExports.default

async function blogPluginExtended(context, options) {
    const { customFields = {}, ...blogOptions } = options
  const { bannerBg, avatar } = customFields

  // Tạo instance plugin blog gốc với options hợp lệ
  const blogPluginInstance = await defaultBlogPlugin(context, blogOptions)

  return {
    ...blogPluginInstance,

    async contentLoaded(params) {
      const { content, actions } = params

      // Lấy 4 bài viết mới nhất
      const recentPostsLimit = 6
      const recentPosts = [...content.blogPosts].splice(0, recentPostsLimit)

      async function createRecentPostModule(blogPost, index) {
        return {
          blogData: await actions.createData(
            `home-page-recent-post-metadata-${index}.json`,
            JSON.stringify({
              metadata: blogPost.metadata,
              bannerBg,
              avatar,
            })
          ),
          Preview: {
            __import: true,
            path: blogPost.metadata.source,
            query: { truncated: true },
          },
        }
      }

      // Route homepage
      actions.addRoute({
        path: '/',
        exact: true,
        component: '@site/src/components/Homepage/index.js',
        modules: {
          homePageBlogMetadata: await actions.createData(
            'home-page-blog-metadata.json',
            JSON.stringify({
              blogTitle: blogOptions.blogTitle,
              blogDescription: blogOptions.blogDescription,
              path: blogOptions.path,
              totalPosts: content.blogPosts.length,
              totalRecentPosts: recentPosts.length,
              bannerBg,
              avatar,
            })
          ),
          recentPosts: await Promise.all(recentPosts.map(createRecentPostModule)),
        },
      })

      // Thêm vào metadata chung để BlogListPage cũng dùng được
      content.blogMetadata = {
        ...content.blogMetadata,
        bannerBg,
        avatar,
      }

      return blogPluginInstance.contentLoaded({ content, actions })
    },
  }
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
}
