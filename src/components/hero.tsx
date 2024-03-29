import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from './button';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = 'nziranzizadaniel@gmail.com';
  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 800)
  }
  return (
    <div className="md:ml-20 min-h-[calc(100vh-70px)] flex items-center mb-5">
      <div className="lg:max-w-[80%]">
        <p>Hello, I am called</p>
        <h1 className="text-secondary font-bold mb-3 md:mb-4 leading-tight text-5xl sm:text-6xl md:text-8xl">
          Daniel Nziranziza
        </h1>
        <h2 className="font-bold leading-tight mb-3 md:mb-4 text-3xl sm:text-4xl md:text-6xl">
          a talented software developer
        </h2>
        <p className="mb-5 md:max-w-[80%] lg:max-w-[60%]">
          I've realized that my strengths lie in learning and hard work. Below are the things I am learning
        </p>
        <ul className="list-disc list-inside mb-5">
          <li>Python with LLM</li>
          <li>Azure with Terraform</li>
          <li>T3 Stack</li>
          <li>PlanetScale</li>
          <li>System Architecture Design</li>
          <li>🎸 Guitar </li>
        </ul>
        <CopyToClipboard text={email} onCopy={onCopy}>
          <Button className="cursor-pointer">Let's chat</Button>
        </CopyToClipboard>
        {copied && <span className="text-secondary text-sm pl-2">Email copied!</span>}
      </div>
    </div>
  );
};

export default Hero;
