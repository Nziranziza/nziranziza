import React, { useState, useRef } from 'react';
import classnames from 'classnames';

import Button from './button';
import HumbergerIcon from './icons/humberger';
import CloseIcon from './icons/close';
import useOutsideClick from '../hooks/useOutsideClick';
import SocialIcons from './social-icons';

const Navbar = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const sidebar = useRef(null);
  const sidebarOverlayClassNames =
    'items-end justify-end  flex-col md:flex-row fixed w-full h-screen z-30 right-0 top-0 md:static flex bg-primary/50 backdrop-blur-lg';
  const sidebarClassNames =
    'w-1/2 bg-primary h-full flex flex-col items-center';

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
    <div className="sticky top-0 z-20 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-14 pb-3 pt-8 flex justify-between md:items-center relative">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="23" stroke="#3BE8B0" strokeWidth="2" />
          <path
            d="M27.896 15.64C29.768 15.64 30.704 16.564 30.704 18.412V31.552H33.008V34H26.06V31.552H27.788V18.16L20.624 22.66V31.552H22.388V34H15.44V31.552H17.708V18.412H15.44V16H20.624V19.744L26.6 16C26.984 15.76 27.416 15.64 27.896 15.64Z"
            fill="#3BE8B0"
          />
        </svg>
        <div className="md:hidden" onClick={onSideBarOpen}>
          <HumbergerIcon color="#3BE8B0" />
        </div>
        <div
          className={classnames('md:flex', {
            [sidebarOverlayClassNames]: isSideBarOpen,
            hidden: !isSideBarOpen,
            flex: isSideBarOpen,
          })}
        >
          <div
            ref={sidebar}
            className={classnames({
              [sidebarClassNames]: isSideBarOpen,
              'items-center hidden md:flex': !isSideBarOpen,
            })}
          >
            <button
              onClick={onSideBarClose}
              className="mr-4 mt-8 md:hidden self-end"
            >
              <CloseIcon />
            </button>
            <div className="flex items-center md:mr-8 flex-col md:flex-row mt-10 md:mt-0">
               <SocialIcons className="md:mr-3 md:mb-0 mb-3" />
            </div>
            <Button className="mt-3 md:mt-0" href="./resume.pdf" target="blank">
              Resume
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
