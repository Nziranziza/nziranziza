import * as React from 'react';

import SocialIcons from './social-icons';

const Footer = () => {
  return (
    <footer className="py-5 mt-10">
      <div className="flex items-center justify-center">
        <SocialIcons color="#fff" className="mr-3" />
      </div>
      <p className="text-center text-sm font-light mt-2">
        Designed & Built by Daniel Nziranziza
        <span className='block'>Inspired by <a href="https://brittanychiang.com/" className="text-secondary">Brittany Chiang</a></span>
      </p>
    </footer>
  );
};

export default Footer;
