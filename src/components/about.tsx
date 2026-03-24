import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Title from "./title";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 section-fade">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title>About Me</Title>
        
        <div className="mt-12">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            
            {/* Profile Picture - Glowing Shape Behind */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative" style={{ width: '450px', height: '450px' }}>
                {/* Rounded rectangle shape behind */}
                <div 
                  className="absolute"
                  style={{
                    width: '350px',
                    height: '300px',
                    borderRadius: '300px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) rotate(-30deg)',
                    zIndex: 1,
                  }}
                ></div>
                
                {/* Raw image on top - square */}
                <div className="absolute z-10" style={{ width: '380px', height: '380px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <StaticImage
                    className="w-full h-full object-cover rounded-full"
                    src="../images/profile.png"
                    alt="Daniel Nziranziza"
                    width={400}
                    height={400}
                    quality={95}
                    style={{
                      border: 'none',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Main intro */}
              <div className="space-y-4">
                <p className="text-lg sm:text-xl text-light/90 leading-relaxed">
                  I'm a <span className="text-indigo-400 font-semibold">Software Engineer</span> based in Kigali, 
                  building scalable applications and digital experiences. My journey in tech started with curiosity about 
                  how things work, leading me to <span className="text-indigo-400 font-semibold">Andela</span> as part of the 
                  first cohort in Kigali—an experience that shaped my approach to software development.
                </p>
                
                <p className="text-lg sm:text-xl text-light/90 leading-relaxed">
                  Currently, I'm at{" "}
                  <span className="text-indigo-400 font-semibold">Squad</span>
                  , where I work on building a network of engineers and marketers from top companies to revolutionize 
                  talent acquisition through referrals and technical interviews. Previously, I worked at{" "}
                  <span className="text-indigo-400 font-semibold">Navi</span>
                  , building relationship-based AI companions, and{" "}
                  <a
                    href="https://bktechouse.rw/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 link-hover font-semibold"
                  >
                    BK Techouse
                  </a>
                  , where I architected and developed full-stack solutions. 
                  I'm passionate about clean code, modern architecture, and solving complex problems.
                </p>
              </div>
              
              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-indigo-400 mb-3 uppercase tracking-wider">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'JavaScript', 'TypeScript', 'Python', 
                    'React', 'Next.js', 'Angular', 'Gatsby', 
                    'Node.js', 'Express', 'Cloud & DevOps'
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-md bg-dark/40 border border-indigo-500/20 hover:border-indigo-500/50 hover:bg-dark/60 text-sm text-light/80 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
