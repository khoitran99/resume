import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ExecutiveSummary: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-sm font-bold tracking-wider text-slate-400 uppercase">
              {t("summary.title")}
            </h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 text-center font-light">
            {t("summary.p1_1")}{" "}
            <span className="font-semibold text-primary-600">
              {t("summary.p1_2")}
            </span>{" "}
            {t("summary.p1_3")}{" "}
            <span className="text-slate-900 dark:text-slate-100 font-medium">
              {t("summary.p1_4")}
            </span>
            .
          </p>

          <div className="mt-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
            <p>
              {t("summary.p2_1")}{" "}
              <span className="text-slate-900 dark:text-slate-100 font-medium">
                {t("summary.p2_2")}
              </span>{" "}
              {t("summary.p2_3")}
            </p>
            <p>
              {t("summary.p3_1")}{" "}
              <span className="text-slate-900 dark:text-slate-100 font-medium">
                {t("summary.p3_2")}
              </span>
              {t("summary.p3_3")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
