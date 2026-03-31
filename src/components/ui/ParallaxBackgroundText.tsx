import React from "react";

interface ParallaxBackgroundTextProps {
  text: string;
  className?: string;
  speed?: number; // Adjust parallax speed. Negative moves opposite to scroll
}

const ParallaxBackgroundText: React.FC<ParallaxBackgroundTextProps> = ({
  text,
  className = "",
  speed = -0.2,
}) => {
  void speed;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center -translate-y-[10%]"
      aria-hidden="true"
    >
      <div
        className={`text-[12vw] md:text-[8vw] font-black tracking-tighter text-slate-900/5 select-none whitespace-nowrap opacity-30 ${className}`}
      >
        {text}
      </div>
    </div>
  );
};

export default ParallaxBackgroundText;
