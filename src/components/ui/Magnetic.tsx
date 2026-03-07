import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  className?: string;
  strength?: number;
}

const Magnetic: React.FC<MagneticProps> = ({
  children,
  className = "",
  strength = 15, // Higher number = more pull
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    // Only pull if we have a ref
    if (!ref.current) return;

    const { height, width, left, top } = ref.current.getBoundingClientRect();

    // Calculate center of the element
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from center to mouse
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Set position as a factor of strength
    setPosition({
      x: distanceX * (strength / 100),
      y: distanceY * (strength / 100),
    });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.5 }}
      data-magnetic
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
