import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Users,
  Code,
  CheckCircle,
} from "lucide-react";
import { projects } from "../data/experiences";
import { projectsVi } from "../data/experiencesVi";
import { useTranslation } from "react-i18next";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentProjects = i18n.language === "vi" ? projectsVi : projects;
  const project = currentProjects.find((entry) => entry.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent text-slate-600 dark:text-slate-400">
        <h2 className="text-2xl font-bold mb-4">{t("project.notFound")}</h2>
        <button
          onClick={() => navigate("/")}
          className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> {t("project.backHome")}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-transparent min-h-screen text-slate-900 dark:text-slate-100 selection:bg-primary-100 selection:text-primary-700">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t("project.backPortfolio")}
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <motion.div
          layoutId={`project-container-${project.id}`}
          className="container mx-auto px-4 max-w-4xl bg-white/40 backdrop-blur-3xl rounded-3xl p-8 border border-white/60 dark:border-slate-800 shadow-xl"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-6">
              {project.role}
            </p>

            <div className="flex flex-wrap gap-6 text-slate-600 dark:text-slate-400 border-b border-slate-200 pb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-500" />
                <span>{project.period}</span>
              </div>
              {project.teamSize && (
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-500" />
                  <span>
                    {t("project.team")}: {project.teamSize}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              {t("project.overview")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              {project.summary}
            </p>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-primary-600" />
              {t("project.techStack")}
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/60 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 font-medium shadow-sm"
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
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 dark:border-slate-800 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary-600" />
              {t("project.contributions")}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {project.contributions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>

      <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-8 text-center text-slate-500 dark:text-slate-400 text-sm border-t border-white/60 dark:border-slate-800">
        <p>
          © {new Date().getFullYear()} Trần Văn Khôi. Built with React, Vite &
          Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
