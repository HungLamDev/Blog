import React from "react";
import OriginalBlogPostPage from "@theme-original/BlogPostPage";

function PostMeta({ metadata }) {
  const { authors = [], date, readingTime } = metadata;

  return (
    <div className="mb-8 flex items-center justify-center space-x-6 text-sm text-gray-600">
      {authors.map((author) => (
        <div key={author.key || author.name} className="flex items-center space-x-2">
          {author.imageURL && (
            <img
              src={author.imageURL}
              alt={author.name}
              className="h-8 w-8 rounded-full object-cover"
            />
          )}
          <div className="flex flex-col">
            <span className="font-medium">{author.name}</span>
            {author.title && (
              <span className="text-xs text-gray-500">{author.title}</span>
            )}
          </div>
        </div>
      ))}
      {date && (
        <span>
          {new Date(date).toLocaleDateString("vi-VN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </span>
      )}
      {readingTime && <span>{Math.ceil(readingTime)} phút đọc</span>}
    </div>
  );
}

export default function BlogPostPage(props) {
  const { content: BlogPostContent } = props;

  // Nếu không có BlogPostContent, render bình thường
  if (!BlogPostContent) {
    return <OriginalBlogPostPage {...props} />;
  }

  const frontMatter = BlogPostContent?.frontMatter || {};
  const metadata = BlogPostContent?.metadata || {};

  const bannerImage = frontMatter.image || null;
  const title = frontMatter.title || metadata.title || null;

  const EnhancedContent = React.useMemo(() => {
    const enhancedContentComponent = (contentProps) => {
      return (
        <div className="max-w-4xl mx-auto px-4">
          {/* Banner lớn đầu trang */}
          {bannerImage && (
            <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-xl shadow-lg">
              <img
                src={bannerImage}
                alt={title || "Blog banner"}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Title */}
          {title && (
            <h1 className="mb-6 text-3xl md:text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
              {title}
            </h1>
          )}

          {/* Author + Date + ReadingTime */}
          <PostMeta metadata={metadata} />

          {/* Nội dung bài viết với CSS để ẩn các elements trùng lặp */}
          <div className="prose prose-lg max-w-none dark:prose-invert
            [&>header]:hidden 
            [&_.margin-vert--md]:hidden 
            [&>h1:first-child]:hidden
            [&_.blog-post-item__header]:hidden
            [&_.avatar]:hidden
            [&_.col]:hidden">
            <BlogPostContent {...contentProps} />
          </div>
        </div>
      );
    };

    // Preserve the original component's properties
    Object.setPrototypeOf(enhancedContentComponent, BlogPostContent);
    
    // Copy all properties from the original component
    Object.getOwnPropertyNames(BlogPostContent).forEach((key) => {
      if (key !== 'constructor') {
        try {
          enhancedContentComponent[key] = BlogPostContent[key];
        } catch (e) {
          // Ignore errors for non-configurable properties
        }
      }
    });

    // Ensure metadata and frontMatter are available
    enhancedContentComponent.frontMatter = frontMatter;
    enhancedContentComponent.metadata = metadata;

    return enhancedContentComponent;
  }, [BlogPostContent, bannerImage, title, metadata, frontMatter]);

  return <OriginalBlogPostPage {...props} content={EnhancedContent} />;
}