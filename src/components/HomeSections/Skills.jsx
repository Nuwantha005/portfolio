import React from "react";
import ProgrammingLanguages from "./ProgrammingLanguages";
import { MarqueeDemo } from "./MarqueeDemo";
import FloatingSection from "../FloatingSection";

function Skills() {
  return (
    <FloatingSection>
      <h1 className="text-bold text-3xl">Skills</h1>
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 overflow-hidden">
        <ProgrammingLanguages />
      </div>
    </FloatingSection>
  );
}

export default Skills;
