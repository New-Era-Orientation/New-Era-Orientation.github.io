import React, { useState } from 'react';
import logo from '@/assets/image.png';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-4 px-4 sm:px-6 md:px-12 backdrop-blur-sm bg-slate-900/60 border-b border-slate-700/50 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
          {/* logo: nhỏ trên mobile, vuông bo góc */}
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 md:h-10 md:w-10 rounded-lg object-cover"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-sm md:text-lg font-black tracking-widest text-white uppercase">
              NEW ERA ORIENTATION
            </h1>
            <p className="text-xs md:text-sm font-medium text-gray-300">
              Cùng nhau thủ khoa Tin học
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-3">
          <a
            href="/blog/"
            className="text-sm md:text-base font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Tài liệu
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(prev => !prev)}
            className="p-2 rounded-md text-gray-200 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="sr-only">{open ? 'Đóng menu' : 'Mở menu'}</span>
            {/* Hamburger / X icon */}
            {open ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div id="mobile-menu" className="md:hidden mt-2 px-4 pb-4">
          <div className="bg-slate-900/95 border border-slate-700/50 rounded-lg shadow-sm p-2 space-y-1">
            <a
              href="/blog/"
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Tài liệu
            </a>
            {/* Thêm các link khác nếu cần */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
