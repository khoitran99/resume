import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Home,
  User,
  Award,
  Code2,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "summary", label: "Executive Summary", icon: User },
  { id: "strengths", label: "Core Strengths", icon: Award },
  { id: "techstack", label: "Tech Stack", icon: Code2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education & Certifications", icon: GraduationCap },
];

const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            duration={500}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-xl border ${
              isActive
                ? "bg-slate-900 text-white border-slate-700 shadow-lg scale-110"
                : "bg-white/80 text-slate-500 border-white/60 shadow-sm hover:bg-white hover:text-slate-800 hover:scale-105"
            }`}
          >
            <Icon className="w-5 h-5" />

            {/* Tooltip */}
            <div className="absolute right-16 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md">
              {item.label}
              {/* Tooltip Chevron */}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FloatingNav;
