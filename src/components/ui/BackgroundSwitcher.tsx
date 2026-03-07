import React, { useState, useRef, useEffect } from "react";
import { Layers, Box, Hexagon, Network, Slash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useBackground,
  type BackgroundType,
} from "../../context/BackgroundContext";
import Magnetic from "./Magnetic";

const BACKGROUND_OPTIONS = [
  { id: "glassmorphic", label: "Glassmorphic", icon: Box },
  { id: "isometric", label: "Data Highway", icon: Hexagon },
  { id: "neural", label: "Neural Net", icon: Network },
  { id: "none", label: "Disabled", icon: Slash },
] as const;

const BackgroundSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { background, setBackground } = useBackground();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Background Options Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="absolute bottom-full right-0 mb-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 shadow-2xl rounded-2xl p-2 flex flex-col gap-1 z-50 origin-bottom w-48"
          >
            <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Background Style
            </div>

            {BACKGROUND_OPTIONS.map((option) => {
              const Icon = option.icon;
              const isActive = background === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => {
                    setBackground(option.id as BackgroundType);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary-500/10 text-primary-600 dark:text-primary-400"
                      : "text-slate-600 hover:bg-slate-100/50 dark:text-slate-300 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-primary-500" : ""}`}
                  />
                  {option.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-bg-indicator"
                      className="w-1.5 h-1.5 rounded-full bg-primary-500 ml-auto"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <Magnetic>
        <button
          onClick={toggleOpen}
          className={`group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-xl border shadow-lg ${
            isOpen || background !== "none"
              ? "bg-primary-600 text-white border-primary-500 shadow-primary-500/20"
              : "bg-white/80 text-primary-600 border-white/60 dark:bg-slate-900/80 dark:text-white dark:border-slate-700 hover:bg-primary-600 hover:text-white"
          } hover:scale-105 z-50`}
          aria-label="Toggle Background"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            <Layers className="w-5 h-5" />
          </motion.div>

          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute right-16 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md">
              Change Background
              {/* Tooltip Chevron */}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
            </div>
          )}
        </button>
      </Magnetic>
    </div>
  );
};

export default BackgroundSwitcher;
