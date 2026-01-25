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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
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
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-primary-100 transition-colors h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Education</h3>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  FPT University – Hanoi
                </h4>
                <p className="text-primary-600 text-sm font-medium mb-2">
                  Bachelor of Software Engineering
                </p>
                <p className="text-slate-500 text-sm">2017 – 2021</p>
              </div>
            </motion.div>

            {/* Certifications - Now Dynamic */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary-600">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  Certifications
                </h3>
              </div>

              <ul className="space-y-4 flex-grow">
                {certifications.map((cert) => (
                  <li key={cert.id}>
                    <Link
                      to={`/certification/${cert.id}`}
                      className="flex items-center justify-between group p-2 -mx-2 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full group-hover:bg-primary-600 transition-colors"></div>
                        <span className="text-slate-700 font-medium text-sm group-hover:text-primary-700 transition-colors">
                          {cert.title}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-primary-100 transition-colors h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Languages</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-slate-700 font-medium">Vietnamese</span>
                  <span className="text-primary-600 text-sm bg-primary-50 px-2 py-1 rounded">
                    Native
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-700 font-medium">English</span>
                  <span className="text-primary-600 text-sm bg-primary-50 px-2 py-1 rounded">
                    Highly Proficient
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[150%] bg-white transform rotate-12 transition-transform duration-1000 group-hover:rotate-6"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Career Direction</h3>
              <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                Seeking Senior / Lead Engineer roles at high-engineering-bar
                companies, where I can own complex systems end-to-end, drive
                architecture, and mentor engineers.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
