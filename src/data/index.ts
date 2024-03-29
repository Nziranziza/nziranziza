import pl from "../images/pl.png";
import ct from "../images/ct.png";
import ad from "../images/ad.png";
import sk from "../images/sk.png";
import mo from "../images/mo.png";
import mp from "../images/mp.png";
import bk from "../images/bk.png";
import hills from "../images/hills.png";
import wl from "../images/wordlelive.png";

export type Experience = {
  id: number;
  title: string;
  company: string;
  jobType: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  summary: string;
  image?: any;
  url?: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  image: string;
  url?: string;
};

export const experiences: Experience[] = [
  {
    id: 0,
    company: "BK Techouse",
    title: "Senior Full Stack Developer",
    jobType: "Full-time",
    startDate: new Date("Dec 2022"),
    location: "Kigali, Rwanda",
    summary: `
    <ul class="list-disc list-inside">
    <li>Responsible for architecture, design & development of products and platforms using industry standards</li>
    <li>Establish and contribute to software development best practices and improving product quality</li>
    <li>Maintenance and continuous driving improvements of products and services to meet clients needs</li>
    <li>Drive innovation to shape and implement technology / business solutions that contribute organization's competitive advantage</li>
    <li>Uses Agile engineering practices and various software development technologies, processes, and tools to rapidly develop creative and efficient solutions that enhance client organization's technology stack</li>
    <li>Collaborates with other team to implement user stories, and continuously deliver new / improved product functionality</li>
    <li>Responsible for product quality including unit testing, integration testing, functional testing, non-functional testing(performance, security, etc.), UATs support, and defect resolution</li>
    <li>Communicates with internal and external teams to resolve technical dependencies during or after implementation</li>
    <li>Builds company's and client's brand in the technology community</li>
    <li>Adhere, owns, and show case company's core values and daily basis</li>
    <li>Proactive learning and ownership of professional development</li>
    </ul>`,
    image: bk,
    url: "https://bktechouse.rw/",
  },
  {
    id: 1,
    company: "Polymaths",
    title: "Frontend Engineer",
    jobType: "Full-time",
    startDate: new Date("Sep 2021"),
    endDate: new Date("March 2022"),
    location: "New York, United States",
    summary: `At Polymath Labs, we develop software that solves
    business-shaped problems. That means we build digital solutions
    for multiple channels, including mobile and web, that are
    scalable, secure, Cloud-native and serverless. We do it using a
    disciplined Agile process in a fully transparent, collaborative
    environment, so our work remains accessible to our partners at
    every stage. Their end goal is always our beginning. The result?
    Solutions that venture beyond the obvious.`,
    image: pl,
    url: "https://www.polymaths.co/",
  },
  {
    id: 2,
    company: "Consumatech",
    title: "Frontend Developer",
    jobType: "Full-time",
    startDate: new Date("Jun 2021"),
    endDate: new Date("Sep 2021"),
    location: "South Africa",
    summary: `I got a chance to work on several projects at Consumatech. 
    I mainly worked as a Front-end developer building a platform called Fleetcon using React, Redux, and Ant design. 
    Fleetcon is a technology platform that enables end-to-end management of fleet and business operations for logistics companies. 
    It uses a first-principles approach to understanding all the factors that impact business profitability and gives business owners the ability to monitor and influence the factors in real-time. 
    This is achieved through proprietary software and hardware solutions that Fleetcon deploys to suit the needs of the client. 
    This modular nature of the Fleetcon platform makes it suitable for businesses of any size.`,
    image: ct,
    url: "https://consumatech.com/",
  },
  {
    id: 3,
    company: "Sketchish",
    title: "Frontend Developer",
    jobType: "Freelance",
    startDate: new Date("Nov 2020"),
    endDate: new Date("Jun 2021"),
    location: "India",
    summary: `Sketchish is a leading global IT services provider.
     With over 100+ products developed from ground up. 
     Sketchish continues to fuel technological innovations in multiple verticles. 
     We are offerings digital transformation and IoT solutions across various cloud platforrms, including Google Cloud, AWS, and Azure.`,
    image: sk,
    url: "https://sketchish.com/",
  },
  {
    id: 4,
    company: "Andela",
    title: "Software Developer",
    jobType: "Full-time",
    startDate: new Date("Jan 2019"),
    endDate: new Date("Apr 2020"),
    location: "Kigali, Rwanda",
    summary: `Andela is an African company that identifies and develops software developers. 
    Being a developer at Andela I got the opportunity to work on internal projects, as well as external projects from Andela partners.
    I worked on an internal project called Author's haven. 
    This is a platform that helps authors write articles of any length. It is a full-stack project which is built with Postgres, React/Redux, Express and Node.
    My contribution to this project involved implementing new features, writing units, and integration tests. Apart from coding I also conducted interviews and Bootcamp for developers who want to join Andela.`,
    image: ad,
    url: "https://andela.com/",
  },
  {
    id: 5,
    company: "Tulaa",
    title: "Software Developer",
    jobType: "Apprenticeship",
    startDate: new Date("Mar 2019"),
    endDate: new Date("Aug 2019"),
    location: "Nairobi, Kenya",
    summary: `Tulaa is a company based in Kenya and provides different services to farmers in East African especially Kenya. 
    The services include offering loans for different agriculture inputs such as fertilizers, fungicides, and pesticides. They make use of mobile and web technology to keep track of their customers. 
    I was among 10 developers who rebuild their Tulaa CRM(Customer Relationship Management) from scratch using Angular 8 and Angular Material. 
   My main contribution involved adding new features, refactoring the codebase, and re-implementing features to increase user experience. 
   I also enjoyed working with a diverse team. 
   Tulaa had developers from Kenya, Uganda, Nigeria, and Rwanda.`,
  },
];

