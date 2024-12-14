import ProjectCard from "./ProjectCard ";
import StackGrid, { transitions } from "react-stack-grid";
import React, { useEffect, useState } from "react";
import sizeMe from "react-sizeme";
import { Link } from "react-router-dom";

const { scaleDown } = transitions;

const ProjectsGrid = () => {
  const [columnWidth, setColumnWidth] = useState("100%");
  const [filters, setFilters] = useState([]);
  const [projects] = useState([
    {
      image: "./Images/Projects/Communication_SOftware_HomePage.PNG",
      name: "Communication Software",
      description:
        "This a MySQL database linked data management system to manage inventory, sales and all the details of a communication business. Entrie Programme was implemented using Java and features such as chart generation, printing reports, data backup and QR, Barcode generation were implemented.",
      tags: ["Java", "MySQL"],
      link: "/communication_software",
    },
    {
      image: "./Images/Projects/Reverse_Engineering_Project.png",
      name: "Reverse Engineering of a Water Dispensor",
      description:
        "A commercial water dispensor was disassembled, materials were identified, measuremens were taken and modeled in SolidWorks. Furthermore possible manufacturing methods were popsed and solidworks fill  and pack simulation was done to check the feasability of injection moulding.",
      tags: ["CAD", "SolidWorks"],
      link: "",
    },
    {
      image: "./Images/Projects/Single_DOF_MATLAB.png",
      name: "Single DOF Vibration Simulation",
      description:
        "Behaviour of a damped mass under different conditions were simulated in MATLAB. Later an interactive web application was built using p5js and react that allows real time adjustments to the system.",
      tags: ["MATLAB", "P5js", "React", "CSS", "Live Demo", "Visualization"],
      link: "/single_DOF_Vibration_Simulation",
    },
    {
      image: "./Images/Projects/Mechatronics_Project_Thumbnail.png",
      name: "Automatic Book Stacker",
      description:
        "A system that can be used to store books in a bookshelf and retrieve them automatically. System is operated using Arduino and motor drivers and robot gripper is used for actuation. ",
      tags: ["CAD", "Arduino", "AutoCAD", "SolidWorks"],
      link: "",
    },
    {
      image: "./Images/Projects/movies_and_tv_series_Software_Window.PNG",
      name: "Movies and Series Management Software",
      description:
        "A software application to store details of movies that is built using JavaFX that stores data on a MySQL database. UI was designed using Sceneebuilder, and styles were added using CSS.",
      tags: ["JavaFX", "MySQL", "CSS"],
      link: "https://github.com/Nuwantha005/Movie_And_TV_Series_Software_Modern",
    },
    {
      image: "./Images/Projects/Fourier_Image_Example.png",
      name: "Turning Images into Fourier Sums and Drawing",
      description:
        "This program takes an input image, extracts it'scountours using OpenCV, and turns the countours to fourier sums using the DFT algorithm. Then they can be drawn using two sets of rotating circles that represent two fourier sums.",
      tags: ["Processing", "OpenCV", "Visualization"],
      link: "https://github.com/Nuwantha005/turning_images_to_fourier_sums_and_drawing_them",
    },
    {
      image: "./Images/Projects/Complex_Mapping.png",
      name: "Complex Transformations Mapping",
      description:
        "Several programs with different styles were created to animate transformations done by any complex functions. They were animated using Cartesian and Polar coordinate systems, and two methods, points and lines on the plane were used to visualize the transformation.",
      tags: ["Processing", "Visualization"],
      link: "/complex_mapping",
    },
    {
      image: "./Images/Projects/TSP_Bruteforce_Genetic_Comparison.png",
      name: "Travelling Salesman Problem Visualization",
      description:
        "The traveling salesman problem is a popular problem in computer science that deals with finding the shortest path for a given set of points. This program uses two methods: brute force and genetic algorithm to solve this problem, and the processes happening can be seen side by side. ",
      tags: ["Processing", "Visualization"],
      link: "https://github.com/Nuwantha005/TSP_BruteForce_and_Genetic_Comparison",
    },
    {
      image: "./Images/Projects/Fourier_Names_React.png",
      name: "Turning Text into Fourier Sums and Drawing",
      description:
        "This program is an extension for another program by me that turns images into fourier sums and visualizes them. This program can convert a given string into an image, extract its counters, apply a discrete Fourier transform, and draw it using circles.",
      tags: ["Processing", "Visualization"],
      link: "https://github.com/Nuwantha005/drawing_texts_using_fourier_series",
    },

    // Add more projects here
  ]);

  useEffect(() => {
    const updateColumnWidth = () => {
      let widthVal = window.innerWidth;
      if (widthVal <= 768) {
        setColumnWidth("100%");
      } else if (widthVal < 1440) {
        setColumnWidth("50%");
      } else {
        setColumnWidth("33.33%");
      }
      // setColumnWidth(window.innerWidth <= 768 ? "100%" : "33.33%");
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
      <div className="mb-8 flex-row justify-center space-y-4 space-x-4">
        {[
          "CAD",
          "Simulation",
          "SolidWorks",
          "JavaScript",
          "Python",
          "Java",
          "MATLAB",
          "MySQL",
          "JavaFX",
          "Processing",
          "P5js",
          "OpenCV",
          "Live Demo",
          "React",
          "CSS",
          "AutoCAD",
          "Arduino",
          "Visualization",
        ].map((tag, index) => (
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
        ))}
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
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
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
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectCard
                key={index}
                image={project.image}
                name={project.name}
                description={project.description}
                tags={project.tags}
              />
            </Link>
          ))}
        </StackGrid>
      </div>
    </div>
  );
};

export default sizeMe()(ProjectsGrid);
