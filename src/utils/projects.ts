export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

interface RawProject {
  id: string;
  name: string;
  description: string;
  tools: string;
  website: string;
  github?: string;
}

const rawProjects: RawProject[] = [
 /* {
    id: "0",
    name: "Inspire Health Care",
    description:
      "Android application that connects doctors and patients using real-time records and secure communication channels.",
    tools: "Android Studio, Java, Google Firebase, XML, Noble Covid API",
    website: "https://github.com/hanumantjain/e-healthcareproject",
    github: "https://github.com/hanumantjain/e-healthcareproject",
  },
  {
    id: "1",
    name: "The Funder's Hub",
    description:
      "Blockchain-powered funding platform that builds a secure and transparent ecosystem for founders and investors through smart contracts.",
    tools: "React, Solidity, Truffle IDE, Ethereum",
    website: "https://thefundershub.netlify.app",
    github: "https://github.com/hanumantjain/thefundershub",
  },
  {
    id: "2",
    name: "Decentrix",
    description:
      "E-commerce marketplace that focuses on ethical shopping experiences with frictionless Web3 integrations and secure payments.",
    tools: "NextJS, Solidity, WorldCoin, Moralis, Biconomy, Metamask",
    website: "https://decentrix-fe-hanumant-jains-projects.vercel.app",
    github: "https://github.com/hanumantjain/decentrix",
  },
  {
    id: "3",
    name: "Web3Verse",
    description:
      "Decentralised social media platform designed to empower users with data ownership, privacy, and transparent governance.",
    tools: "ReactJS, Solidity, Ethereum, Metamask",
    website: "https://web3verse.netlify.app",
    github: "https://github.com/hanumantjain/web3verse",
  },
  {
    id: "4",
    name: "Portfolio",
    description:
      "Personal portfolio showcasing design systems, interactive sections, and performance-optimised case studies.",
    tools: "ReactJS, TailwindCSS, ParticleJS",
    website: "https://hanumantjain.co",
    github: "https://github.com/hanumantjain/portfolio",
  },
  {
    id: "5",
    name: "Tic Tac Toe",
    description: "Interactive two-player tic tac toe experience with responsive UI and TypeScript powered game logic.",
    tools: "ReactJS, TypeScript, TailwindCSS",
    website: "https://tic-tac-toe-hanumant.netlify.app",
    github: "https://github.com/hanumantjain/tic-tac-toe",
  },*/
  {
    id: "0",
    name: "GitHub Activity Analyzer",
    description: "A sleek, professional, and responsive dashboard to analyze GitHub user activity using the official GitHub REST API. Built with React for modern, component-based architecture..",
    tools: "HTML, CSS, JS, React, GitHub restAPI's",
    website: "",
    github: "https://github.com/13krsnaa/GitHub-Activity-Analyzer.git",
  },
  {
    id: "1",
    name: "Portfolio",
    description:
      " A production-grade, immersive digital experience showcasing full-stack engineering excellence. This portfolio features a cinematic dark aesthetic, fluid micro-animations, and a highly responsive architecture",
    tools: "React.js, Node.js, TypeScript, Redux, Framer Motion, Tailwind CSS, ",
    website: "",
    github: "https://github.com/13krsnaa/KeshavSaxenaPortfolio.git",
  },
  {
    id: "2",
    name: "TeamForge",
    description:
      "A secure, full-stack project management system built with the MERN stack, featuring role-based access control, JWT authentication, and document management with Cloudinary.",
    tools: "Node, Express, JWT , bcrypts, CORS, Cloudinary, react",
    website: "",
    github: "https://github.com/13krsnaa/TeamForge.git",
  },
  {
    id: "3",
    name: "AsyncFlow",
    description:
      "AsyncFlow is a production-grade, distributed background job processing platform. It handles high-latency tasks asynchronously using a non-blocking API, BullMQ/Redis queue, and horizontally scalable workers.",
    tools: "React, Vite , Socket.io, Node.js, Express, PostgreSQL, Prisma ORM, Redis , Docker, Typescript",
    website: "",
    github: "https://github.com/13krsnaa/AsyncFlow.git",
  },
  {
    id: "5",
    name: "Learning Progress Tracker",
    description:
      "A comprehensive, full-stack solution to track your learning journey, visualize progress, and stay motivated. Built with the MERN stack and modern DevOps practices",
    tools: "Node.js, Express.js, MongoDB, API Gateway, Redis, React, TypeScript, TailwindCSS",
    website: "https://learning-progress-tracker-nu.vercel.app/",
    github: "https://github.com/13krsnaa/Learning-Progress-Tracker.git",
  },
];

const splitTools = (tools: string): string[] =>
  tools
    .split(",")
    .map((tool) => tool.trim().replace(/\.$/, ""))
    .filter(Boolean);

export const projects: Project[] = [...rawProjects]
  .sort((a, b) => Number.parseInt(b.id, 10) - Number.parseInt(a.id, 10))
  .map(({ tools, website, ...rest }) => ({
    name: rest.name,
    description: rest.description,
    tech: splitTools(tools),
    github: rest.github,
    demo: website,
  }));
