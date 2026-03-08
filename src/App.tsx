import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import GlassmorphicPrimitivesBackground from "./components/ui/GlassmorphicPrimitivesBackground";
import IsometricDataHighway from "./components/ui/IsometricDataHighway";
import NeuralNetworkBackground from "./components/ui/NeuralNetworkBackground";
import CustomCursor from "./components/ui/CustomCursor";

// Static imports for Framer Motion layoutId transitions (lazy loading breaks layout calculations)
import ProjectDetail from "./pages/ProjectDetail";
import CertificationDetail from "./pages/CertificationDetail";

// State
import { BackgroundProvider, useBackground } from "./context/BackgroundContext";
import { ThemeProvider } from "./context/ThemeContext";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/certification/:id" element={<CertificationDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { background } = useBackground();

  return (
    <Router>
      <div className="bg-transparent min-h-screen text-slate-900 dark:text-slate-100 selection:bg-primary-100 dark:selection:bg-primary-900 selection:text-primary-700 dark:selection:text-primary-100 relative z-10">
        <CustomCursor />

        {/* Render Selected Background */}
        {background === "glassmorphic" && (
          <GlassmorphicPrimitivesBackground scrollYProgress={scrollYProgress} />
        )}
        {background === "isometric" && (
          <IsometricDataHighway scrollYProgress={scrollYProgress} />
        )}
        {background === "neural" && (
          <NeuralNetworkBackground scrollYProgress={scrollYProgress} />
        )}
        {background === "none" && (
          <div className="fixed inset-0 z-0 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-700 dark:bg-slate-950 pointer-events-none" />
        )}

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-slate-500 to-slate-900 z-50 origin-left"
          style={{ scaleX }}
        />

        <AppRoutes />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BackgroundProvider>
        <AppContent />
      </BackgroundProvider>
    </ThemeProvider>
  );
}

export default App;
