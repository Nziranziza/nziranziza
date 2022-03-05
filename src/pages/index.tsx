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
  const description = `Hello, I am called Daniel Nziranziza a talented software developer.
  I build and design web and mobile apps. For the past 4 years I have been working as web developer for several companies across the global. 
  I am currently working as a full time freelancer through Upwork, for a client called Crowdbotics building an app for Operator`;
  const title = 'Daniel Nziranziza - Portfolio';
  const keywords = `Daniel, Nziranziza, React, ReactJS, Gatsby, GatsbyJS, TailwindCSS, Tailwind, CSS, Bootstrap, Contentful, Upwork, Operator, Polymaths, Polymathlabs
  Portfolio, Web design, Web development, Software, Software development, Software Engineering, Angular, AngularJS`;
  const url="https://nziranziza.github.io/nziranziza"
  return (
    <main className="bg-primary min-h-screen">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-14">
        <div className="fixed hidden lg:block left-[50px] bottom-[50px] z-30">
          <SocialIcons className="mb-3" />
        </div>
        <Hero />
        <About />
        <Expriences />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;
