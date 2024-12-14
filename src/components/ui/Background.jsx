import React, { useEffect, useState } from "react";
import FlickeringGrid from "../magicui/flickering-grid";
import { Outlet } from "react-router-dom";

function Background() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const updateWidthHeight = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      console.log(window.innerWidth);
    };

    updateWidthHeight(); // Initial update
    window.addEventListener("resize", updateWidthHeight);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", updateWidthHeight);
    };
  }, []);
  return (
    <>
      <Outlet />
      <FlickeringGrid
        className="flex z-0 absolute inset-0 size-full h-fit overflow-scroll"
        squareSize={5}
        gridGap={5}
        color="#6B72ff"
        maxOpacity={0.2}
        flickerChance={0.5}
        width={windowWidth}
        height={windowHeight}
      />
    </>
  );
}

export default Background;
