import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Home,
  User,
  Award,
  Code2,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { t } = useTranslation();

  const navItems = useMemo(
    () => [
      { id: "hero", label: t("nav.home"), icon: Home },
      { id: "summary", label: "Executive Summary", icon: User },
      { id: "strengths", label: "Core Strengths", icon: Award },
      { id: "techstack", label: "Tech Stack", icon: Code2 },
      { id: "projects", label: t("nav.projects"), icon: Briefcase },
      { id: "education", label: t("nav.education"), icon: GraduationCap },
    ],
    [t],
  );

  useEffect(() => {
    const sectionRatios = new Map<string, number>();

    // Use an observer instead of continuous scroll handlers to keep the nav cheap.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        const nextActive = navItems.reduce((bestId, item) => {
          const bestRatio = sectionRatios.get(bestId) ?? 0;
          const currentRatio = sectionRatios.get(item.id) ?? 0;

          return currentRatio > bestRatio ? item.id : bestId;
        }, navItems[0].id);

        if ((sectionRatios.get(nextActive) ?? 0) > 0) {
          setActiveSection(nextActive);
        }
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section) {
        sectionRatios.set(item.id, 0);
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    setActiveSection(sectionId);
    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full border transition-colors ${
              isActive
                ? "bg-slate-900 text-white border-slate-700 shadow-lg"
                : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
            aria-label={item.label}
            aria-pressed={isActive}
          >
            <Icon className="w-5 h-5" />

            <div className="absolute right-16 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md">
              {item.label}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default FloatingNav;
