import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

import Button from './button';
import HumbergerIcon from './icons/humberger';
import CloseIcon from './icons/close';
import useOutsideClick from '../hooks/useOutsideClick';
import SocialIcons from './social-icons';

const Navbar = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebar = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onSideBarClose = () => {
    setSideBarOpen(false);
    document.querySelector('body')?.classList.remove('overflow-hidden');
  };

  useOutsideClick(sidebar, onSideBarClose);

  const onSideBarOpen = () => {
    setSideBarOpen(true);
    document.querySelector('body')?.classList.add('overflow-hidden');
  };

  return (
    <div className={classnames(
      "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
      scrolled ? "glass shadow-lg" : ""
    )}>
      {/* Animated background gradient - same as hero */}
      <div className="absolute inset-0 animated-gradient opacity-40 pointer-events-none"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">DN</span>
            </div>
          </div>
          <span className="hidden sm:block text-xl font-bold gradient-text">Daniel Nziranziza</span>
        </a>
        
        <div className="md:hidden" onClick={onSideBarOpen}>
          <HumbergerIcon color="#6366f1" />
        </div>
        
        <div
          className={classnames('md:flex items-center space-x-6', {
            'fixed inset-0 bg-primary/95 backdrop-blur-lg z-50 flex flex-col justify-center items-center space-y-8': isSideBarOpen,
            'hidden': !isSideBarOpen,
          })}
        >
          <div
            ref={sidebar}
            className={classnames('flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6', {
              'w-full': isSideBarOpen,
            })}
          >
            <button
              onClick={onSideBarClose}
              className="absolute top-6 right-6 md:hidden"
            >
              <CloseIcon />
            </button>
            
            <div className="flex items-center space-x-4 md:space-x-3">
              <SocialIcons color="#6366f1" className="md:mr-0" />
            </div>
            
            <Button className="mt-0" href="./resume.pdf" target="blank">
              Resume
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
