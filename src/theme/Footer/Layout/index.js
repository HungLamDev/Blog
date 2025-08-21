import React from 'react'
import Link from '@docusaurus/Link'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRss
} from 'react-icons/fa'

export default function FooterLayout({ logo, copyright }) {
  const footerLinks = [
    { label: 'Home', to: '/' },
    { label: 'Web Development', to: '/' },
    { label: 'Deployment', to: '/' },
    { label: 'Front-end', to: '/' },
    { label: 'Templates', to: '/' },
    { label: 'Framework', to: '/' },
    { label: 'Thuật toán', to: '/' },
    { label: 'Về tôi', to: '/' }
  ]

  return (
   <footer className="bg-[#e7ebef] dark:bg-slate-950/50">
  <div className="mx-auto max-w-5xl space-y-4 px-4 py-4 text-center">
    <div className="flex flex-col items-center space-y-3">
      {/* Avatar */}
      <img src="/img/logo.svg" alt="Avatar" className="h-20 w-20 rounded-full" />

      {/* Text */}
      <p className="inline-block text-base text-gray-600 dark:text-gray-300 md:max-w-3xl">
        Trang blog cá nhân của <strong>Hưng Lâm</strong>, chia sẻ các thông tin, kiến thức, mẹo
        về công nghệ, lập trình, v.v
      </p>
    </div>

    {/* Menu links */}
    <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
      {footerLinks.map((link, idx) => (
        <Link
          key={idx}
          to={link.to}
          className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-400"
        >
          {link.label}
        </Link>
      ))}
    </nav>

    {/* Social icons */}
    <div className="flex justify-center gap-6 text-xl">
      <a
        href="https://facebook.com"
        aria-label="Facebook"
        className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
      >
        <FaFacebook className="h-5 w-5" />
      </a>
      <a
        href="https://github.com"
        aria-label="Github"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
      >
        <FaGithub className="h-5 w-5" />
      </a>
      <a
        href="https://instagram.com"
        aria-label="Instagram"
        className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
      >
        <FaInstagram className="h-5 w-5" />
      </a>
      <a
        href="https://linkedin.com"
        aria-label="LinkedIn"
        className="text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
      >
        <FaLinkedin className="h-5 w-5" />
      </a>
      <a
        href="/rss.xml"
        aria-label="RSS"
        className="text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400"
      >
        <FaRss className="h-5 w-5" />
      </a>
    </div>

    {/* Logo + copyright */}
    {(logo || copyright) && (
      <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
        {logo && <div>{logo}</div>}
        {copyright}
      </div>
    )}

    {/* Extra link */}
    <p className="animate-pop text-base text-gray-600 dark:text-gray-400">
      Bạn muốn xây dựng blog? Tham khảo 👉{' '}
      <a href="#" className="text-blue-600 no-underline dark:text-blue-400">
        tại đây
      </a>
    </p>
  </div>
</footer>

  )
}
