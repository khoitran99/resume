import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  Calendar,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { certifications } from "../data/certifications";

const CertificationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const cert = certifications.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!cert) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-600">
        <h2 className="text-2xl font-bold mb-4">Certification Not Found</h2>
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
    <div className="bg-slate-50 min-h-screen text-slate-900">
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
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full md:w-1/3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden relative flex items-center justify-center">
                {/* Image fallback/display */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/400x300?text=Certificate";
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full md:w-2/3"
            >
              <div className="flex items-center gap-2 text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">
                <Award className="w-4 h-4" />
                <span>Professional Certification</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                {cert.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-slate-600 mb-6">
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm text-sm">
                  <ShieldCheck className="w-4 h-4 text-primary-500" />
                  <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm text-sm">
                  <Calendar className="w-4 h-4 text-primary-500" />
                  <span>Issued: {cert.date}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Professional Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Professional Overview
            </h2>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-lg text-slate-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
          </motion.section>

          {/* Skills Validation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Validated Skills & Knowledge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cert.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 hover:border-primary-200 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default CertificationDetail;
