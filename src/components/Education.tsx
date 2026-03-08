import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Globe,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { certifications } from "../data/certifications";
import MaskedHeading from "./ui/MaskedHeading";
import ParallaxBackgroundText from "./ui/ParallaxBackgroundText";

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Education: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <ParallaxBackgroundText text="EDUCATION" speed={-0.1} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/60 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-500/50 transition-all duration-300 h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-lg flex items-center justify-center shadow-sm text-primary-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Education</h3>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100">
                  FPT University – Hanoi
                </h4>
                <p className="text-primary-600 text-sm font-medium mb-2">
                  Bachelor of Software Engineering
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">2017 – 2021</p>
              </div>
            </motion.div>

            {/* Certifications - Now Dynamic */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/60 dark:border-slate-800 shadow-lg h-full flex flex-col hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-lg flex items-center justify-center shadow-sm text-primary-600">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  Certifications
                </h3>
              </div>

              <ul className="space-y-4 grow">
                {certifications.map((cert) => (
                  <motion.li
                    key={cert.id}
                    layoutId={`cert-container-${cert.id}`}
                  >
                    <Link
                      to={`/certification/${cert.id}`}
                      className="flex items-center justify-between group p-2 -mx-2 rounded-lg hover:bg-white dark:bg-slate-900 dark:border-slate-800 hover:shadow-sm transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full group-hover:bg-primary-600 transition-colors"></div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium text-sm group-hover:text-primary-700 transition-colors">
                          {cert.title}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/60 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-500/50 transition-all duration-300 h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-lg flex items-center justify-center shadow-sm text-primary-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Languages</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Vietnamese</span>
                  <span className="text-primary-600 text-sm bg-primary-50 dark:bg-slate-800 px-2 py-1 rounded">
                    Native
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">English</span>
                  <span className="text-primary-600 text-sm bg-primary-50 dark:bg-slate-800 px-2 py-1 rounded">
                    Highly Proficient
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-primary-600 rounded-2xl p-8 md:p-12 text-left text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[0%] left-[-10%] w-[50%] h-[150%] bg-white dark:bg-slate-900 dark:border-slate-800 transform rotate-12 transition-transform duration-1000 group-hover:rotate-6"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <MaskedHeading
                  element="h3"
                  text="Career Direction"
                  className="text-3xl font-bold"
                />
              </div>

              <div className="space-y-6 text-primary-50 text-lg leading-relaxed">
                <p>
                  As a Software Engineer and AWS Solutions Architect –
                  Professional with over 5 years of experience, I specialize in
                  designing, building, and scaling high-performance cloud-native
                  platforms. My technical expertise bridges modern web
                  technologies (React, Next.js, Node.js) with robust backend AWS
                  cloud architecture, focusing heavily on long-term scalability
                  and maintainability.
                </p>
                <p>
                  Beyond engineering, I am deeply passionate about strategic
                  project execution and team leadership. Holding a PMP
                  certification enables me to effectively bridge technical
                  excellence with structured delivery, mentoring developers, and
                  continuously improving engineering processes.
                </p>

                <div className="bg-white/10 rounded-xl p-6 mt-8">
                  <h4 className="font-semibold text-white mb-4">
                    What drives my work:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-200 rounded-full shrink-0"></div>
                      <span>Architecting systems that scale reliably</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-200 rounded-full shrink-0"></div>
                      <span>Empowering and mentoring engineering teams</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-200 rounded-full shrink-0"></div>
                      <span>
                        Designing structured, efficient engineering processes
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-200 rounded-full shrink-0"></div>
                      <span>
                        Leveraging advanced cloud and AI technologies to drive
                        measurable impact
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="pt-4 font-medium text-white italic">
                  I am currently exploring opportunities and collaborations in
                  cloud architecture, scalable product development, and
                  AI-driven system integration.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
