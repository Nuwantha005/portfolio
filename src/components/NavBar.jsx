import React, { useEffect, useState } from "react";
import { SlidingTabBar } from "./SlidingTabBar";
import ThemeToggle from "./ThemeToggle";
import GradualSpacing from "./magicui/gradual-spacing";

function NavBar({ activeTabIndex, setActiveTabIndex }) {
  const labelName = ["Home", "Projects"];

  return (
    <div className="grid grid-cols-3 gap-4 items-center justify-items-start w-full">
      {/* <h2 className="ml-4 text-align ">{labelName[Number(activeTabIndex)]} </h2> */}
      <GradualSpacing
        className="font-display text-left text-2xl font-bold ml-4 tracking-[-0.1em]  text-black dark:text-white"
        text={labelName[Number(activeTabIndex)]}
      />
      <div className="justify-self-center">
        <SlidingTabBar setActiveTabIndex_={setActiveTabIndex} />
      </div>
      <div className="justify-self-end">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default NavBar;