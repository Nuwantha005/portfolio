import ProjectCard from "./ProjectCard ";
import StackGrid, { transitions } from "react-stack-grid";
import React, { useEffect, useState } from "react";
import sizeMe from "react-sizeme";

const ProjectsGrid = () => {
  const [columnWidth, setColumnWidth] = useState("33.33%");
  const [filters, setFilters] = useState([]);
  const [projects] = useState([
    {
      image: "./Images/Screenshot 2024-09-21 140958.png",
      name: "Project 1",
      description: "This is project 1",
      tags: ["React", "JavaScript"],
    },
    {
      image: "./Images/screenshot-1726909635612.png",
      name: "Single DOF Vibrations",
      description:
        "This programme can be used to animate any free vibration senario.",
      tags: ["MATLAB", "Machine Learning"],
    },
    {
      image: "./Images/Screenshot 2024-09-21 141038.png",
      name: "Project 2",
      description: "This is project 2",
      tags: ["Python", "Machine Learning"],
    },
    {
      image: "./Images/Screenshot 2024-06-27 125024.png",
      name: "Project 2",
      description: "This is project 2",
      tags: ["Python", "Machine Learning"],
    },
    {
      image: "./Images/Screenshot (43).png",
      name: "Project 2",
      description: "This is project 2",
      tags: ["Python", "Machine Learning"],
    },
    {
      image: "./Images/Screenshot 2024-03-02 202217.png",
      name: "Project 2",
      description: "This is project 2",
      tags: ["Python", "Machine Learning"],
    },

    // Add more projects here
  ]);

  useEffect(() => {
    const updateColumnWidth = () => {
      setColumnWidth(window.innerWidth <= 768 ? "100%" : "33.33%");
      console.log(window.innerWidth);
    };

    updateColumnWidth(); // Initial update
    window.addEventListener("resize", updateColumnWidth);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", updateColumnWidth);
    };
  }, []);

  const toggleFilter = (tag) => {
    if (filters.includes(tag)) {
      setFilters(filters.filter((f) => f !== tag));
    } else {
      setFilters([...filters, tag]);
    }
  };

  const filteredProjects = projects.filter(
    (project) =>
      filters.length === 0 || project.tags.some((tag) => filters.includes(tag))
  );

  return (
    <div className="mx-auto px-2">
      {/* Filter Buttons */}
      <div className="mb-8 flex justify-center space-x-4">
        {["React", "JavaScript", "Python", "Machine Learning", "MATLAB"].map(
          (tag, index) => (
            <button
              key={index}
              onClick={() => toggleFilter(tag)}
              className={`px-4 py-2 rounded-full font-medium transition-all border-2 border-slate-400 dark:border-slate-600 ${
                filters.includes(tag)
                  ? "bg-blue-800 text-white"
                  : "bg-gray-800 text-gray-200 hover:bg-blue-500 hover:text-gray-200 dark:bg-gray-200 dark:text-gray-700 dark:hover:bg-blue-500"
              }`}
            >
              {tag}
            </button>
          )
        )}
      </div>

      {/* Projects Grid */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2 grid-flow-dense">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div> */}
      <div className="">
        <StackGrid
          className=""
          columnWidth={columnWidth}
          gutterWidth={30}
          gutterHeight={30}
          monitorImagesLoaded={true}
          vendorPrefix={true}
          // appear={scaleDown.appear}
          // appeared={scaleDown.appeared}
          // enter={scaleDown.enter}
          // entered={scaleDown.entered}
          // leaved={scaleDown.leaved}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              name={project.name}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </StackGrid>
      </div>
    </div>
  );
};

export default sizeMe()(ProjectsGrid);
