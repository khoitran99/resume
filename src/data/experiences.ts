export interface ProjectEntry {
  id: string;
  title: string;
  role: string;
  period: string;
  teamSize: string | null;
  summary: string;
  contributions: string[];
  techStack: string[];
}

export const projects: ProjectEntry[] = [
  {
    id: "kiera-edtech",
    title: "KIERA - Interactive Digital Publishing Platform",
    role: "Senior Frontend Developer",
    period: "October 2025- Present",
    teamSize: "10",
    summary:
      "KIERA is a scalable content engine that transforms static educational materials into interactive digital books, enabling publishers to generate hundreds of unique titles from a single platform.",
    contributions: [
      "Designed reusable React component architecture enabling generation of 100+ interactive digital books from a shared codebase.",
      "Built interactive learning modules (quizzes, hotspots, mini-games) improving student engagement by ~30% during testing phases.",
      "Optimized rendering pipeline for media-heavy educational assets, reducing average page load time from 5.6s - 10s to under 1.2s.",
      "Implemented localization framework supporting 3+ languages across multiple curricula.",
      "Designed CI/CD pipeline and cloud deployment architecture enabling automated publishing workflows for large-scale content generation.",
    ],
    techStack: [
      "React",
      "Vite",
      "NestJS",
      "TypeScript",
      "TailwindCSS",
      "GCP",
      "GCS",
      "AWS",
    ],
  },
  {
    id: "docmed-pom",
    title: "DOCMED - Healthcare Digital Platform",
    role: "Senior Frontend / Full-Stack Developer",
    period: "January 2025- October 2025",
    teamSize: "20+",
    summary:
      "DOCMED is a healthcare ecosystem designed to support doctors with digital prescriptions, clinic supply purchasing, and professional networking services.",
    contributions: [
      "Designed and implemented search architecture using Algolia, improving search response time from ~1.8s to under 200ms.",
      "Defined search indexing strategy and query optimization to support complex filtering for medical products and prescriptions.",
      "Managed and optimized Algolia premium plan (~$10,000/month) by refining indexing strategies and query patterns to control operational costs.",
      "Implemented frontend performance optimizations including lazy loading, bundle splitting, and asset optimization, reducing page load time by 55%.",
      "Designed maintenance mode architecture allowing the platform to gracefully enter maintenance without requiring DevOps to block IPs or perform infrastructure-level changes.",
      "Collaborated with backend and DevOps teams to ensure high availability and reliable deployments across production environments.",
    ],
    techStack: [
      "Next.js",
      "Medusa.js",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Algolia",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    id: "caskx-exchange",
    title: "Cask Exchange - Whisky Investment Marketplace",
    role: "Senior Fullstack Developer",
    period: "July 2024- Present",
    teamSize: "10",
    summary:
      "Cask Exchange is a digital marketplace that allows investors to buy, sell, and manage investments in premium whisky casks, providing institutional-grade infrastructure for alternative asset trading.",
    contributions: [
      "Designed full-stack architecture for a B2B/B2C investment marketplace supporting asset trading and portfolio tracking.",
      "Built backend services using NestJS and PostgreSQL handling thousands of investment transactions and asset records.",
      "Designed scalable cloud infrastructure using AWS ECS, RDS, CloudFront, and ALB, improving system reliability and availability.",
      "Implemented APIs enabling seamless integration between trading interfaces and backend financial services.",
      "Reduced API response time by 40% through query optimization and caching strategies.",
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "AWS (ECS, RDS, CloudFront, ALB)",
    ],
  },
  {
    id: "imotorbike",
    title: "iMotorbike - E-commerce Platform",
    role: "Full-Stack Developer",
    period: "October 2023- June 2024",
    teamSize: "20+",
    summary:
      "A digital marketplace that connects buyers and sellers of secondhand motorcycles, enabling users to search, compare, and purchase vehicles with integrated inventory management and secure transaction workflows. Developed a Next.js-based e-commerce platform supporting product catalog, checkout, and user profiles.",
    contributions: [
      "Developed scalable Next.js e-commerce platform supporting 5,000+ vehicle listings.",
      "Built advanced filtering and search functionality improving product discovery efficiency by 45%.",
      "Implemented responsive UI using TailwindCSS supporting mobile and desktop traffic with consistent performance.",
      "Optimized page rendering and SEO improving organic search traffic by ~30%.",
      "Integrated backend services for catalog management, order workflows, and user profiles.",
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Medusa.js",
      "TailwindCSS",
      "AWS",
    ],
  },
  {
    id: "yma-construction",
    title: "YMA - Construction Project Management System",
    role: "Full-Stack Developer | Frontend Team Lead",
    period: "December 2021- July 2024",
    teamSize: "12+",
    summary:
      "The system manages projects and construction operations for a company named YMA. It helps control revenue, expenditure, and employee timekeeping, and is also used by partners to synchronize data across companies so every stakeholder has the most accurate information.",
    contributions: [
      "Led frontend team of 4 engineers delivering enterprise project management features.",
      "Designed reusable UI architecture using React and TypeScript, reducing development time for new features by 30%.",
      "Implemented CI/CD pipelines enabling automated deployments across staging and production environments.",
      "Managed AWS infrastructure supporting multiple partner organizations using the platform.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Recharts",
      "Redux",
      "HTML",
      "CSS",
      "Docker",
      "GitLab CI/CD",
      "Golang",
      "Node.js",
      "PostgreSQL",
      "AWS Services",
    ],
  },
  {
    id: "comwork-waste",
    title: "Comwork - Garbage Scheduling System",
    role: "Full-Stack Developer | Frontend Sub-Leader",
    period: "August 2021- May 2022",
    teamSize: "12+",
    summary:
      "Comwork - Garbage Scheduling System is an outsourced project for Japanese customers to help them run their businesses. The system helps the company's call center connect with customers when they schedule garbage collection appointments, while giving business owners a view of operations through analyzed statistics and vivid information charts.",
    contributions: [
      "Developed scheduling and appointment management features supporting thousands of service requests per month.",
      "Built operational dashboards providing real-time analytics for call center management.",
      "Designed reusable UI components improving development productivity across the team.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Recharts",
      "Redux",
      "HTML",
      "CSS",
      "Docker",
      "GitLab CI/CD",
      "Golang",
      "PostgreSQL",
      "AWS Services",
    ],
  },
  {
    id: "vbms-building",
    title: "VBMS - VTI Building Management System",
    role: "Full-Stack Developer | Frontend Sub-Leader",
    period: "November 2020- July 2021",
    teamSize: "10+",
    summary:
      "An internal project for controlling electrical devices such as air conditioners, light bulbs, and doors in a building. The system helps the building management department control all facilities in the building.",
    contributions: [
      "Developed monitoring dashboards visualizing energy consumption data across multiple facilities.",
      "Built real-time data visualization for electricity and water usage analytics.",
      "Improved system usability with responsive UI and interactive charts.",
    ],
    techStack: [
      "React.js",
      "Recharts",
      "Redux",
      "Redux Thunk",
      "HTML",
      "CSS",
      "Docker",
      "GitLab CI/CD",
      "Golang",
      "PostgreSQL",
    ],
  },
  {
    id: "vfs-finance",
    title: "VFS - VTI Finance System",
    role: "Full-Stack Developer | Frontend Sub-Leader",
    period: "January 2020- October 2020",
    teamSize: "10+",
    summary:
      "VFS - VTI Finance System is an internal project that helps the finance department in VTI import financial data into the system. After that, the application creates different reports sent to high-level managers in the company or to the public. The data also powers charts that save time when presenting information to the board of management.",
    contributions: [
      "Developed financial dashboards visualizing large datasets for executive reporting.",
      "Built reporting modules that reduced manual report preparation time by ~40%.",
    ],
    techStack: [
      "React.js",
      "Recharts",
      "HTML",
      "CSS",
      "Golang",
      "MongoDB",
      "Docker",
    ],
  },
];
