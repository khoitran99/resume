import React, { useRef, useCallback } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(14, 165, 233, 0.15)",
  onMouseMove,
  onMouseLeave,
  ...props
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (overlayRef.current) {
        overlayRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 70%)`;
        overlayRef.current.style.opacity = "1";
      }
      onMouseMove?.(e);
    },
    [spotlightColor, onMouseMove]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (overlayRef.current) {
        overlayRef.current.style.opacity = "0";
      }
      onMouseLeave?.(e);
    },
    [onMouseLeave]
  );

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/60 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-lg transition-colors hover:border-primary-200 dark:hover:border-primary-500/50 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
        aria-hidden
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
