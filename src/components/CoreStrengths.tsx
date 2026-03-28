import React from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { motion } from "framer-motion";
import { Layers, Server, Cloud, Code2, GitMerge, Users } from "lucide-react";
import MaskedHeading from "./ui/MaskedHeading";
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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      mass: 1,
    },
  },
} as const;

const CoreStrengths: React.FC = () => {
  const { t } = useTranslation();
  const strengths = getStrengths(t);

  return (
    <section className="py-24 bg-transparent relative z-10 overflow-hidden">
      <ParallaxBackgroundText text={t("strengths.bgText")} speed={-0.15} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <MaskedHeading
            element="h2"
            text={t("strengths.title")}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-slate-100 justify-center w-full"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)",
                  borderColor: "rgba(14, 165, 233, 0.4)", // text-primary-500 approx
                }}
                className="bg-white/95 dark:bg-slate-900/95 p-8 rounded-2xl shadow-lg border border-slate-500/20 group cursor-pointer relative overflow-hidden"
              >
                {/* Decorative Glowing Orb on Hover */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-300 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

                <div className="w-14 h-14 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-2xl flex items-center justify-center text-primary-600 mb-6 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 relative z-10">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 relative z-10">
                  {strength.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed relative z-10">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrengths;
