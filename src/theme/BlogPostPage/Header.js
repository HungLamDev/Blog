// src/theme/BlogPostPage/Header.js
import React from "react";

// Simple Avatar component với Tailwind
function Avatar({ src, alt }) {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export function BlogHeader({ title, date, readTime, authors }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="mb-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-4">{title}</h1>

      {/* Date & Read Time */}
      <div className="text-gray-500 text-sm mb-6">
        <time dateTime={date}>{formattedDate}</time>
        {readTime && <> · {readTime}</>}
      </div>

      {/* Authors */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {authors.map((author) => (
          <div key={author.name} className="flex items-center gap-3">
            <a href={author.profileUrl}>
              <Avatar src={author.avatarUrl} alt={author.name} />
            </a>
            <div className="flex flex-col">
              <a href={author.profileUrl} className="font-medium hover:underline">
                {author.name}
              </a>
              {author.title && (
                <small className="text-gray-400">{author.title}</small>
              )}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
