import React from "react";
import About from "./HomeSections/About";
import Education from "./HomeSections/Education";
import Skills from "./HomeSections/Skills";

function Home() {
  return (
    <div className="relative z-10 p-10 space-y-6">
      <About />
      <Education />
      <Skills />
    </div>
  );
}

export default Home;
