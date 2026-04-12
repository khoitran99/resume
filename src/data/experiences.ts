export interface ProjectMediaEntry {
  src: string;
  alt: string;
}

export interface ProjectLinkEntry {
  label: string;
  href: string;
}

export interface ProjectCaseStudy {
  challenge: string[];
  approach: string[];
  impact: string[];
  media?: ProjectMediaEntry[];
  links?: ProjectLinkEntry[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  role: string;
  period: string;
  teamSize: string | null;
  summary: string;
  contributions: string[];
  techStack: string[];
  caseStudy: ProjectCaseStudy;
}

export const projects: ProjectEntry[] = [
  {
    id: "kiera-edtech",
    title: "KIERA - Interactive Digital Publishing Platform",
    role: "Senior Frontend Developer",
    period: "October 2025- March 2026",
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
    caseStudy: {
      challenge: [
        "Traditional publishing workflows were producing static assets separately for each book, which slowed launches and made interactive features expensive to maintain.",
        "The platform had to support media-heavy content, curriculum-specific localization, and a consistent learning experience without forking the codebase for every title.",
        "Delivery needed to scale for publishers while keeping authoring, QA, and release operations predictable.",
      ],
      approach: [
        "Designed a reusable React component system and content model so shared learning patterns could be configured per title instead of rebuilt from scratch.",
        "Built quizzes, hotspots, and mini-games as composable modules with consistent data contracts and rendering behavior.",
        "Optimized asset loading, rendering, and deployment workflows to support large media payloads and automated publishing across cloud environments.",
      ],
      impact: [
        "Enabled generation of 100+ interactive book variants from a shared platform foundation.",
        "Reduced average load time for rich pages from 5.6-10 seconds to under 1.2 seconds.",
        "Improved student engagement during testing while reducing operational friction for new releases.",
      ],
    },
  },
  {
    id: "docmed-pom",
    title: "DOCMED - Healthcare Digital Platform",
    role: "Senior Frontend / Full-Stack Developer",
    period: "November 2024- November 2025",
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
    caseStudy: {
      challenge: [
        "The product needed fast and accurate search across complex healthcare catalog data, prescription workflows, and business-specific filters.",
        "Production maintenance windows had to be handled safely without relying on risky infrastructure-level blocking.",
        "As traffic and catalog size grew, frontend performance and Algolia spend both became operational concerns.",
      ],
      approach: [
        "Reworked the search architecture around Algolia indices, ranking strategy, and query design tailored to medical catalog discovery.",
        "Introduced lazy loading, code splitting, and asset optimization to reduce the web app's initial load cost.",
        "Designed application-level maintenance controls so business and DevOps teams could coordinate releases with less operational risk.",
      ],
      impact: [
        "Dropped search latency from roughly 1.8 seconds to under 200 milliseconds.",
        "Improved page load performance by 55% across key user flows.",
        "Made the premium Algolia plan more efficient while protecting availability for business-critical operations.",
      ],
      media: [
        {
          src: "/project/docmed/607052363_4656996827860779_391351012101964168_n.jpg",
          alt: "DOCMED platform interface overview",
        },
      ],
    },
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
    caseStudy: {
      challenge: [
        "The marketplace needed to support trustworthy B2B and B2C investment flows, portfolio visibility, and transaction-heavy backend services.",
        "Financial records and asset data had to remain reliable as the platform scaled.",
        "The cloud foundation needed to be resilient enough for an institutional-style product experience.",
      ],
      approach: [
        "Designed a full-stack architecture that separated marketplace journeys, portfolio workflows, and backend domain services behind clear APIs.",
        "Built NestJS and PostgreSQL services to manage transaction history, asset records, and investment lifecycle events.",
        "Provisioned scalable AWS infrastructure with ECS, RDS, CloudFront, and ALB, then optimized queries and caching for responsiveness.",
      ],
      impact: [
        "Supported thousands of investment transactions and asset records on a single platform.",
        "Reduced API response time by 40% through query tuning and caching improvements.",
        "Established a production-ready foundation for future marketplace and portfolio growth.",
      ],
    },
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
    caseStudy: {
      challenge: [
        "The business needed a single operational system covering finance, timekeeping, construction workflows, and partner data synchronization.",
        "Frontend delivery had to scale across a growing enterprise feature set used by multiple organizations.",
        "The team needed stronger release discipline and infrastructure support for business-critical usage.",
      ],
      approach: [
        "Led the frontend team, introduced reusable React and TypeScript UI architecture, and aligned implementation patterns across features.",
        "Built CI/CD workflows and managed AWS infrastructure supporting staging and production releases.",
        "Coordinated data-heavy dashboards and operational modules with backend services used by internal teams and external partners.",
      ],
      impact: [
        "Reduced development time for new frontend features by around 30%.",
        "Improved release reliability with automated deployment pipelines.",
        "Helped the platform support multiple partner organizations with shared operational visibility.",
      ],
    },
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
    caseStudy: {
      challenge: [
        "The system had to coordinate large appointment volumes between customers, dispatch operations, and call-center teams.",
        "Managers needed clear dashboards to understand service demand and operational bottlenecks quickly.",
        "Because the project was delivered for an external client, the frontend needed reusable patterns to keep delivery efficient.",
      ],
      approach: [
        "Built scheduling and appointment management features around the workflows used daily by call-center operators.",
        "Developed dashboard views and chart-driven reporting for service volume, scheduling, and operational visibility.",
        "Invested in reusable UI components so future features could be delivered faster and with more consistency.",
      ],
      impact: [
        "Supported thousands of monthly service requests with more structured scheduling workflows.",
        "Improved visibility into call-center operations and appointment demand.",
        "Raised team productivity by reducing repeated UI implementation work.",
      ],
    },
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
    caseStudy: {
      challenge: [
        "Building managers needed centralized visibility and control over connected devices and utility usage.",
        "Operational data had to be surfaced in near real time to be useful for monitoring and response.",
        "The interface needed to stay usable for day-to-day operational staff across dashboards and charts.",
      ],
      approach: [
        "Built monitoring dashboards for facility management with responsive layouts and data-rich visualizations.",
        "Implemented electricity and water analytics views using interactive charting components.",
        "Improved usability by tightening interaction patterns and responsive behavior for common monitoring tasks.",
      ],
      impact: [
        "Gave facility teams a clearer view of energy and water usage across the building.",
        "Improved usability for device monitoring and day-to-day operations.",
        "Strengthened the platform as a central control surface for internal management teams.",
      ],
    },
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
    caseStudy: {
      challenge: [
        "Finance teams needed a faster way to import data, build reports, and communicate results to leadership.",
        "Large datasets had to be translated into accessible dashboards without slowing the reporting cycle.",
        "Manual report preparation was consuming time that should have gone to analysis and decision-making.",
      ],
      approach: [
        "Built financial dashboards and reporting modules tailored to executive and operational reporting needs.",
        "Structured visualization flows so imported finance data could be explored and presented quickly.",
        "Focused on pragmatic UI patterns that made repeated reporting tasks easier for internal teams.",
      ],
      impact: [
        "Reduced manual report preparation time by around 40%.",
        "Improved visibility into large financial datasets for management review.",
        "Shortened the path from imported data to presentation-ready reporting.",
      ],
    },
  },
];
