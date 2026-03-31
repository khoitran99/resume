import React from "react";

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
  return <Element className={className}>{text}</Element>;
};

export default MaskedHeading;
