import React from "react";
import Hero from "../components/Hero";
import ExecutiveSummary from "../components/ExecutiveSummary";
import CoreStrengths from "../components/CoreStrengths";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Education from "../components/Education";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div id="summary">
        <ExecutiveSummary />
      </div>
      <CoreStrengths />
      <TechStack />
      <Experience />
      <Education />
    </>
  );
};

export default Home;
