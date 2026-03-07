import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Magnetic from "./ui/Magnetic";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  ArrowRight,
} from "lucide-react";

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Reduced parallax distance to prevent issues

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-transparent"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            style={{ y: textY }}
            className="flex flex-col items-center"
          >
            {/* Avatar Profile */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden mb-8 z-20"
            >
              <img
                src="/profile/AAEC2AC8-13D7-4BD3-BEA8-B58B1EDF3D05_1_105_c.jpeg"
                alt="Khoi Tran"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Animated Text Reveal */}
            <div className="overflow-hidden mb-4 flex justify-center">
              <motion.h2
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Custom ease for "editorial" feel
                className="text-primary-600 font-bold tracking-widest uppercase text-sm"
              >
                Senior Full-Stack Engineer
              </motion.h2>
            </div>

            <div className="overflow-hidden mb-6 flex justify-center h-24 md:h-32">
              <motion.h1
                initial={{ y: "150%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-500 pb-2 tracking-tight"
              >
                <TypeAnimation
                  sequence={[
                    "Trần Văn Khôi",
                    2000,
                    "Khôi Trần",
                    2000,
                    "Software Engineer",
                    2000,
                    "Marathon Runner",
                    2000,
                    "Bodybuilder",
                    2000,
                    "Tech Savvy",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Software Engineer & Team Leader | AWS Solutions Architect (Pro) |
              PMP | Cloud Architecture & Scalable Systems
            </motion.p>

            {/* Contact Info - Now inside the parallax wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-slate-600 mb-12 max-w-3xl mx-auto"
            >
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
                <Magnetic key={idx} strength={10}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 hover:text-primary-600 transition-colors group cursor-pointer py-2"
                    target={
                      item.href?.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {item.label === "GitHub" ? (
                      <motion.div
                        variants={{
                          initial: { rotate: 0 },
                          hover: {
                            rotate: [0, -15, 10, -10, 5, 0],
                            transition: { duration: 0.5, ease: "easeInOut" },
                          },
                        }}
                        initial="initial"
                        whileHover="hover"
                        className="flex items-center justify-center p-1 -m-1"
                      >
                        <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </motion.div>
                    ) : (
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    )}
                    <span className="relative font-medium shadow-sm">
                      {item.label}
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-primary-600 transition-all group-hover:w-full"></span>
                    </span>
                  </a>
                </Magnetic>
              ))}
            </motion.div>

            {/* Magnetic Button Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Magnetic strength={20}>
                <button
                  onClick={() =>
                    document
                      .getElementById("summary")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-medium overflow-hidden transition-all hover:pr-10 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                >
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-slate-700 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
