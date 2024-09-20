"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import DotPattern from "./components/magicui/dot-pattern";
import FlickeringGrid from "./components/magicui/flickering-grid";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(""); // Animation classes

  // Function to handle tab changes with animation
  const handleTabChange = (index) => {
    if (index > activeTabIndex) {
      // If we're moving to a right tab
      setAnimationClass("slide-out-left");
      setTimeout(() => {
        setActiveTabIndex(index);
        setAnimationClass("slide-in-right");
      }, 50); // Delay to match the duration of the sliding out
    } else if (index < activeTabIndex) {
      // If we're moving to a left tab
      setAnimationClass("slide-out-right");
      setTimeout(() => {
        setActiveTabIndex(index);
        setAnimationClass("slide-in-left");
      }, 50); // Delay to match the duration of the sliding out
    }
  };

  return (
    <div>
      <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <header className="relative z-15 flex items-center top-0 m-2 w-screen justify-center">
          <NavBar
            setActiveTabIndex={handleTabChange}
            activeTabIndex={activeTabIndex}
          />
        </header>
        <FlickeringGrid
          className="flex z-0 absolute inset-0 size-full h-fit"
          squareSize={5}
          gridGap={5}
          color="#6B7210"
          maxOpacity={0.5}
          flickerChance={0.1}
        />

        {/* Floating Tiles Content */}
        <main className="relative z-10 p-1 w-full overflow-y-auto overflow-x-hidden h-full">
          <div className={`content ${animationClass}`}>
            {/* Conditionally render content based on the selected tab */}
            {activeTabIndex === 0 && <Home />}
            {activeTabIndex === 1 && <Projects />}
            {/* Add more sections as needed */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
