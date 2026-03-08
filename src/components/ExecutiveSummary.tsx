import React from "react";
import { motion } from "framer-motion";

const ExecutiveSummary: React.FC = () => {
  return (
    <section className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-sm font-bold tracking-wider text-slate-400 uppercase">
              Executive Summary
            </h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 text-center font-light">
            Senior Full-Stack Engineer with{" "}
            <span className="font-semibold text-primary-600">~5 years</span> of
            professional experience delivering enterprise-grade and
            consumer-scale web platforms across{" "}
            <span className="text-slate-900 dark:text-slate-100 font-medium">
              FinTech, HealthTech, EdTech, Investment, Construction, E-commerce,
              and Enterprise Systems
            </span>
            .
          </p>

          <div className="mt-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
            <p>
              Strong specialization in{" "}
              <span className="text-slate-900 dark:text-slate-100 font-medium">
                Front-End Architecture
              </span>{" "}
              (React, Next.js, TypeScript) combined with solid backend
              engineering and hands-on cloud ownership (AWS, GCP). Proven
              ability to design systems from scratch, scale them to production,
              and lead engineers in high-responsibility environments, including
              Japanese enterprise clients.
            </p>
            <p>
              Comfortable owning the{" "}
              <span className="text-slate-900 dark:text-slate-100 font-medium">full lifecycle</span>
              : architecture, development, CI/CD, deployment, performance
              optimization, and long-term maintenance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
