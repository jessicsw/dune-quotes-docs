import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearIcon from "@mui/icons-material/Clear";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import BMCButton from "../assets/bmc-full-logo.svg";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import GitHubMark from "../assets/github-mark.svg";
import GitHubMarkWhite from "../assets/github-mark-white.svg";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleDarkTheme, setToggleDarkTheme] = useState(true);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme): dark");
    console.log(currentTheme, prefersDarkTheme);
  }, []);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleDarkTheme = () => {
    if (toggleDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setToggleDarkTheme(!toggleDarkTheme);
  };

  return (
    <div
      id="container"
      className="border-solid border-b-[1px] border-[#edebe5] dark:bg-[#121212] dark:text-[#eeeeee] text-black"
    >
      <div id="bar" className="flex py-3 md:mx-auto max-w-4xl">
        <div id="menu" className="flex min-w-full justify-between">
          <div id="logo" className="flex items-center space-x-2 ml-4">
            <NavLink to="/" className="flex items-center">
              <span className="font-DuneRise">Dune Quotes</span>
            </NavLink>
          </div>
          <ul id="nav-items" className="flex items-center">
            <li className="hidden md:block p-3 hover:bg-[#edebe5] rounded-full dark:hover:bg-white dark:hover:bg-opacity-20">
              <NavLink to="/documentation">Documentation</NavLink>
            </li>
            <li className="hidden md:block p-3 hover:bg-[#edebe5] rounded-full dark:hover:bg-white dark:hover:bg-opacity-20">
              <a
                className="flex space-x-1"
                href="http://github.com/jessicsw/dune-quotes"
              >
                <img
                  src={toggleDarkTheme ? GitHubMark : GitHubMarkWhite}
                  alt="GitHub Logo"
                  width="24"
                  height="24"
                />
                <span>GitHub</span>
              </a>
            </li>
            <li
              id="bmc"
              className="hidden md:block rounded-full  p-3 hover:bg-[#edebe5] dark:hover:bg-black dark:hover:bg-opacity-20 dark:invert"
            >
              <Link to="https://www.buymeacoffee.com/jessicsw">
                <img
                  className="min-w-[120px]"
                  src={BMCButton}
                  alt="Button to buy me a coffee"
                  width="120"
                />
              </Link>
            </li>
            <li className="p-3 hover:bg-[#edebe5] dark:hover:bg-white dark:hover:bg-opacity-20 rounded-full">
              <button onClick={handleToggleDarkTheme}>
                {toggleDarkTheme === false ? (
                  <LightModeOutlinedIcon />
                ) : (
                  <DarkModeOutlinedIcon />
                )}
              </button>
            </li>
            <li>
              <button
                id="icon-container"
                className="md:hidden p-3 hover:bg-[#edebe5] rounded-full mx-2 dark:hover:bg-white dark:hover:bg-opacity-20"
                onClick={handleToggleMenu}
              >
                {toggleMenu ? (
                  <ClearIcon className="scale-110" />
                ) : (
                  <MenuRoundedIcon className="scale-110" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
      {toggleMenu && (
        <div className="fixed h-screen w-screen bg-white dark:bg-[#121212] border-t-[1px] border-[#edebe5]">
          <ul id="nav-items" className="dark:text-[#eeeeee]">
            <li className="p-5 hover:bg-[#edebe5] dark:hover:bg-white dark:hover:bg-opacity-20 ">
              <NavLink to="/documentation" onClick={handleToggleMenu}>
                Documentation
              </NavLink>
            </li>
            <li className="hover:bg-[#edebe5] p-5 dark:hover:bg-white dark:hover:bg-opacity-20">
              <a
                className="flex space-x-1"
                href="http://github.com/jessicsw/dune-quotes"
                onClick={handleToggleMenu}
              >
                <img
                  src={toggleDarkTheme ? GitHubMark : GitHubMarkWhite}
                  alt="GitHub Logo"
                  width="24"
                  height="24"
                />
                <span>GitHub</span>
              </a>
            </li>
            <li
              id="bmc"
              className="p-5 hover:bg-[#edebe5] dark:hover:bg-black dark:hover:bg-opacity-20 dark:invert"
            >
              <Link to="https://www.buymeacoffee.com/jessicsw">
                <img
                  className="min-w-[120px]"
                  src={BMCButton}
                  alt="Button to buy me a coffee"
                  width="120"
                />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
