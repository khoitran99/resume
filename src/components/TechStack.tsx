import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, Cloud, Terminal, Bot } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";

const technologies = [
  {
    category: "Front-End",
    icon: <Code className="w-5 h-5" />,
    skills: [
      "React",
      "Next.js",
      "Vite",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Zustand",
      "Redux",
      "TanStack Query",
      "Recharts",
    ],
  },
  {
    category: "Back-End",
    icon: <Server className="w-5 h-5" />,
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "Golang",
      "Java Spring Boot",
      "RESTful APIs",
      "GraphQL",
      "Hasura",
    ],
  },
  {
    category: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      "AWS (ECS, EC2, RDS, S3, CloudFront)",
      "GCP (Load Balancing, Storage)",
      "Docker",
      "GitLab CI/CD",
    ],
  },
  {
    category: "Practices & Tooling",
    icon: <Terminal className="w-5 h-5" />,
    skills: [
      "Microservices",
      "Modular Monoliths",
      "Clean Code",
      "SOLID",
      "Agile / Scrum",
      "Git",
    ],
  },
  {
    category: "AI Collaboration",
    icon: <Bot className="w-5 h-5" />,
    skills: ["Cursor", "Antigravity", "Claude", "ChatGPT", "Codex"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
} as const;

const TechStack: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3"
            >
              Technical Expertise
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-slate-900"
            >
              Technology Stack
            </motion.h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div key={index} variants={itemVariants}>
                <SpotlightCard className="h-full p-8 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                      {tech.icon}
                    </div>
                    <h4 className="font-bold text-lg text-slate-800">
                      {tech.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-md text-sm font-medium text-slate-600 group-hover:border-primary-100 group-hover:bg-primary-50/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
