import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import CertificationDetail from "./pages/CertificationDetail";

// State
import { ThemeProvider } from "./context/ThemeContext";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    let timeoutId: number | null = null;
    let attempts = 0;

    const scrollToDestination = () => {
      if (!location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }

      const targetId = decodeURIComponent(location.hash.slice(1));
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        });
        return;
      }

      if (attempts < 20) {
        attempts += 1;
        timeoutId = window.setTimeout(scrollToDestination, 50);
      }
    };

    scrollToDestination();

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [location.pathname, location.hash]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/project/:id"
          element={<Navigate to={{ pathname: "/", hash: "#projects" }} replace />}
        />
        <Route path="/certification/:id" element={<CertificationDetail />} />
      </Routes>
    </>
  );
}

function AppContent() {
  return (
    <Router>
      <div className="bg-transparent min-h-screen text-slate-900 dark:text-slate-100 selection:bg-primary-100 dark:selection:bg-primary-900 selection:text-primary-700 dark:selection:text-primary-100 relative z-10">
        <div className="fixed inset-0 z-0 bg-slate-50 transition-colors duration-700 dark:bg-slate-950 pointer-events-none" />

        <AppRoutes />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
