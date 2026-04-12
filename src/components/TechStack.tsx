import React from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { Code, Database, Server, Cloud, Terminal, Bot } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";
import MaskedHeading from "./ui/MaskedHeading";
import ParallaxBackgroundText from "./ui/ParallaxBackgroundText";

const getTechnologies = (t: TFunction) => [
  {
    category: "Languages",
    icon: <Code className="w-5 h-5" />,
    skills: ["JavaScript", "TypeScript", "Python", "Go", "Java"],
  },
  {
    category: "Frontend",
    icon: <Code className="w-5 h-5" />,
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "Redux",
      "Zustand",
      "Pinia",
      "TanStack Query",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Django",
      "Spring Boot",
      "REST API",
      "GraphQL",
      "WebSocket/Socket.IO",
    ],
  },
  {
    category: "Database & ORM",
    icon: <Database className="w-5 h-5" />,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "DynamoDB",
      "Redis",
      "Elasticsearch",
      "Prisma",
      "TypeORM",
      "MikroORM",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      "AWS",
      "GCP",
      "Docker",
      "Terraform",
      "CI/CD",
      "GitLab CI",
      "GitHub Actions",
      "Nginx",
      "Cloud Architecture",
    ],
  },
  {
    category: "Engineering Practices",
    icon: <Terminal className="w-5 h-5" />,
    skills: [
      "System Design",
      "Clean Architecture",
      "SOLID Principles",
      "Code Review",
      "Agile/Scrum",
    ],
  },
  {
    category: "Testing & Tools",
    icon: <Bot className="w-5 h-5" />,
    skills: [
      "Jest",
      "Vitest",
      "Playwright",
      "Supertest",
      "Testcontainers",
      "Cursor",
      "Claude Code",
      "Codex",
      "Antigravity",
    ],
  },
];

const TechStack: React.FC = () => {
  const { t } = useTranslation();
  const technologies = getTechnologies(t);

  return (
    <section className="py-24 bg-transparent relative z-10 overflow-hidden">
      <ParallaxBackgroundText text={t("expertise.title")} speed={0.15} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <MaskedHeading
              element="h2"
              text={t("expertise.subtitle")}
              className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3 justify-center"
            />
            <MaskedHeading
              element="h3"
              text={t("expertise.title")}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 justify-center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index}>
                <SpotlightCard className="h-full p-8 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      {tech.icon}
                    </div>
                    <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200">
                      {tech.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 rounded-md text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:border-primary-100 group-hover:bg-primary-50/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
