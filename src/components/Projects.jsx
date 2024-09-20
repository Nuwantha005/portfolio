import React from "react";

function Projects() {
  return (
    <div className="relative z-10 p-2 grid grid-cols-2 gap-4 ">
      <section className="bg-slate-400/50 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
        Project 1
      </section>
      <section className="bg-slate-400/50 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
        Project 2
      </section>
      <section className="bg-slate-400/50 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
        Project 3
      </section>
      <section className="bg-slate-400/50 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
        Project 4
      </section>
    </div>
  );
}

export default Projects;
