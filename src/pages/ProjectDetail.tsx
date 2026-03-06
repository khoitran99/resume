import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Briefcase,
  Users,
  Code,
  CheckCircle,
} from "lucide-react";
import { experiences } from "../data/experiences";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = experiences.find((exp) => exp.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent text-slate-600">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-transparent min-h-screen text-slate-900 selection:bg-primary-100 selection:text-primary-700">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 text-primary-600 font-bold tracking-wider uppercase text-sm mb-4">
              <span className="w-8 h-px bg-primary-600"></span>
              {project.domain || "Project"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {project.role} at {project.company}
            </h1>

            <div className="flex flex-wrap gap-6 text-slate-600 border-b border-slate-200 pb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-500" />
                <span>{project.period}</span>
              </div>
              {project.team && (
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-500" />
                  <span>Team: {project.team}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary-500" />
                <span>{project.role}</span>
              </div>
            </div>
          </motion.div>

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              {project.longDescription || project.description}
            </p>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-primary-600" />
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-lg text-slate-800 font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Key Achievements */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary-600" />
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {project.achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-md py-8 text-center text-slate-500 text-sm border-t border-white/60">
        <p>
          © {new Date().getFullYear()} Trần Văn Khôi. Built with React, Vite &
          Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
