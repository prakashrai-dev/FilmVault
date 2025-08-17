import React, { useEffect, useState } from "react";
import logo from "../assets/movieLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDark)
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-8 px-3 py-3 sticky top-0 z-50
                    bg-white/80 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <img className="w-[40px] sm:w-[50px]" src={logo} alt="movie-icon" />
        <div className="flex gap-6 font-bold">
          <Link to="/" className="text-blue-600 dark:text-blue-400 text-lg sm:text-2xl">Movies</Link>
          <Link to="/watchlist" className="text-blue-600 dark:text-blue-400 text-lg sm:text-2xl">Watchlist</Link>
        </div>
      </div>

     
    </div>
  );
};

export default Navbar;