export const projects: Project[] = [
  {
    id: 0,
    title: "1000hills",
    description: `
    The 1000hills app offers virtual tours of cultural sites on Android and iOS, featuring interactive exhibits and historical reenactments. 
    Accessible on multiple devices, it employs cutting-edge technology, allows user contributions, and includes payment features for maintenance, with copyright protection ensuring cultural asset safeguarding.
    `,
    stack: ["Figma", "ReactNative", "Expo", "Viromedia"],
    image: hills,
  },
  {
    id: 1,
    title: "Wordle Game",
    description:
      "I had a great time developing this game and also learned about the Remix run framework. Worldle is a challenging game, especially if your English vocabulary is limited. Even though Wordle is tough, I had fun playing and developing it, and my vocabulary has gotten better. You can try playing it by clicking the link below.",
    stack: ["Remix Run", "Material UI", "Netflify"],
    image: wl,
    url: "https://wordlelive.netlify.app/",
  },
  {
    id: 2,
    title: "My Portfolio",
    description: `My portfolio website is one of the interesting project I ever worked on,
    unlike other projects which are managed and designed by other people; 
    I design, manage and develop this website all by myself.
    I am currently learning different things as I work on it and I would love your feedback
    `,
    stack: [
      "Figma",
      "GatsbyJS",
      "SCSS",
      "TalwindCSS",
      "Contentful",
      "Github pages",
    ],
    image: mp,
    url: "https://nziranziza.dev/",
  },
  {
    id: 3,
    title: "Operator Marketplace",
    description: `Operator is building an open and decentralized protocol for e-commerce. 
    Anyone can participate as a buyer, seller, or developer, and the network will be governed by the marketplace participants.
    This project is one of the example of marketplace that can build over Operator protocol`,
    stack: [
      "React",
      "SCSS",
      "Bootstrap",
      "Context API",
      "Axios",
      "React hooks",
    ],
    image: mo,
    url: "https://marketplace.operator.com/",
  },
];
