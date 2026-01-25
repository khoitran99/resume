import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Home from "./pages/Home";

// Lazy load detail page
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const CertificationDetail = lazy(() => import("./pages/CertificationDetail"));

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Router>
      <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-primary-100 selection:text-primary-700">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 z-50 origin-left"
          style={{ scaleX }}
        />

        <Suspense
          fallback={
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route
              path="/certification/:id"
              element={<CertificationDetail />}
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
