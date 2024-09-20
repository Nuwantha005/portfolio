import React from "react";
import TimeLine from "./TimeLine";

function Education() {
  return (
    <section className="bg-slate-400/50 flex flex-col shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
      <h1 className="text-bold text-3xl">Education</h1>
      <TimeLine />
    </section>
  );
}

export default Education;
