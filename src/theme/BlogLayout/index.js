import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import BlogSidebar from '@theme/BlogSidebar'

function MyCustomHeader({ metadata }) {
  if (!metadata) {
    return (
      <header className="text-center py-8 bg-gray-100 rounded-xl">
        <h1 className="text-2xl font-bold">📚 Chào mừng đến với Blog</h1>
        <p className="text-gray-600 mt-2">Nơi tôi chia sẻ kiến thức và kinh nghiệm.</p>
      </header>
    )
  }
  const { title, frontMatter, authors, tags, date, readingTime } = metadata
  const { image } = frontMatter ?? {}

  // Format ngày đăng
  const formattedDate = date
    ? new Date(date).toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    : null

  // Format thời gian đọc
  const readTime =
    readingTime?.minutes ? `${Math.ceil(readingTime.minutes)} phút đọc` : null

  return (
    <header className="text-center py-8 bg-gray-100 rounded-xl">
      {/* Banner image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-4 w-full max-h-[320px] object-cover rounded-lg"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold mt-4">{title}</h1>

      {/* Author + date + reading time */}
      <div className="flex justify-center items-center flex-wrap gap-4 mt-3 text-gray-700 text-sm">
        {authors?.map((a) => (
          <div key={a.name} className="flex items-center gap-2">
            {a.imageURL && (
              <img
                src={a.imageURL}
                alt={a.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <span className="font-medium">{a.name}</span>
          </div>
        ))}
        {formattedDate && <span>📅 {formattedDate}</span>}
        {readTime && <span>⏱ {readTime}</span>}
      </div>

      {/* Tags */}
      {tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <a
              key={tag.permalink}
              href={tag.permalink}
              className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition"
            >
              #{tag.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default function BlogLayout(props) {
  const { sidebar, toc, children, ...layoutProps } = props
  const hasSidebar = sidebar && sidebar.items.length > 0

  // ✅ Lấy metadata từ children
  const childWithMetadata = children?.find((c) => c?.props?.metadata)
  const metadata = childWithMetadata?.props?.metadata

  console.log('📌 props:', props)
  console.log('📌 metadata:', metadata)

  return (
    <Layout {...layoutProps}>
      <MyCustomHeader metadata={metadata} />

      <div className="container max-w-7xl my-8">
        <div className="row">
          <BlogSidebar sidebar={sidebar} hideOnDesktop />
          <main
            className={clsx('col', {
              'col--12': hasSidebar && !toc,
              'col--9': hasSidebar && toc,
              'col--9 col--offset-1': !hasSidebar
            })}
          >
            {children}
          </main>
          {toc && <div className="col col--3">{toc}</div>}
        </div>
      </div>
    </Layout>
  )
}
