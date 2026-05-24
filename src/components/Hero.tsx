import React from "react";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  ArrowRight,
  Download,
} from "lucide-react";
import { RESUME_DOWNLOAD_NAME, RESUME_PDF_PATH } from "../constants/resume";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-transparent">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden mb-8 z-20">
              <img
                src="/profile/AAEC2AC8-13D7-4BD3-BEA8-B58B1EDF3D05_1_105_c.jpeg"
                alt="Khoi Tran"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <div className="mb-6 flex justify-center">
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-500 pb-2 tracking-tight leading-tight">
                Khoi Tran
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              {t(
                "hero.description",
                "Software Engineer & Team Leader | AWS Solutions Architect (Pro) | PMP | Cloud Architecture & Scalable Systems",
              )}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-medium shadow-lg cursor-pointer hover:bg-primary-600 transition-colors"
              >
                {t("hero.viewWork", "View My Work")}
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={RESUME_PDF_PATH}
                download={RESUME_DOWNLOAD_NAME}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/95 dark:bg-slate-900/95 border border-white/60 dark:border-slate-800 text-slate-900 dark:text-white font-medium shadow-lg hover:bg-primary-600 hover:text-white hover:border-primary-500 transition-colors"
              >
                {t("hero.downloadCv", "Download CV")}
                <Download className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
              {[
                {
                  href: "mailto:khoitvhe130007@gmail.com",
                  icon: Mail,
                  label: "khoitvhe130007@gmail.com",
                },
                { href: "tel:0965611359", icon: Phone, label: "0965 611 359" },
                { icon: MapPin, label: "Hanoi, Vietnam" },
                {
                  href: "https://www.linkedin.com/in/khoi-tran-32a1b4206/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/khoitran99",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://blog.khoitv.com",
                  icon: Globe,
                  label: "Personal Blog",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-2 hover:text-primary-600 transition-colors group py-2"
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span className="relative font-medium shadow-sm">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-px bg-primary-600 transition-all group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
