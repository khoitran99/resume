import React from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(14, 165, 233, 0.15)",
  ...props
}) => {
  void spotlightColor;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/60 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-lg transition-colors hover:border-primary-200 dark:hover:border-primary-500/50 ${className}`}
      {...props}
    >
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
