import React from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { Layers, Server, Cloud, Code2, GitMerge, Users } from "lucide-react";
import ParallaxBackgroundText from "./ui/ParallaxBackgroundText";

const getStrengths = (t: TFunction) => [
  {
    icon: <Layers className="w-6 h-6" />,
    title: t("strengths.frontendTitle"),
    description: t("strengths.frontendDesc"),
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: t("strengths.backendTitle"),
    description: t("strengths.backendDesc"),
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: t("strengths.cloudTitle"),
    description: t("strengths.cloudDesc"),
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: t("strengths.cleanCodeTitle"),
    description: t("strengths.cleanCodeDesc"),
  },
  {
    icon: <GitMerge className="w-6 h-6" />,
    title: t("strengths.devopsTitle"),
    description: t("strengths.devopsDesc"),
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: t("strengths.leadershipTitle"),
    description: t("strengths.leadershipDesc"),
  },
];

const CoreStrengths: React.FC = () => {
  const { t } = useTranslation();
  const strengths = getStrengths(t);

  return (
    <section className="py-24 bg-transparent relative z-10 overflow-hidden">
      <ParallaxBackgroundText text={t("strengths.bgText")} speed={-0.15} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-slate-100 justify-center w-full">
            {t("strengths.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white/95 dark:bg-slate-900/95 p-8 rounded-2xl shadow-lg border border-slate-500/20 group relative overflow-hidden transition-colors hover:border-primary-200 dark:hover:border-primary-500/50"
              >
                <div className="w-14 h-14 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-2xl flex items-center justify-center text-primary-600 mb-6 shadow-sm border border-slate-100 group-hover:bg-primary-600 group-hover:text-white transition-colors relative z-10">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 relative z-10">
                  {strength.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed relative z-10">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrengths;
