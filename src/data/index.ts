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
    company: "Squad",
    title: "Software Engineer",
    jobType: "Full-time",
    startDate: new Date("Nov 2025"),
    location: "USA, New York",
    summary: `<p class="mb-3">Squad's customers include Rainbow, Coinlist, Moonshot, Hyperbolic, Gensyn, Universal, Morpho, Friends With Benefits and others backed by YC, Alliance, a16z.</p>
    <p class="mb-3">How it works: We've built a network of engineers and marketers from top companies like Uniswap, Polygon, and Eigen. This network is incentivized to do two things: (1) refer top talent (think 'employee referrals on steroids'), and (2) conduct technical interviews to vet top talent.</p>
    <ul class="list-disc list-inside space-y-2 mb-3">
    <li><strong>Referrals:</strong> Squad shares recruiting fees with referrers and makes referrals effortless (e.g., by scraping GitHub and LinkedIn). This provides scalable access to hard-to-reach talent.</li>
    <li><strong>Interviews:</strong> New candidates are matched with a domain expert for skill evaluation (interview recordings are available to you). We use an AI-powered matchmaker to connect you with the best performers and reduce time-to-hire.</li>
    </ul>`,
  },
  {
    id: 1,
    company: "Navi",
    title: "Software Engineer",
    jobType: "Full-time",
    startDate: new Date("Mar 2024"),
    endDate: new Date("Oct 2025"),
    location: "USA, New York",
    summary: `<p class="mb-3">Navi is a relationship-based AI companion built for emotional connection, not productivity. Think Sims meets ChatGPT: a persistent character with memory, personality, and evolving story arcs.</p>
    <p>Navis aren't assistants. They're digital people: emotionally intelligent, narratively rich, and designed to make users feel seen, supported, and bonded.</p>`,
  },
  {
    id: 2,
    company: "BK Techouse",
    title: "Senior Full Stack Developer",
    jobType: "Full-time",
    startDate: new Date("Dec 2022"),
    endDate: new Date("Apr 2024"),
    location: "Kigali, Rwanda",
    summary: `
    <p class="mb-3">As a Senior Full Stack Developer, I architect and develop scalable products and platforms using industry best practices. I lead initiatives to establish software development standards and continuously improve product quality.</p>
    <ul class="list-disc list-inside space-y-2 mb-3">
    <li>Design and develop full-stack applications using modern technologies and architectural patterns</li>
    <li>Drive innovation by implementing technology solutions that enhance competitive advantage</li>
    <li>Collaborate with cross-functional teams to deliver user stories and new product features</li>
    <li>Ensure product quality through comprehensive testing (unit, integration, functional, and performance)</li>
    <li>Maintain and continuously improve products to meet evolving client needs</li>
    <li>Mentor team members and contribute to technical decision-making processes</li>
    </ul>`,
    image: bk,
    url: "https://bktechouse.rw/",
  },
  {
    id: 3,
    company: "Polymaths",
    title: "Frontend Engineer",
    jobType: "Full-time",
    startDate: new Date("Sep 2021"),
    endDate: new Date("March 2022"),
    location: "New York, United States",
    summary: `<p class="mb-3">At Polymath Labs, I worked as a Frontend Engineer developing scalable, cloud-native solutions for web and mobile platforms. The team follows disciplined Agile practices in a transparent, collaborative environment.</p>
    <p>I contributed to building secure, serverless applications that solve complex business problems, ensuring our solutions were accessible and aligned with partner goals at every development stage.</p>`,
    image: pl,
    url: "https://www.polymaths.co/",
  },
  {
    id: 4,
    company: "Consumatech",
    title: "Frontend Developer",
    jobType: "Full-time",
    startDate: new Date("Jun 2021"),
    endDate: new Date("Sep 2021"),
    location: "South Africa",
    summary: `<p class="mb-3">As a Frontend Developer at Consumatech, I built the Fleetcon platform—a comprehensive fleet and business operations management system for logistics companies.</p>
    <p class="mb-3">Using React, Redux, and Ant Design, I developed a platform that enables real-time monitoring and management of business operations. Fleetcon uses a first-principles approach to track profitability factors, providing business owners with actionable insights through proprietary software and hardware solutions.</p>
    <p>The modular architecture I helped implement makes the platform scalable and adaptable for businesses of all sizes.</p>`,
    image: ct,
    url: "https://consumatech.com/",
  },
  {
    id: 5,
    company: "Sketchish",
    title: "Frontend Developer",
    jobType: "Freelance",
    startDate: new Date("Nov 2020"),
    endDate: new Date("Jun 2021"),
    location: "India",
    summary: `<p class="mb-3">As a Frontend Developer at Sketchish, I contributed to a leading global IT services provider with over 100+ products developed from the ground up.</p>
    <p>I worked on digital transformation and IoT solutions across multiple cloud platforms including Google Cloud, AWS, and Azure, helping drive technological innovation across various industries.</p>`,
    image: sk,
    url: "https://sketchish.com/",
  },
  {
    id: 6,
    company: "Andela",
    title: "Software Developer",
    jobType: "Full-time",
    startDate: new Date("Jan 2019"),
    endDate: new Date("Apr 2020"),
    location: "Kigali, Rwanda",
    summary: `<p class="mb-3">As a Software Developer at Andela, I worked on both internal and partner projects, contributing to the company's mission of identifying and developing software developers across Africa.</p>
    <p class="mb-3">I developed Author's Haven, a full-stack platform that enables authors to write articles of any length. Built with PostgreSQL, React/Redux, Express, and Node.js, I implemented new features and wrote comprehensive unit and integration tests.</p>
    <p>Beyond development, I conducted technical interviews and facilitated Bootcamp sessions for aspiring developers, contributing to Andela's talent development initiatives.</p>`,
    image: ad,
    url: "https://andela.com/",
  },
  {
    id: 7,
    company: "Tulaa",
    title: "Software Developer",
    jobType: "Apprenticeship",
    startDate: new Date("Mar 2019"),
    endDate: new Date("Aug 2019"),
    location: "Nairobi, Kenya",
    summary: `<p class="mb-3">During my apprenticeship at Tulaa, I contributed to rebuilding their Customer Relationship Management (CRM) system from scratch. Tulaa provides agricultural services and loans to farmers across East Africa, using mobile and web technology to manage customer relationships.</p>
    <p class="mb-3">As part of a 10-developer team, I rebuilt the CRM using Angular 8 and Angular Material. My contributions included implementing new features, refactoring the codebase for better maintainability, and enhancing existing features to improve user experience.</p>
    <p>This experience provided valuable exposure to working with a diverse, distributed team of developers from Kenya, Uganda, Nigeria, and Rwanda.</p>`,
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
