import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface MaskedHeadingProps {
  text: string;
  className?: string;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const MaskedHeading: React.FC<MaskedHeadingProps> = ({
  text,
  className = "",
  element: Element = "h2",
}) => {
  // Split text into lines, then words, to preserve space and line breaks context
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: "150%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom "cinematic" ease out
      },
    },
  };

  return (
    <Element className={`${className} flex flex-wrap gap-x-2`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="overflow-hidden inline-flex mr-[0.25em] last:mr-0"
            // Adding a tiny pb to prevent letters like 'p' or 'g' from getting cut off at the bottom
            style={{ paddingBottom: "0.1em", marginBottom: "-0.1em" }}
          >
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Element>
  );
};

export default MaskedHeading;
