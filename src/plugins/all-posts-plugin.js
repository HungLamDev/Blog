const path = require('path');
const fs = require('fs-extra');

function AllPostsPlugin(context, options) {
  return {
    name: 'all-posts-plugin',

    async loadContent() {
      // Lấy danh sách blog posts từ plugin blog mặc định
      const blogData = await context.siteDir; // siteDir = root project
      return null; // chỉ cần contentLoaded xử lý
    },

    async contentLoaded({content, actions}) {
      const {allContent, createData} = actions;
      const blogPosts = allContent['docusaurus-plugin-content-blog']?.default?.blogPosts ?? [];

      // Format lại dữ liệu
      const posts = blogPosts.map((post) => ({
        title: post.metadata.title,
        permalink: post.metadata.permalink,
        date: post.metadata.date,
      }));

      // Tạo file JSON để @generated có thể import
      await createData(
        'all-posts.json',
        JSON.stringify(posts, null, 2),
      );
    },
  };
}

module.exports = AllPostsPlugin;
