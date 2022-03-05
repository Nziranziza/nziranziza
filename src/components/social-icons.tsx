import React from 'react';

import FacebookIcon from './icons/facebook';
import TwitterIcon from './icons/twitter';
import GithubIcon from './icons/github';
import LinkedInIcon from './icons/linkedin';

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
      <a href="https://github.com/Nziranziza" target="_blank">
        <GithubIcon color={color} className={className} />
      </a>
      <a href="https://twitter.com/NziranzizaD" target="_blank">
        <TwitterIcon color={color} className={className} />
      </a>
      <a href="https://www.linkedin.com/in/nziranziza/" target="_blank">
        <LinkedInIcon color={color} className={className} />
      </a>
      <a href="https://www.facebook.com/nziranziza.daniel" target="_blank">
        <FacebookIcon color={color} />
      </a>
    </>
  );
};

export default SocialIcons;
