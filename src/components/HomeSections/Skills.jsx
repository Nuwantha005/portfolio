import React from "react";
import ProgrammingLanguages from "./ProgrammingLanguages";
import { MarqueeDemo } from "./MarqueeDemo";

function Skills() {
  return (
    <section className="bg-slate-400/50 flex flex-col shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
      <h1 className="text-bold text-3xl">Skills</h1>
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 overflow-hidden">
        <ProgrammingLanguages />
      </div>
    </section>
  );
}

export default Skills;
