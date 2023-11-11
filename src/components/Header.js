import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(
    function () {
      if (isDarkMode)
        document.querySelector(":root").classList.add("dark-mode");
      else document.querySelector(":root").classList.remove("dark-mode");
    },
    [isDarkMode]
  );

  return (
    <header className="header">
      <h1 className="header-title">Notes</h1>
      <button className="header-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? (
          <span>
            <HiSun />
          </span>
        ) : (
          <span>
            <HiMoon />
          </span>
        )}
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
