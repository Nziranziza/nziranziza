import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Title from './title';

const About = () => {
  return (
    <div className="lg:ml-20 pb-20">
      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        <div className="w-full mt-20 lg:mt-0 md:max-w-[60%]">
          <Title>about me</Title>
          <p className="mb-3">
            Hello again! My name is Daniel Nziranziza, I enjoy creating new
            things with computer programs. Since I was a kind, I always loved
            exploring electronic devices especially mobile phones and computers.
            After realizing my strong interest I decided to pursue Mathematics,
            Physics and Computer Science in high school. 2018 Andela opened a
            pan african hub in Kigali and I was among the first cohort. Andela
            gave me a chance to get my hand dirt with code and opened me to the
            world of world class software developer
          </p>
          <p className="mb-3">
            I am currently working for{' '}
            <a
              className="text-secondary hover:text-secondary/90"
              href="https://www.crowdbotics.com/"
              target="_blank"
              rel="noreferrer"
            >
              Crowdbotics
            </a>{' '}
            through{' '}
            <a
              className="text-secondary hover:text-secondary/90"
              href="https://upwork.com/"
              target="_blank"
              rel="noreferrer"
            >
              Upwork
            </a>{' '}
            building an app for{' '}
            <a
              className="text-secondary hover:text-secondary/90"
              href="https://www.operator.com/"
              target="_blank"
              rel="noreferrer"
            >
              Operator
            </a>
            . My day to day work at crowdbotics involves converting figma mockup
            into responsive React components, Database design, API developement,
            Database design, Web 3 app development, PR reviews and Daily
            standups
          </p>
          <p>My skillset includes and is not limited to the following:</p>
          <ul className="list-disc list-inside">
            <li>Javascript and Typescript</li>
            <li>React, Gatsby.js and Next.js</li>
            <li>Node.js and Express.js</li>
          </ul>
        </div>
        <div className="w-[85%] -ml-[15%] md:ml-0 md:w-[35%] lg:w-[25%]">
          <StaticImage
            className="border-2 border-white border-solid rounded-3xl profile-pic relative !overflow-visible z-10"
            src="../images/profile.png"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
