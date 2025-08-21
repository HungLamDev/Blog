// src/theme/Navbar/Layout/index.js
import React, { useState, useEffect } from 'react'
import Link from '@docusaurus/Link'
import SearchBarWrapper from '@theme/SearchBar'
import ColorModeToggle from '@theme/ColorModeToggle'
import { useColorMode } from '@docusaurus/theme-common'
import { HiMenu } from 'react-icons/hi'

import AnnouncementBar from './AnnouncementBar'
import MobileMenu from './MobileMenu'
import NavLinks from './NavLinks'
import SocialLinks from './SocialLinks'

// Custom hook để khóa cuộn trang
const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    if (isLocked) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [isLocked])
}

export default function NavbarLayout({ children }) {
  const { colorMode, setColorMode } = useColorMode()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev)

  useBodyScrollLock(isMobileMenuOpen)

  return (
    <>
      <AnnouncementBar />
      <header // Thêm id để hook TOC tìm thấy
        className='navbar px-16 sticky z-30 border-b bg-background pb-2 pt-2 text-foreground shadow-sm dark:border-gray-800'
        style={{ height: 'auto' }}
      >
        <div className='w-full lg:px-6'>
          <div className='relative flex h-16 items-center'>
            {/* Logo - Desktop */}
            <div className='flex-1'>
              <Link to='/' className='hidden items-center md:flex'>
                <img src='/img/logotest.png' alt='Blog Logo' className='h-16 w-auto' />
              </Link>
              {/* Hamburger Menu Button */}
              <div className='relative flex items-center md:hidden'>
                <button
                  onClick={toggleMobileMenu}
                  className='group rounded-md p-2 focus:outline-none'
                  aria-label='Thanh điều hướng Blog'
                >
                  <HiMenu className='h-6 w-6' />
                  <span className='pointer-events-none invisible absolute left-full top-full z-50 mt-2 w-max -translate-x-1/2 rounded-md bg-gray-800 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100'>
                    Thanh điều hướng Blog
                  </span>
                </button>
              </div>
            </div>

            {/* Logo - Mobile */}
            <div className='flex justify-center md:hidden'>
              <Link to='/' className='flex items-center'>
                <img src='/img/logotest.png' alt='Blog Logo' className='h-14 w-auto' />
              </Link>
            </div>

            {/* Right Section: Search & ColorMode */}
            <div className='flex flex-1 items-center justify-end'>
              <div className='flex items-center gap-2'>
                <SearchBarWrapper />
                <ColorModeToggle
                  value={colorMode}
                  onChange={setColorMode}
                  className='flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-background text-foreground transition-colors hover:bg-[#c4c4c4] dark:border-gray-700 dark:hover:bg-[#666666]'
                />
              </div>
            </div>
          </div>

          {/* Social Links - Desktop */}
          <SocialLinks
            wrapperClassName='flex items-center justify-center gap-4 py-3 sm:justify-start'
            linkClassName='flex items-center justify-center rounded-full p-3 text-gray-600 transition-colors hover:bg-[#c4c4c4] hover:text-primary dark:text-gray-300 dark:hover:bg-[#666666]'
          />

          {/* Navigation Links - Desktop */}
          <nav className='relative hidden h-12 items-center justify-center gap-8 text-sm font-medium md:flex'>
            <NavLinks
              linkClassName='py-2 text-gray-800 transition-colors hover:text-primary dark:text-gray-200'
              activeClassName='font-bold text-primary'
            />
          </nav>
        </div>
      </header>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </>
  )
}
