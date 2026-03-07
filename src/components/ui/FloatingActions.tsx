import React, { useState, useEffect } from "react";
import { ArrowUp, Download } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show "Back to Top" only when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Download Resume Button */}
      <Magnetic>
        <a
          href="#"
          download
          className="group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-xl border bg-white/80 text-primary-600 border-white/60 shadow-lg hover:bg-primary-600 hover:text-white hover:border-primary-500 hover:scale-105"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: {
                y: [0, 4, -2, 0],
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            initial="initial"
            whileHover="hover"
            className="flex items-center justify-center"
          >
            <Download className="w-5 h-5" />
          </motion.div>

          {/* Tooltip */}
          <div className="absolute right-16 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md">
            Download My Resume
            {/* Tooltip Chevron */}
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
          </div>
        </a>
      </Magnetic>

      {/* Back to Top Button */}
      {isVisible && (
        <Magnetic>
          <button
            onClick={scrollToTop}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-xl border shadow-lg translate-y-0 opacity-100 bg-slate-900 text-white border-slate-700 hover:scale-105"
          >
            <ArrowUp className="w-5 h-5" />

            {/* Tooltip */}
            <div className="absolute right-16 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md">
              Back to Top
              {/* Tooltip Chevron */}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
            </div>
          </button>
        </Magnetic>
      )}
    </div>
  );
};

export default FloatingActions;
