import React, { useState } from 'react'
import Link from '@docusaurus/Link'
import Image from '@theme/IdealImage'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { IoChevronDown } from 'react-icons/io5'
import { Avatar } from '../../components/ui/avatar'
import { Card, CardContent } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import toast from 'react-hot-toast'
import { IoTimeOutline } from 'react-icons/io5'
import { AiOutlineEye } from 'react-icons/ai'
import { BookOpen, TrendingUp } from 'lucide-react'

function formatCategory(category) {
  if (category === 'thuat-toan') return 'Thuật Toán'

  // Chuyển 'example-category' thành ['example', 'category'], sau đó capitalize
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
function RecentBlogPostCard({ recentPost }) {
  const { blogData } = recentPost
  const { metadata } = blogData

  return (
    <Card className='group flex h-full w-full flex-col overflow-hidden rounded-xl border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800'>
      <Link to={metadata.permalink} className='relative block overflow-hidden rounded-t-xl'>
        {/* Image */}
        <Image
          img={useBaseUrl(metadata.frontMatter.image)}
          alt={metadata.title}
          className='h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
        {/* Category badge */}
        {metadata.tags.length > 0 && (
          <span className='absolute left-3 top-3 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'>
            {metadata.tags[0].label}
          </span>
        )}
        {/* Overlay hover effect */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
      </Link>
      <CardContent className='flex flex-1 flex-col p-6'>
        {/* Thay thế <p> bằng khối div và span được tạo kiểu */}
        {metadata.tags.length > 0 && (
          <div className='mb-2 mt-1'>
            <Link
              to={
                metadata.category === 'about' || metadata.category === 'blog'
                  ? `/${metadata.category}`
                  : `/series/${metadata.category}`
              }
              className='inline-block rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-800'
            >
              {formatCategory(metadata.category)}
            </Link>
          </div>
        )}
        {/* Title */}
        <Link to={metadata.permalink} className='mb-3'>
          <h3 className='line-clamp-2 text-lg font-bold leading-tight text-gray-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400'>
            {metadata.title}
          </h3>
        </Link>
        {/* Author info */}
        <div className='mb-4 flex items-center gap-2'>
          {metadata.authors.slice(0, 1).map((author, index) => (
            <div key={index} className='flex items-center gap-2'>
              <Avatar className='h-8 w-8 border-2 border-white shadow-sm'>
                <Image
                  alt={author.name}
                  img={useBaseUrl(author.imageURL)}
                  className='h-full w-full rounded-full object-cover'
                />
              </Avatar>
              <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                {author.name}
              </span>
            </div>
          ))}
        </div>

        <div className='mt-auto flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400'>
          <span className='flex items-center gap-1'>
            <BookOpen className='h-4 w-4' /> {/* Điều chỉnh kích thước nếu cần */}
            {Math.ceil(metadata.readingTime)} phút đọc
          </span>
          {/* Icon lượt xem */}
          <span className='flex items-center gap-1'>
            <TrendingUp className='h-4 w-4' /> {/* Điều chỉnh kích thước nếu cần */}
            {metadata.permalink.length * 5 + 100} lượt xem
          </span>
        </div>
        {/* ... phần còn lại của component ... */}
      </CardContent>
    </Card>
  )
}

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
      toast.success('Đăng ký nhận tin thành công!')
    }, 1000)
  }

  return (
    <div
      className='py-16 dark:bg-gray-900'
      style={{ backgroundColor: 'var(--ifm-background-color)' }}
    >
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='mx-auto max-w-2xl text-center'>
          <h3 className='mb-4 text-2xl font-bold text-gray-900 dark:text-white'>
            Đăng ký nhận tin tức
          </h3>
          <p className='mb-8 text-gray-600 dark:text-gray-400'>
            Nhận thông báo từ{' '}
            <span className='font-semibold text-blue-600 dark:text-blue-400'>Blog - Hưng Lâm</span>{' '}
            trong hộp thư đến của bạn. Đăng ký nhận tin ngay và đừng bỏ lỡ nhé!!!
          </p>

          <form onSubmit={handleSubmit} className='flex flex-col gap-3 sm:flex-row'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Nhập địa chỉ email...'
              required
              disabled={isSubmitting}
              className='flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400'
            />
            <Button
              type='submit'
              size='lg'
              disabled={isSubmitting}
              className='bg-gray-800 px-8 py-3 font-semibold text-white transition-colors hover:bg-gray-700 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600'
            >
              {isSubmitting ? 'ĐANG XỬ LÝ...' : 'ĐĂNG KÝ'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function LatestNews({ homePageBlogMetadata, recentPosts }) {
  const [visibleCount, setVisibleCount] = useState(6)
  console.log(recentPosts)

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  return (
    <>
      <div className='container mx-auto my-16 max-w-7xl px-4'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 dark:text-white'>
            {homePageBlogMetadata.blogTitle}
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-400'>
            {homePageBlogMetadata.blogDescription}
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {recentPosts.slice(0, visibleCount).map((recentPost, index) => (
            <div key={index} className='flex'>
              <RecentBlogPostCard recentPost={recentPost} />
            </div>
          ))}
        </div>

        {visibleCount < recentPosts.length && (
          <div className='mt-12 text-center'>
            <Button
              onClick={handleLoadMore}
              variant='outline'
              size='lg'
              className='border-2 border-gray-300 bg-white px-8 py-3 text-gray-700 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:bg-blue-900/20 dark:hover:text-blue-400'
            >
              Tải thêm bài viết
              <IoChevronDown className='ml-2 h-5 w-5' />
            </Button>
          </div>
        )}
      </div>

      <NewsletterSection />
    </>
  )
}
