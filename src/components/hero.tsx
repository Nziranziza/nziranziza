import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = 'nziranzizadaniel@gmail.com';
  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  
  return (
    <section className="min-h-[calc(100vh-70px)] flex items-center justify-center relative overflow-x-hidden pt-8 sm:pt-12 pb-32">
      {/* Animated background gradient */}
      <div className="absolute inset-y-1.5 inset-0 animated-gradient opacity-40"></div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-y-1.5 inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="text-left animate-fade-in w-full flex flex-col gap-2 items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/30 border border-indigo-500/20 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              <span className="text-sm text-indigo-400 font-medium">Available for opportunities</span>
            </div>
            
            <h1 className="mb-4 leading-tight">
              <span className="block text-light mb-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">Hi, I'm</span>
              <span className="block gradient-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">Daniel</span>
              <span className="block gradient-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">Nziranziza</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-light/90">
              Software Engineer
            </h2>
            
            <p className="text-lg sm:text-xl text-light/70 mb-8 max-w-xl leading-relaxed">
              I build scalable applications and digital experiences. Passionate about clean code, 
              modern architecture, and solving complex problems.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <CopyToClipboard text={email} onCopy={onCopy}>
                <button className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 transform transition-all duration-200 hover:scale-[1.02] shadow-md shadow-indigo-500/30 hover:shadow-indigo-500/40 cursor-pointer overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                  <span className="relative z-10">Get in touch</span>
                </button>
              </CopyToClipboard>
              {copied && (
                <span className="text-indigo-400 text-sm font-medium animate-fade-in flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email copied!
                </span>
              )}
            </div>
          </div>
          
          <div className="lg:block hidden">
            <div className="glass rounded-2xl p-8 card-hover">
              <h3 className="text-xl font-semibold text-light mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                Currently Learning
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'AWS (Lambda, Step Functions, API Gateway)', icon: '☁️' },
                  { label: 'AI Workflow Integration', icon: '🤖' },
                  { label: 'LLM Prompt Engineering', icon: '✨' },
                  { label: 'Python with LLM', icon: '🐍' },
                  { label: 'System Architecture', icon: '🏗️' },
                  { label: 'Guitar', icon: '🎸' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-dark/30 border border-indigo-500/10 hover:border-indigo-500/30 hover:bg-dark/50 transition-all group"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-light/80 group-hover:text-light transition-colors">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
    
          <div className="lg:hidden mt-8">
            <h3 className="text-lg font-semibold text-light mb-4">Currently Learning</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'AWS (Lambda, Step Functions, API Gateway)',
                'AI Workflow Integration',
                'LLM Prompt Engineering',
                'Python with LLM',
                'System Architecture',
                '🎸 Guitar'
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-dark/50 border border-indigo-500/30 text-sm text-light/90 hover:border-indigo-500/60 hover:bg-dark/70 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-indigo-400/70 font-mono">Scroll</span>
          <div className="w-6 h-10 border-2 border-indigo-500/50 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
