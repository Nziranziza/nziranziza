import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Title from "./title";

const About = () => {
  return (
    <div className="lg:ml-20 pb-20">
      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        <div className="w-full mt-20 lg:mt-0 md:max-w-[60%]">
          <Title>about me</Title>
          <p className="mb-3">
            Hello again! My name is Daniel Nziranziza, and I enjoy creating new
            things with computer programs. Since I was a child, I have always
            loved exploring electronic devices, especially mobile phones and
            computers. After realizing my strong interest, I decided to pursue
            Mathematics, Physics, and Computer Science in high school. In 2018,
            Andela opened a pan-African hub in Kigali, and I was among the first
            cohort. Andela gave me a chance to get my hands dirty with code and
            opened me to the world of world-class software development.
          </p>
          <p className="mb-3">
            I am currently working for{" "}
            <a
              className="text-secondary hover:text-secondary/90"
              href="https://bktechouse.rw/"
              target="_blank"
              rel="noreferrer"
            >
              BK Techouse
            </a>
            . My day-to-day work at BKTechouse involves converting Figma mockups
            into responsive Angular components, database design, API
            development, and daily stand-ups.
          </p>
          <p>My skillset includes and is not limited to the following:</p>
          <ul className="list-disc list-inside">
            <li>Javascript, Typescript and Python</li>
            <li>React, Gatsby.js, Next.js and Angular</li>
            <li>Node.js and Express.js</li>
          </ul>
        </div>
        <div className="w-[60%] -ml-[15%] md:ml-0 md:w-[35%] lg:w-[25%]">
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
