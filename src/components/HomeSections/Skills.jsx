import React from "react";
import ProgrammingLanguages from "./ProgrammingLanguages";
import FloatingSection from "../ui/FloatingSection";

function Skills() {
  return (
    <FloatingSection>
      <h1 className="text-bold text-3xl">Skills</h1>
      <div className="w-11/12  mx-auto px-4 md:px-6 py-12 ">
        <ProgrammingLanguages />
      </div>
    </FloatingSection>
  );
}

export default Skills;
