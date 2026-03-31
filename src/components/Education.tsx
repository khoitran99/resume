import React from "react";
import {
  GraduationCap,
  Award,
  Globe,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { certifications } from "../data/certifications";
import { certificationsVi } from "../data/certificationsVi";
import MaskedHeading from "./ui/MaskedHeading";
import ParallaxBackgroundText from "./ui/ParallaxBackgroundText";
import { useTranslation } from "react-i18next";

const Education: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentCertifications =
    i18n.language === "vi" ? certificationsVi : certifications;

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <ParallaxBackgroundText text={t("education.title")} speed={-0.1} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="bg-white/95 dark:bg-slate-900/95 p-8 rounded-2xl border border-white/60 dark:border-slate-800 shadow-lg hover:border-primary-200 dark:hover:border-primary-500/50 transition-colors h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-lg flex items-center justify-center shadow-sm text-primary-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  {t("education.sectionTitle")}
                </h3>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100">
                  FPT University – Hanoi
                </h4>
                <p className="text-primary-600 text-sm font-medium mb-2">
                  {t("education.degree")}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  2017 – 2021
                </p>
              </div>
            </div>

            {/* Certifications - Now Dynamic */}
            <div className="bg-white/95 dark:bg-slate-900/95 p-8 rounded-2xl border border-white/60 dark:border-slate-800 shadow-lg h-full flex flex-col hover:border-primary-200 dark:hover:border-primary-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-lg flex items-center justify-center shadow-sm text-primary-600">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  {t("education.certifications")}
                </h3>
              </div>

              <ul className="space-y-4 grow">
                {currentCertifications.map((cert) => (
                  <li key={cert.id}>
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
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white/95 dark:bg-slate-900/95 p-8 rounded-2xl border border-white/60 dark:border-slate-800 shadow-lg hover:border-primary-200 dark:hover:border-primary-500/50 transition-colors h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-lg flex items-center justify-center shadow-sm text-primary-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  {t("education.languages")}
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {t("education.vietnamese")}
                  </span>
                  <span className="text-primary-600 text-sm bg-primary-50 dark:bg-slate-800 px-2 py-1 rounded">
                    {t("education.native")}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {t("education.english")}
                  </span>
                  <span className="text-primary-600 text-sm bg-primary-50 dark:bg-slate-800 px-2 py-1 rounded">
                    {t("education.fluent")}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-primary-600 rounded-2xl p-8 md:p-12 text-left text-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[0%] left-[-10%] w-[50%] h-[150%] bg-white dark:bg-slate-900 dark:border-slate-800 transform rotate-12 transition-transform duration-1000 group-hover:rotate-6"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <MaskedHeading
                  element="h3"
                  text={t("education.careerTitle")}
                  className="text-3xl font-bold"
                />
              </div>

              <div className="space-y-6 text-primary-50 text-lg leading-relaxed">
                <p>{t("education.careerP1")}</p>
                <p>{t("education.careerP2")}</p>

                <div className="bg-white/10 rounded-xl p-6 mt-8">
                  <h4 className="font-semibold text-white mb-4">
                    {t("education.drives")}
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-200 rounded-full shrink-0"></div>
                      <span>{t("education.drive1")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-200 rounded-full shrink-0"></div>
                      <span>{t("education.drive2")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-200 rounded-full shrink-0"></div>
                      <span>{t("education.drive3")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-200 rounded-full shrink-0"></div>
                      <span>{t("education.drive4")}</span>
                    </li>
                  </ul>
                </div>

                <p className="pt-4 font-medium text-white italic">
                  {t("education.lookingFor")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
