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
  
  

  {
    id: "1",
    name: "GitHub Activity Analyzer",
    description: "A sleek, professional, and responsive dashboard to analyze GitHub user activity using the official GitHub REST API. Built with React for modern, component-based architecture..",
    tools: "HTML, CSS, JS, React, GitHub restAPI's",
    website: "",
    github: "https://github.com/13krsnaa/GitHub-Activity-Analyzer.git",
  },
  {
    id: "2",
    name: "Portfolio",
    description:
      " A production-grade, immersive digital experience showcasing full-stack engineering excellence. This portfolio features a cinematic dark aesthetic, fluid micro-animations, and a highly responsive architecture",
    tools: "React.js, Node.js, TypeScript, Redux, Framer Motion, Tailwind CSS, ",
    website: "https://hellokshv.vercel.app",
    github: "https://github.com/13krsnaa/KeshavSaxenaPortfolio.git",
  },
  {
    id: "3",
    name: "TeamForge",
    description:
      "A secure, full-stack project management system built with the MERN stack, featuring role-based access control, JWT authentication, and document management with Cloudinary.",
    tools: "Node, Express, JWT , bcrypts, CORS, Cloudinary, react",
    website: "",
    github: "https://github.com/13krsnaa/TeamForge.git",
  },
  {
    id: "4",
    name: "AsyncFlow",
    description:
      "AsyncFlow is a production-grade, distributed background job processing platform. It handles high-latency tasks asynchronously using a non-blocking API, BullMQ/Redis queue, and horizontally scalable workers using Docker.",
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
  {
    id: "6",
    name: "Banking Transaction Management",
    description: "A robust Banking Ledger Service built with the MERN stack, featuring double-entry bookkeeping, ACID-compliant transactions, and secure JWT authentication. Implements idempotency keys for reliable transfers and automated email notifications via Gmail OAuth2.",
    tools: "Node.js, Express.js, MongoDB, Mongoose, JWT , Bcryptjs, Cookie-parser, Nodemailer, Dotenv",
    website: "",
    github: "https://github.com/13krsnaa/Banking_Transaction_Management.git",
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
