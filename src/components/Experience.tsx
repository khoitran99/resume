import React from "react";
import { Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import ParallaxBackgroundText from "./ui/ParallaxBackgroundText";
import { useLocalizedProjects } from "../hooks/useLocalizedData";

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const currentProjects = useLocalizedProjects();

  return (
    <section className="py-24 bg-transparent overflow-hidden relative">
      <ParallaxBackgroundText
        text={t("projectsSection.title", "Projects").toUpperCase()}
        speed={0.1}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wider text-primary-600 uppercase mb-2 justify-center">
              {t("projectsSection.subtitle", "Selected Projects")}
            </h2>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 justify-center">
              {t("projectsSection.title", "Projects")}
            </h3>
          </div>

          <div className="space-y-12 relative">
            {/* Timeline Background Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

            {currentProjects.map((project, index) => (
              <div
                key={project.id}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Dot (Hidden on mobile) */}
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-primary-100 border-2 border-primary-500 -translate-x-1/2 z-10 box-content"></div>

                <div
                  className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""} gap-8 group`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <div className="bg-white/95 dark:bg-slate-900/95 p-8 rounded-2xl shadow-lg border border-white/60 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-500/50 transition-colors relative group-hover:bg-white/90 dark:group-hover:bg-slate-800/90">
                      {/* Mobile Timeline Dot/Line */}
                      <div className="md:hidden absolute -left-8 top-8 w-4 h-4 rounded-full bg-primary-100 border-2 border-primary-500 z-10 box-content"></div>
                      <div className="md:hidden absolute -left-6.75 top-10 -bottom-12.5 w-px bg-slate-200 last:hidden"></div>

                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-primary-600 transition-colors">
                            {project.title}
                          </h4>
                          <div className="text-slate-600 dark:text-slate-400 font-medium">
                            {project.role}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-primary-600 font-medium">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {project.period}
                        </span>
                        {project.teamSize && (
                          <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs text-slate-500 dark:text-slate-400">
                            {t("project.team")}: {project.teamSize}
                          </span>
                        )}
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 leading-relaxed line-clamp-4">
                        {project.summary}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {project.contributions.slice(0, 3).map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0"></span>
                            <span className="line-clamp-2">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-50 dark:border-slate-800">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alignment - crucial for alternating layout */}
                  <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
