import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import AbstractBackground3D from "./components/ui/AbstractBackground3D";
import CustomCursor from "./components/ui/CustomCursor";

// Static imports for Framer Motion layoutId transitions (lazy loading breaks layout calculations)
import ProjectDetail from "./pages/ProjectDetail";
import CertificationDetail from "./pages/CertificationDetail";

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

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Router>
      <div className="bg-transparent min-h-screen text-slate-900 selection:bg-primary-100 selection:text-primary-700 relative z-10">
        <CustomCursor />
        <AbstractBackground3D scrollYProgress={scrollYProgress} />

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-slate-500 to-slate-900 z-50 origin-left"
          style={{ scaleX }}
        />

        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
