import { useState, useEffect } from "react";

const ThemeToggle = () => {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Apply saved theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div>
      {/* <button
      onClick={toggleTheme}
      className="p-2 text-white bg-gray-800 dark:bg-gray-200 dark:text-gray-800 rounded-full transition"
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button> */}
      <button
        onClick={toggleTheme}
        type="button"
        className="p-2 rounded-full text-gray-800 hover:bg-gray-200 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-800"
      >
        {isDarkMode ? (
          // Moon icon for dark mode
          <span className="group inline-flex justify-center items-center size-9">
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </span>
        ) : (
          // Sun icon for light mode
          <span className="group inline-flex justify-center items-center size-9">
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </span>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
