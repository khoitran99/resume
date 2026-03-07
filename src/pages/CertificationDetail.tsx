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
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!cert) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent text-slate-600">
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
    <div className="bg-transparent min-h-screen text-slate-900">
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
        <motion.div
          layoutId={`cert-container-${cert.id}`}
          className="container mx-auto px-4 max-w-4xl bg-white/40 backdrop-blur-3xl rounded-3xl p-8 border border-white/60 shadow-xl"
        >
          {/* Header Section */}
          <div className="flex flex-col items-center gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-3xl bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/60 cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="aspect-4/3 bg-slate-50 rounded-xl overflow-hidden relative flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/400x300?text=Certificate";
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full text-center flex flex-col items-center"
            >
              <div className="flex items-center gap-2 text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">
                <Award className="w-4 h-4" />
                <span>Professional Certification</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {cert.title}
              </h1>

              <div className="flex flex-wrap justify-center gap-4 text-slate-600 mb-6">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/60 shadow-sm text-sm">
                  <ShieldCheck className="w-4 h-4 text-primary-500" />
                  <span className="font-medium">{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/60 shadow-sm text-sm">
                  <Calendar className="w-4 h-4 text-primary-500" />
                  <span className="font-medium">Issued: {cert.date}</span>
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
            <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center md:text-left">
              Professional Overview
            </h2>
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-white/60 shadow-lg">
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
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">
              Validated Skills & Knowledge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cert.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-xl p-4 rounded-xl border border-white/60 shadow-md flex items-center gap-3 hover:border-primary-200 hover:shadow-lg transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-100 bg-black/90 flex flex-col items-center justify-center backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="absolute top-4 right-4 md:top-8 md:right-8 z-110">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors cursor-pointer border border-white/20"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <img
            src={cert.image}
            alt={cert.title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking the image itself
          />
        </div>
      )}
    </div>
  );
};

export default CertificationDetail;
