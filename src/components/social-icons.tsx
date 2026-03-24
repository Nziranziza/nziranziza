import React from 'react';
import classnames from 'classnames';

import FacebookIcon from './icons/facebook';
import TwitterIcon from './icons/twitter';
import GithubIcon from './icons/github';
import LinkedInIcon from './icons/linkedin';
import Instagram from './icons/instagram';

type props = {
  color?: string;
  className?: string;
  direction?: 'horizontal' | 'vertical';
}

const SocialIcons = ({
  color="#6366f1",
  className,
  direction = 'horizontal'
}: props) => {
  const isVertical = direction === 'vertical';
  
  return (
    <div 
      className={classnames(
        'flex items-center',
        {
          'flex-row space-x-4': !isVertical,
          'flex-col space-y-4': isVertical,
        },
        className
      )}
    >
      <a 
        href="https://github.com/Nziranziza" 
        target="_blank" 
        rel="noreferrer"
        className="text-light/70 hover:text-indigo-400 transition-colors transform hover:scale-105 duration-200"
        aria-label="GitHub"
      >
        <GithubIcon color={color} />
      </a>
      <a 
        href="https://twitter.com/NziranzizaD" 
        target="_blank" 
        rel="noreferrer"
        className="text-light/70 hover:text-indigo-400 transition-colors transform hover:scale-105 duration-200"
        aria-label="Twitter"
      >
        <TwitterIcon color={color} />
      </a>
      <a 
        href="https://www.linkedin.com/in/nziranziza/" 
        target="_blank" 
        rel="noreferrer"
        className="text-light/70 hover:text-indigo-400 transition-colors transform hover:scale-105 duration-200"
        aria-label="LinkedIn"
      >
        <LinkedInIcon color={color} />
      </a>
      <a 
        href="https://www.facebook.com/nziranziza.daniel" 
        target="_blank" 
        rel="noreferrer"
        className="text-light/70 hover:text-indigo-400 transition-colors transform hover:scale-105 duration-200"
        aria-label="Facebook"
      >
        <FacebookIcon color={color} />
      </a>
      <a 
        href="https://www.instagram.com/nziranziza.dev" 
        target="_blank" 
        rel="noreferrer"
        className="text-light/70 hover:text-indigo-400 transition-colors transform hover:scale-105 duration-200"
        aria-label="Instagram"
      >
        <Instagram color={color} />
      </a>
    </div>
  );
};

export default SocialIcons;
