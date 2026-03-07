import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBackgroundTextProps {
  text: string;
  className?: string;
  speed?: number; // Adjust parallax speed. Negative moves opposite to scroll
}

const ParallaxBackgroundText: React.FC<ParallaxBackgroundTextProps> = ({
  text,
  className = "",
  speed = -0.2, // Default gentle parallax
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Track from when it enters bottom to leaves top
  });

  // Transform scroll progress (0 to 1) into vertical movement
  // -100px to 100px is a good default gentle range
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * -150}%`, `${speed * 150}%`],
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center -translate-y-[10%]"
      aria-hidden="true"
    >
      <motion.div
        style={{ y }}
        className={`text-[12vw] md:text-[8vw] font-black tracking-tighter text-slate-900/5 select-none whitespace-nowrap opacity-30 ${className}`}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default ParallaxBackgroundText;
