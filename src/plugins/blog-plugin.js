// /plugins/blog-plugin-extended/index.js

const {
  default: defaultBlogPlugin,
  ...blogPluginExports
} = require('@docusaurus/plugin-content-blog');

async function blogPluginExtended(context, options) {
  const { customFields = {}, ...blogOptions } = options;

  // Khởi tạo plugin gốc như bình thường
  const blogPluginInstance = await defaultBlogPlugin(context, blogOptions);

  // Hàm lấy loại bài viết từ permalink
  function getPostCategory(permalink) {
    const parts = permalink.split('/');
    if (parts[1] === 'series' && parts[2]) return parts[2]; // series/deployment, series/framework, ...
    if (parts[1] === 'blog') return 'blog'; // blog chính
    if (parts[1] === 'about') return 'about'; // blog chính
    return 'other'; // /about/ hoặc các loại khác
  }

  return {
    ...blogPluginInstance,

    async allContentLoaded({ allContent, actions }) {
      // Chỉ thực hiện logic tổng hợp trên plugin chính
      if (options.id !== 'main-blog') {
        return;
      }

      const { imageBanner, imageAvatar } = customFields;
      let allPosts = [];

      const blogPluginId = 'docusaurus-plugin-content-blog';
      const allBlogContent = allContent[blogPluginId];

      if (allBlogContent) {
        Object.keys(allBlogContent).forEach(blogId => {
          const blogData = allBlogContent[blogId];
          if (blogData.blogPosts && blogData.blogPosts.length > 0) {
            allPosts.push(...blogData.blogPosts);
          }
        });
      }

      // Sắp xếp bài viết theo ngày mới nhất
      allPosts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));

      // Lấy 20 bài viết gần nhất
      const recentPosts = allPosts.slice(0, 20);

      // Tạo module cho mỗi bài viết
      async function createRecentPostModule(blogPost, index) {
        const category = getPostCategory(blogPost.metadata.permalink);

        return {
          blogData: await actions.createData(
            `home-page-recent-post-metadata-${index}.json`,
            JSON.stringify({
              metadata: {
                ...blogPost.metadata,
                // banner/avatar ưu tiên bài viết, nếu không có thì dùng mặc định
                imageBanner: blogPost.metadata.bannerBg || imageBanner,
                imageAvatar: blogPost.metadata.avatar || imageAvatar,
                category, // thêm category
              },
            })
          ),
          Preview: {
            __import: true,
            path: blogPost.metadata.source,
            query: { truncated: true },
          },
        };
      }

      // Tạo route trang chủ
      actions.addRoute({
        path: '/',
        exact: true,
        component: '@site/src/components/Homepage/index.js',
        modules: {
          homePageBlogMetadata: await actions.createData(
            'home-page-blog-metadata.json',
            JSON.stringify({
              totalPosts: allPosts.length,
            })
          ),
          recentPosts: await Promise.all(
            recentPosts.map(createRecentPostModule)
          ),
        },
      });
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};
