/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

export type BackgroundType = "glassmorphic" | "isometric" | "neural" | "none";

interface BackgroundContextType {
  background: BackgroundType;
  setBackground: (bg: BackgroundType) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined,
);

export const BackgroundProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize from localStorage or default to 'neural'
  const [background, setBackgroundState] = useState<BackgroundType>(() => {
    const saved = localStorage.getItem("portfolio-background");
    if (
      saved &&
      ["glassmorphic", "isometric", "neural", "none"].includes(saved)
    ) {
      return saved as BackgroundType;
    }
    return "neural";
  });

  // Persist choice to localStorage
  const setBackground = (bg: BackgroundType) => {
    setBackgroundState(bg);
    localStorage.setItem("portfolio-background", bg);
  };

  // Optional: Listen for storage events if user has multiple tabs open
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "portfolio-background" && e.newValue) {
        setBackgroundState(e.newValue as BackgroundType);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
};
