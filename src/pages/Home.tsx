import React from "react";
import Hero from "../components/Hero";
import ExecutiveSummary from "../components/ExecutiveSummary";
import CoreStrengths from "../components/CoreStrengths";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Education from "../components/Education";
import FloatingNav from "../components/ui/FloatingNav";
import FloatingActions from "../components/ui/FloatingActions";

const Home: React.FC = () => {
  return (
    <>
      <FloatingNav />
      <FloatingActions />
      <div id="hero">
        <Hero />
      </div>
      <div id="summary">
        <ExecutiveSummary />
      </div>
      <div id="strengths">
        <CoreStrengths />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
    </>
  );
};

export default Home;
