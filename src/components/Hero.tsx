import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Reduced parallax distance to prevent issues

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig); // Fixed: using springY derived from mouseY

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-slate-50"
    >
      {/* Dynamic Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          style={{
            x: useTransform(springX, (val) => val * 50),
            y: useTransform(springY, (val) => val * 50),
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
        <motion.div
          style={{
            x: useTransform(springX, (val) => val * -50),
            y: useTransform(springY, (val) => val * -50),
          }}
          className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
        <motion.div
          style={{
            x: useTransform(springX, (val) => val * 30),
            y: useTransform(springY, (val) => val * -30),
          }}
          className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        />
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div style={{ y: textY }}>
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

            <div className="overflow-hidden mb-6 flex justify-center">
              <motion.h1
                initial={{ y: "150%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 pb-2 tracking-tight"
              >
                Trần Văn Khôi
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Front-End Architecture • Cloud-Native Systems • Scalable Web
              Platforms
            </motion.p>

            {/* Contact Info - Now inside the parallax wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 md:gap-8 text-slate-600 mb-12"
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
                  href: "https://www.linkedin.com/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-2 hover:text-primary-600 transition-colors group cursor-pointer"
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-px bg-primary-600 transition-all group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </motion.div>

            {/* Magnetic Button Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("summary")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-medium overflow-hidden transition-all hover:pr-10 hover:shadow-lg"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <span className="relative z-10">View My Work</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
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
