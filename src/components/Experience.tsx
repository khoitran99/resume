import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { experiences } from "../data/experiences";

const Experience: React.FC = () => {
  const ref = useRef(null);
  /* Removed unused scroll logic */

  return (
    <section
      ref={ref}
      className="py-24 bg-transparent overflow-hidden relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wider text-primary-600 uppercase mb-2">
              My Journey
            </h2>
            <h3 className="text-3xl font-bold text-slate-900">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-12 relative">
            {/* Timeline Background Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id} // Changed to use ID
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Dot (Hidden on mobile) */}
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-primary-100 border-2 border-primary-500 -translate-x-1/2 z-10 box-content"></div>

                <div
                  className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""} gap-8 group`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <Link to={`/project/${exp.id}`} className="block">
                      <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/60 hover:shadow-xl hover:-translate-y-1 hover:border-primary-200 transition-all duration-300 relative group-hover:bg-white/90">
                        {/* Mobile Timeline Dot/Line */}
                        <div className="md:hidden absolute -left-8 top-8 w-4 h-4 rounded-full bg-primary-100 border-2 border-primary-500 z-10 box-content"></div>
                        <div className="md:hidden absolute -left-[27px] top-10 bottom-[-50px] w-px bg-slate-200 last:hidden"></div>

                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2 text-primary-600 font-medium text-sm">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        </div>

                        <h4 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary-600 transition-colors">
                          {exp.role}
                        </h4>
                        <div className="text-slate-600 font-medium mb-4 flex flex-wrap gap-2 items-center">
                          <span>{exp.company}</span>
                          {exp.team && (
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-xs text-slate-500">
                              Team: {exp.team}
                            </span>
                          )}
                        </div>

                        <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                          {exp.description}
                        </p>

                        <ul className="space-y-3 mb-6">
                          {exp.achievements.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-slate-600"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0"></span>
                              <span className="line-clamp-2">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-50">
                          {exp.tech.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Empty space for alignment - crucial for alternating layout */}
                  <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
