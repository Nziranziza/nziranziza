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
  const description = `Hello again! My name is Daniel Nziranziza, and I enjoy creating new
  things with computer programs. Since I was a child, I have always
  loved exploring electronic devices, especially mobile phones and
  computers. After realizing my strong interest, I decided to pursue
  Mathematics, Physics, and Computer Science in high school. In 2018,
  Andela opened a pan-African hub in Kigali, and I was among the first
  cohort. Andela gave me a chance to get my hands dirty with code and
  opened me to the world of world-class software development.`;
  const title = 'Daniel Nziranziza - Portfolio';
  const keywords = `Daniel, Nziranziza, React, ReactJS, Gatsby, GatsbyJS, TailwindCSS, Tailwind, CSS, Bootstrap, Contentful, Upwork, Operator, Polymaths, Polymathlabs
  Portfolio, Web design, Web development, Software, Software development, Software Engineering, Angular, AngularJS, BK Techouse`;
  const url="https://nziranziza.dev"
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
