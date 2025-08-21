// src/theme/Navbar/Layout/AnnouncementBar.js
import React, { useState, useEffect } from 'react';
import { ANNOUNCEMENT_MESSAGES } from './constants';

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState('fade-in');

  useEffect(() => {
    const timer = setInterval(() => {
      setFade('fade-out');
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
        setFade('fade-in');
      }, 600);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full border-b bg-[#e6d5ff] p-1 text-black dark:bg-slate-50">
      <div className="text-xm mx-auto flex max-w-7xl items-center justify-center px-4 py-1.5 text-gray-900 sm:text-sm">
        <div className={fade}>{ANNOUNCEMENT_MESSAGES[index]}</div>
      </div>
    </div>
  );
};

export default AnnouncementBar