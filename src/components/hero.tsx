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
    <div className="md:ml-20 min-h-[calc(100vh-70px)] flex items-center mb-5 animate-fade-in-up">
      <div className="lg:max-w-[80%]">
        <p className="text-secondary/80 text-lg mb-4 font-medium animate-slide-in-right">Hello, I am called</p>
        <h1 className="gradient-text font-extrabold mb-3 md:mb-4 leading-tight text-5xl sm:text-6xl md:text-8xl animate-fade-in-up-delay-1">
          Daniel Nziranziza
        </h1>
        <h2 className="font-bold leading-tight mb-6 md:mb-8 text-3xl sm:text-4xl md:text-6xl text-light/90 animate-fade-in-up-delay-2">
          a talented software developer
        </h2>
        <p className="mb-6 md:max-w-[80%] lg:max-w-[60%] text-light/80 text-lg leading-relaxed animate-fade-in-up-delay-3">
          I've realized that my strengths lie in learning and hard work. Below are the things I am learning
        </p>
        <ul className="list-none mb-8 space-y-2 animate-fade-in-up-delay-4">
          <li className="flex items-center">
            <span className="text-secondary mr-3">▹</span>
            <span>Python with LLM</span>
          </li>
          <li className="flex items-center">
            <span className="text-secondary mr-3">▹</span>
            <span>Azure with Terraform</span>
          </li>
          <li className="flex items-center">
            <span className="text-secondary mr-3">▹</span>
            <span>T3 Stack</span>
          </li>
          <li className="flex items-center">
            <span className="text-secondary mr-3">▹</span>
            <span>PlanetScale</span>
          </li>
          <li className="flex items-center">
            <span className="text-secondary mr-3">▹</span>
            <span>System Architecture Design</span>
          </li>
          <li className="flex items-center">
            <span className="text-secondary mr-3">▹</span>
            <span>🎸 Guitar</span>
          </li>
        </ul>
        <div className="flex items-center gap-4 animate-fade-in-up-delay-5">
          <CopyToClipboard text={email} onCopy={onCopy}>
            <Button className="cursor-pointer">Let's chat</Button>
          </CopyToClipboard>
          {copied && (
            <span className="text-secondary text-sm font-medium animate-fade-in-up">
              ✓ Email copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
