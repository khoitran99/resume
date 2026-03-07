/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize from localStorage or default to 'light'
  const [theme, setThemeState] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") {
      return saved as ThemeType;
    }
    return "light"; // Default to light mode
  });

  const applyTheme = (newTheme: ThemeType) => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Optional: Listen for storage events if user has multiple tabs open
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (
        e.key === "portfolio-theme" &&
        (e.newValue === "light" || e.newValue === "dark")
      ) {
        setThemeState(e.newValue as ThemeType);
        applyTheme(e.newValue as ThemeType);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
