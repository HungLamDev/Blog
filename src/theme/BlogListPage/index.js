import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common'
import BlogLayout from '@theme/BlogLayout'
import SearchMetadata from '@theme/SearchMetadata'
import BlogPostItems from '@theme/BlogPostItems'
import Image from '@theme/IdealImage'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { BlogPagination } from '../BlogPagination'

// Metadata cho trang blog list
function BlogListPageMetadata({ metadata }) {
  const {
    siteConfig: { title: siteTitle }
  } = useDocusaurusContext()
  const { blogDescription, blogTitle, permalink } = metadata
  const isBlogOnlyMode = permalink === '/'
  const title = isBlogOnlyMode ? siteTitle : blogTitle

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag='blog_posts_list' />
    </>
  )
}

// Banner cho từng blog
function BlogHomepageBanner({ metadata }) {
  console.log('Blog metadata:', metadata)
  let imageBanner =
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1711217760169/OfI6ARj_Q.jpg?w=800&fit=crop&crop=entropy&auto=compress,format&format=webp'
  let imageAvatar = '/img/default-avatar.png'

switch (metadata.permalink) {
  case '/blog':
    imageBanner = 'https://blog.thanhnamnguyen.dev/_next/image?...';
    break;
  case '/series/deployment':
    imageBanner = '/img/life-banner.jpg';
    break;
  case '/series/web-development':
    imageBanner = '/img/templates-banner.jpg';
    break;
  case '/series/front-end':
    imageBanner = '/img/templates-banner.jpg';
    break;
  case '/series/templates':
    imageBanner = '/img/templates-banner.jpg';
    break;
  case '/series/framework':
    imageBanner = '/img/templates-banner.jpg';
    break;
  case '/series/thuat-toan':
    imageBanner = '/img/templates-banner.jpg';
    break;
  case '/series/thuat-toan':
    imageBanner = '/img/docusaurus-social-card.jpg';
    break;
  default:
    imageBanner = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1711217760169/OfI6ARj_Q.jpg?w=800&fit=crop&crop=entropy&auto=compress,format&format=webp'; 
}


  return (
    <div className='blog'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='mx-auto max-w-5xl'>
          <div className='flex flex-col-reverse gap-6 md:flex-row md:items-center'>
            <div className='flex flex-1 flex-col justify-center text-center md:w-1/3 md:text-left'>
              <p className='mb-2 text-xl font-semibold uppercase text-gray-500'>Series</p>
              <h2 className='mb-2 text-3xl font-extrabold md:text-3xl lg:text-4xl'>
                {metadata.blogTitle}
              </h2>
              <p className='text-lg text-gray-600'>{metadata.blogDescription}</p>
            </div>
            <div className='flex-1 md:w-2/3'>
              <div className='flex h-full w-full items-center'>
                <img
                  src={imageBanner}
                  alt='Blog banner'
                  className='w-full rounded-xl object-contain shadow-md'
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Nội dung trang blog list
function BlogListPageContent({ metadata, items, sidebar }) {
  return (
    <BlogLayout sidebar={sidebar}>
      {/* 1. Đưa Banner ra ngoài và dùng metadata của trang */}
      <div className='mb-20'>
        <BlogHomepageBanner metadata={metadata} />
      </div>

      {/* 2. Chỉ lặp để render các bài post item */}
      <BlogPostItems items={items} />

      <BlogPagination metadata={metadata} />
    </BlogLayout>
  )
}

// Component chính
export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  )
}
