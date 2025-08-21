import Link from '@docusaurus/Link'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRss,
  FaGlobe,
  FaDev
} from 'react-icons/fa'

export const NAV_LINKS = [
  { to: '/', label: 'Trang Chủ' },
  { to: '/series/web-development', label: 'Web Development' },
  { to: '/series/deployment', label: 'Deployment' },
  { to: '/series/front-end', label: 'Front-end' },
  { to: '/series/templates', label: 'Templates' },
  { to: '/series/framework', label: 'Framework' },
  { to: '/series/thuat-toan', label: 'Thuật toán' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'Về tôi' },
  { to: '/docs/intro', label: 'Tutorial' }, // sửa chỗ này
  { to: '/docs/category/petstore-versioned-api', label: 'Petstore API' }
]
export const SOCIAL_LINKS = [
  {
    href: 'https://facebook.com/your-profile',
    label: 'Facebook',
    Icon: FaFacebook,
    hover: 'hover:text-blue-600 dark:hover:text-blue-400',
  },
  {
    href: 'https://instagram.com/your-profile',
    label: 'Instagram',
    Icon: FaInstagram,
    hover: 'hover:text-pink-600 dark:hover:text-pink-400',
  },
  {
    href: 'https://github.com/your-profile',
    label: 'Github',
    Icon: FaGithub,
    hover: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    href: 'https://your-website.com',
    label: 'Website',
    Icon: FaGlobe,
    hover: 'hover:text-green-600 dark:hover:text-green-400',
  },
  {
    href: 'https://dev.to/your-profile',
    label: 'Dev.to',
    Icon: FaDev,
    hover: 'hover:text-black dark:hover:text-gray-200',
  },
  {
    href: 'https://linkedin.com/in/your-profile',
    label: 'LinkedIn',
    Icon: FaLinkedin,
    hover: 'hover:text-blue-700 dark:hover:text-blue-400',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
    Icon: FaRss,
    hover: 'hover:text-orange-600 dark:hover:text-orange-400',
  },
]

export const ANNOUNCEMENT_MESSAGES = [
  <div key='1' className='flex items-center gap-2 text-base'>
    <span className='animate-wave inline-block origin-[70%_70%]'>👋</span>
    <span className='font-medium'>
      Chào mừng đến với Blog - <strong>Hưng Lâm</strong>
    </span>
  </div>,
  <div key='2' className='flex items-center gap-2 text-base'>
    <span className='inline-block animate-bounce align-middle'>👉</span>
    <span className='font-medium'>
      Bạn muốn xây dựng blog?{' '}
      <Link
        to='/docs/build-your-blog'
        className='text-black no-underline decoration-dashed transition-colors hover:text-blue-600 hover:decoration-solid dark:hover:text-blue-600'
      >
        Tham khảo tại đây
      </Link>
    </span>
  </div>
]
