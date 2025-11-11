import React from 'react';

import FacebookIcon from './icons/facebook';
import TwitterIcon from './icons/twitter';
import GithubIcon from './icons/github';
import LinkedInIcon from './icons/linkedin';
import Instagram from './icons/instagram';

type props = {
  color?: string;
  className?: string
}
const SocialIcons = ({
  color="#3BE8B0",
  className
}: props) => {
  return (
    <>
      <a href="https://github.com/Nziranziza" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
        <GithubIcon color={color} className={className} />
      </a>
      <a href="https://twitter.com/NziranzizaD" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
        <TwitterIcon color={color} className={className} />
      </a>
      <a href="https://www.linkedin.com/in/nziranziza/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
        <LinkedInIcon color={color} className={className} />
      </a>
      <a href="https://www.facebook.com/nziranziza.daniel" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
        <FacebookIcon color={color} className={className} />
      </a>
      <a href="https://www.instagram.com/nziranziza.dev" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
        <Instagram color={color} className={className} />
      </a>
    </>
  );
};

export default SocialIcons;
