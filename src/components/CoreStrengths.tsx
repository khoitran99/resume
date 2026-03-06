import React from "react";
import { motion } from "framer-motion";
import { Layers, Server, Cloud, Code2, GitMerge, Users } from "lucide-react";

const strengths = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Front-End System Architecture",
    description:
      "Expertise in React, Next.js, and performance engineering for large-scale applications.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Full-Stack Web Platform",
    description:
      "Building scalable platforms with Node.js, NestJS, and modern backend technologies.",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud-Native Infrastructure",
    description:
      "Hands-on experience with AWS and GCP services, including ECS, RDS, and Load Balancing.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Clean Architecture & SOLID",
    description:
      "Writing maintainable, scalable, and testable codebases following industry best practices.",
  },
  {
    icon: <GitMerge className="w-6 h-6" />,
    title: "CI/CD & DevOps",
    description:
      "Automating deployments and operations with Docker, GitLab CI/CD, and cloud tooling.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Technical Leadership",
    description:
      "Leading teams, reviewing code, and mentoring engineers in high-paced environments.",
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
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      mass: 1,
    },
  },
} as const;

const CoreStrengths: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900"
          >
            Core Engineering Strengths
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/60 hover:shadow-xl hover:border-primary-200 transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-6 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:border-primary-100 group-hover:bg-primary-50 transition-all">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {strength.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrengths;
