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
  const imageBanner =
    metadata?.bannerBg ||
    'https://blog.thanhnamnguyen.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1710687674044%2F8624efc0-5a2b-4407-b2b3-bdf1b29d5e79.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
  const imageAvatar =
    metadata?.avatar ||
    'https://res.cloudinary.com/thanhnam/image/upload/v1715137157/project/docusaurus-material-ui-template/logo_wnw5lv.png'

  return (
    //    <div className="blog">
    //   <div className="container mx-auto px-6 md:px-12">
    //     <div className="max-w-5xl mx-auto">
    //       <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row md:items-start">
    //         {/* Text */}
    //         <div className="text-center md:text-left md:w-1/3">
    //           <p className="uppercase text-sm text-gray-500 font-semibold mb-2">Series</p>
    //           <h2 className="mb-2 text-2xl font-extrabold md:text-3xl lg:text-4xl">
    //             {metadata.blogTitle}
    //           </h2>
    //           <p className="text-gray-600">{metadata.blogDescription}</p>
    //         </div>

    //         {/* Banner */}
    //         <div className="w-full md:w-2/3">
    //           <img
    //             src={useBaseUrl(imageBanner)}
    //             alt="Blog banner"
    //             className="w-full rounded-xl shadow-md"
    //             loading="lazy"
    //           />
    //         </div>
    //       </div>

    //       {/* Button */}
    //       <div className="mt-10 flex justify-center">
    //         <span className="bg-white shadow px-4 py-2 rounded-lg text-gray-700 font-medium">
    //           Những bài viết trong series này
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='blog'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='mx-auto max-w-5xl'>
          <div className='flex flex-col-reverse gap-6 md:flex-row md:items-center'>
            {/* Text */}
            <div className='flex flex-1 flex-col justify-center text-center md:w-1/3 md:text-left'>
              <p className='mb-2 text-xl font-semibold uppercase text-gray-500'>Series</p>
              <h2 className='mb-2 text-3xl font-extrabold md:text-3xl lg:text-4xl'>
                {metadata.blogTitle}
              </h2>
              <p className='text-lg text-gray-600'>{metadata.blogDescription}</p>
            </div>

            {/* Banner */}
            <div className='flex-1 md:w-2/3'>
              <div className='flex h-full w-full items-center'>
                <img
                  src={useBaseUrl(imageBanner)}
                  alt='Blog banner'
                  className='w-full rounded-xl object-contain shadow-md'
                  loading='lazy'
                />
              </div>
            </div>
          </div>

          {/* Button */}
          {/* Button with horizontal line */}
          <div className='mt-10 flex items-center justify-center'>
            <div className='flex w-full max-w-2xl items-center'>
              <div className='flex-grow border-t border-gray-300'></div>
              <span className='mx-4 cursor-pointer rounded-lg bg-white px-6 py-2 text-lg font-medium text-gray-700 shadow-sm transition duration-300 hover:bg-blue-500 hover:text-white hover:shadow-md'>
                Những bài viết trong series này
              </span>

              <div className='flex-grow border-t border-gray-300'></div>
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
