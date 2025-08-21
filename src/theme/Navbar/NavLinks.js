// src/theme/Navbar/Layout/NavLinks.js
import React from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { NAV_LINKS } from './constants';

const NavLinks = ({ linkClassName, activeClassName, onItemClick }) => {
  const { pathname } = useLocation();

  return (
    <>
      {NAV_LINKS.map(({ to, label }) => {
        const isActive = pathname === to;
        const finalClassName = `${linkClassName} ${isActive ? activeClassName : ''}`;

        return (
          <Link key={to} to={to} onClick={onItemClick} className={finalClassName.trim()}>
            {label}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;