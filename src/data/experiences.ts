export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  domain: string | null;
  team: string | null;
  description: string;
  longDescription?: string; // For detail page
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: "kiera-edtech",
    role: "Senior Full-Stack Engineer",
    company: "KIERA – Interactive Content Engine",
    period: "Oct 2025 – Present",
    domain: "EdTech",
    team: "5",
    description:
      "Architected a high-performance, component-driven platform capable of generating hundreds of interactive digital books from a single codebase.",
    longDescription:
      "KIERA is a cutting-edge EdTech platform designed to transform static educational content into highly interactive digital experiences. As a Senior Full-Stack Engineer, I led the architecture of the core content engine, enabling the rapid generation of interactive books. The system supports complex user interactions, including drag-and-drop quizzes, multimedia hotspots, and gamified learning modules, all while maintaining high performance on low-end devices.",
    achievements: [
      "Built advanced interactive modules (quizzes, mini-games, hotspots) with precise state management",
      "Optimized rendering for media-heavy, JSON-driven workloads",
      "Enforced strict TypeScript safety and multi-language localization",
      "Designed solution architecture, CI/CD pipelines, and cloud deployment on GCP",
    ],
    tech: [
      "React",
      "Vite",
      "NestJS",
      "AWS S3",
      "GCP Load Balancer",
      "GCP Storage",
    ],
  },
  {
    id: "docmed-pom",
    role: "Senior Full-Stack Engineer",
    company: "Docmed (POM Platform)",
    period: "Jan 2025 – Oct 2025",
    domain: "Healthcare / E-commerce",
    team: "20+",
    description:
      "Built responsive, accessible user interfaces used by healthcare professionals.",
    longDescription:
      "The POM Platform by Docmed is a comprehensive healthcare procurement/management system. I was responsible for the front-end architecture of the E-commerce module, focusing on accessibility, performance, and seamless integration with complex backend inventory systems.",
    achievements: [
      "Led performance optimization (lazy loading, bundle splitting, image optimization)",
      "Integrated complex APIs and search systems",
      "Collaborated closely with product, design, and backend teams",
    ],
    tech: ["Next.js", "Medusa.js", "Zustand", "PostgreSQL", "AWS", "Algolia"],
  },
  {
    id: "caskx-exchange",
    role: "Senior Full-Stack Engineer",
    company: "CaskX Exchange",
    period: "Jul 2024 – Feb 2025",
    domain: "Investment Marketplace (B2B & B2C)",
    team: null,
    description:
      "Built and maintained a mission-critical trading and investment platform.",
    achievements: [
      "Designed backend services, data models, and API integrations",
      "Owned AWS infrastructure and production deployments",
      "Ensured scalability, reliability, and operational stability",
    ],
    tech: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "AWS (ECS, RDS, CloudFront, ALB)",
    ],
  },
  {
    id: "imotorbike",
    role: "Full-Stack Developer",
    company: "iMotorbike",
    period: "Oct 2023 – Jun 2024",
    domain: "E-commerce & Inventory",
    team: null,
    description: "Built a modern, high-performance e-commerce platform.",
    achievements: [
      "Implemented filtering, search, checkout, and recommendation features",
      "Optimized UX and SEO using Next.js",
    ],
    tech: [
      "Next.js",
      "Medusa.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "AWS",
    ],
  },
  {
    id: "flyer-edtech",
    role: "Frontend / Full-Stack Developer",
    company: "FLYER – Interactive English Testing Platform",
    period: "Jan 2023 – Sep 2023",
    domain: "EdTech",
    team: null,
    description: "Built animated learning interfaces and admin dashboards.",
    achievements: [
      "Developed backend services and GraphQL APIs",
      "Integrated Firebase Remote Config for dynamic behavior",
    ],
    tech: [
      "Next.js",
      "React Native",
      "NestJS",
      "Hasura",
      "PostgreSQL",
      "GraphQL",
      "Docker",
      "Firebase",
    ],
  },
  {
    id: "yma-construction",
    role: "Front-End Team Lead",
    company: "YMA – Construction Project Management System (Japan)",
    period: "Jun 2021 – Mar 2024",
    domain: "Construction Management",
    team: "3+ engineers",
    description:
      "Led front-end team and designed clean-architecture React codebase from scratch.",
    achievements: [
      "Reviewed PRs and mentored junior developers",
      "Owned AWS infrastructure, CI/CD, staging & production deployments",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Golang",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
  },
  {
    id: "comwork-waste",
    role: "Front-End Sub-Lead",
    company: "Comwork – Garbage Scheduling System (Japan)",
    period: "Jun 2021 – Jun 2023",
    domain: "Waste Management",
    team: null,
    description: "Designed scalable dashboards and analytics.",
    achievements: [
      "Enforced code quality and architectural best practices",
      "Guided junior engineers and reviewed merge requests",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Golang",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
  },
  {
    id: "vbms-building",
    role: "Front-End Developer",
    company: "VBMS – VTI Building Management System",
    period: "Nov 2020 – Jul 2021",
    domain: "Building Management",
    team: null,
    description:
      "Built dashboards for controlling electrical and water systems.",
    achievements: [
      "Implemented data visualization for resource consumption analysis",
    ],
    tech: ["React", "Redux", "PostgreSQL", "Golang", "Docker"],
  },
  {
    id: "vfs-finance",
    role: "Front-End Developer",
    company: "VFS – VTI Finance System",
    period: "Jan 2020 – Oct 2020",
    domain: "FinTech",
    team: null,
    description: "Built financial dashboards and reporting systems.",
    achievements: ["Supported backend API development"],
    tech: ["React", "MongoDB", "Golang", "Docker"],
  },
  {
    id: "ministop-intern",
    role: "Front-End Intern",
    company: "Ministop Japan (VTI)",
    period: "Sep 2020 – Jan 2021",
    domain: null,
    team: null,
    description: "Worked in a professional enterprise environment.",
    achievements: ["Developed UI components using Angular"],
    tech: ["Angular"],
  },
];
