// src/theme/Navbar/Layout/MobileMenu.js
import React from 'react';
import Link from '@docusaurus/Link';
import { HiX } from 'react-icons/hi';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ease-in-out"
        onClick={toggleMenu}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-4/5 max-w-xs transform flex-col bg-background p-4 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-shrink-0 items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
          <Link to="/" onClick={toggleMenu} className="flex items-center">
            <img src="/img/logotest.png" alt="Blog Logo" className="h-14 w-auto" />
          </Link>
          <button
            onClick={toggleMenu}
            className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Đóng menu"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-4 flex-grow overflow-y-auto">
          <div>
            <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-gray-500">
              Blog Menu
            </h3>
            <nav className="flex flex-col">
              <NavLinks
                onItemClick={toggleMenu}
                linkClassName="block rounded-md px-2 py-2 text-base transition-colors text-gray-800 dark:text-gray-200 hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-800"
                activeClassName="bg-gray-100 font-bold text-primary dark:bg-gray-800"
              />
            </nav>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 px-2 text-xs font-bold uppercase tracking-wider text-gray-500">
              Mạng xã hội
            </h3>
            <SocialLinks
              wrapperClassName="grid grid-cols-4 gap-2"
              linkClassName="flex items-center justify-center rounded-md p-3 text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;