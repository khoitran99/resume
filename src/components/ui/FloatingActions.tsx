import React from "react";
import { ArrowUp, Moon, Sun, Download } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import {
  RESUME_DOWNLOAD_NAME,
  RESUME_PDF_PATH,
} from "../../constants/resume";

const FloatingActions: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <button
        type="button"
        onClick={toggleTheme}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full border bg-white dark:bg-slate-900 text-primary-600 dark:text-white border-slate-200 dark:border-slate-800 shadow-lg hover:bg-primary-600 hover:text-white hover:border-primary-500 transition-colors"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}

        <div className="absolute left-16 opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md">
          Toggle Theme
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-4 border-transparent border-r-slate-900"></div>
        </div>
      </button>

      <a
        href={RESUME_PDF_PATH}
        download={RESUME_DOWNLOAD_NAME}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full border bg-white dark:bg-slate-900 text-primary-600 dark:text-white border-slate-200 dark:border-slate-800 shadow-lg hover:bg-primary-600 hover:text-white hover:border-primary-500 transition-colors"
      >
        <Download className="w-5 h-5" />

        <div className="absolute left-16 opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md">
          {t("hero.downloadCv", "Download CV")}
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-4 border-transparent border-r-slate-900"></div>
        </div>
      </a>

      <button
        type="button"
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full border shadow-lg bg-slate-900 text-white border-slate-700 hover:bg-primary-600 hover:border-primary-500 transition-colors"
      >
        <ArrowUp className="w-5 h-5" />

        <div className="absolute left-16 opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md">
          Back to Top
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-4 border-transparent border-r-slate-900"></div>
        </div>
      </button>
    </div>
  );
};

export default FloatingActions;
