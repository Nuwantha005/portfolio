import React, { useEffect, useRef, useState } from "react";

const allTabs = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "projects",
    name: "Projects",
  },
  ,
];

export const SlidingTabBar = ({ setActiveTabIndex_ }) => {
  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setActiveTabIndex_(activeTabIndex);

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className="flew-row relative mx-auto flex h-12 rounded-3xl border border-slate-700/40 bg-gray-600 dark:border-white/40 dark:bg-slate-200 px-2 backdrop-blur-md">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-3xl bg-gray-300 dark:bg-gray-900" />
      </span>
      {allTabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive ? `` : `hover:text-blue-400 dark:hover:text-blue-800`
            } my-auto cursor-pointer select-none rounded-full px-4 text-center font-bold text-black dark:text-blue-500`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};
