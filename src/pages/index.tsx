import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Expriences from '../components/expriences';
import Projects from '../components/projects';
import Footer from '../components/footer';
import SocialIcons from '../components/social-icons';
import logo from '../images/logo.png';
import mp from '../images/mp.png';

const IndexPage = () => {
  const description = `Daniel Nziranziza - Software Engineer passionate about building digital solutions. 
  Experienced in JavaScript, TypeScript, React, Angular, and Node.js. Currently working at Squad, 
  revolutionizing talent acquisition through innovative referral and interview networks.`;
  const title = 'Daniel Nziranziza - Portfolio';
  const keywords = `Daniel, Nziranziza, React, ReactJS, Gatsby, GatsbyJS, TailwindCSS, Tailwind, CSS, Bootstrap, Contentful, Upwork, Operator, Polymaths, Polymathlabs
  Portfolio, Web design, Web development, Software, Software development, Software Engineering, Angular, AngularJS, BK Techouse`;
  const url="https://nziranziza.dev"
  
  return (
    <main className="bg-primary min-h-screen relative overflow-x-hidden">
      <Helmet title={title}>
        <link rel="icon" type="image/png" href={logo} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Daniel Nziranziza" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={mp} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={mp} />
      </Helmet>
      
      <Navbar />
      
      <div className="relative z-10 pt-20">
        <Hero />
        <About />
        <Expriences />
        <Projects />
        <Footer />
      </div>
      
      {/* Fixed social icons on desktop */}
      <div className="fixed hidden lg:flex left-8 bottom-8 z-30">
        <div className="flex flex-col items-center">
          <SocialIcons color="#6366f1" direction="vertical" className="mb-4" />
          <div 
            className="w-[1px] h-24"
            style={{
              background: 'linear-gradient(to bottom, rgb(99, 102, 241), rgba(99, 102, 241, 0.5), transparent)'
            }}
          ></div>
        </div>
      </div>
      
      {/* Fixed email on desktop */}
      <div className="fixed hidden lg:flex right-8 bottom-8 z-30">
        <div className="flex flex-col items-center">
          <a
            href="mailto:nziranzizadaniel@gmail.com"
            className="text-indigo-400 hover:text-indigo-300 transition-colors writing-vertical text-sm font-mono mb-4"
            style={{ writingMode: 'vertical-rl' }}
          >
            nziranzizadaniel@gmail.com
          </a>
          <div 
            className="w-[1px] h-24"
            style={{
              background: 'linear-gradient(to bottom, rgb(99, 102, 241), rgba(99, 102, 241, 0.5), transparent)'
            }}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
