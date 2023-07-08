import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearIcon from "@mui/icons-material/Clear";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as BMCButton } from "../assets/bmc-full-logo.svg";
import { ReactComponent as GitHubMark } from "../assets/github-mark.svg";
import { ReactComponent as GitHubMarkWhite } from "../assets/github-mark-white.svg";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [toggleDarkTheme, setToggleDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (currentTheme) {
      currentTheme === "dark" && setToggleDarkTheme(false);
      return;
    }

    if (prefersDarkTheme.matches) {
      document.documentElement.classList.add("dark");
      setToggleDarkTheme(false);
    } else {
      document.documentElement.classList.remove("dark");
      setToggleDarkTheme(true);
    }
  }, []);

  const handleToggleMenu = (): void => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleDarkTheme = (): void => {
    if (toggleDarkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
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
            <NavLink
              to="/"
              className="flex items-center"
              title="Dune Quotes Homepage"
            >
              <span className="font-DuneRise">Dune Quotes</span>
            </NavLink>
          </div>
          <ul id="nav-items" className="flex items-center">
            <li className="hidden md:block">
              <NavLink
                className="p-3 hover:bg-[#edebe5] rounded-full dark:hover:bg-white dark:hover:bg-opacity-20"
                to="/documentation"
                title="Dune Quotes API Documentation"
              >
                Documentation
              </NavLink>
            </li>
            <li className="hidden md:block">
              <a
                className="flex space-x-1 p-3 hover:bg-[#edebe5] rounded-full dark:hover:bg-white dark:hover:bg-opacity-20"
                href="http://github.com/jessicsw/dune-quotes"
                title="Dune Quotes API GitHub"
              >
                {toggleDarkTheme ? (
                  <GitHubMark width="24" height="24" title="GitHub logo" />
                ) : (
                  <GitHubMarkWhite width="24" height="24" title="GitHub logo" />
                )}
                <span>GitHub</span>
              </a>
            </li>
            <li
              id="bmc"
              className="hidden md:inline rounded-full hover:bg-[#edebe5] dark:hover:bg-black dark:hover:bg-opacity-20 dark:invert"
            >
              <Link
                className="flex items-center p-3"
                to="https://www.buymeacoffee.com/jessicsw"
              >
                <BMCButton width="120" height="25" title="Buy me a coffee" />
              </Link>
            </li>
            <li className="hover:bg-[#edebe5] dark:hover:bg-white dark:hover:bg-opacity-20 rounded-full md:mr-1">
              <button onClick={handleToggleDarkTheme} className="p-3">
                {toggleDarkTheme === false ? (
                  <LightModeOutlinedIcon titleAccess="Toggle light mode" />
                ) : (
                  <DarkModeOutlinedIcon titleAccess="Toggle dark mode" />
                )}
              </button>
            </li>
            <li>
              <button
                id="icon-container"
                className="md:hidden p-3 hover:bg-[#edebe5] rounded-full dark:hover:bg-white dark:hover:bg-opacity-20 mr-1"
                onClick={handleToggleMenu}
              >
                {toggleMenu ? (
                  <ClearIcon
                    className="scale-110"
                    titleAccess="Close mobile navigation menu"
                  />
                ) : (
                  <MenuRoundedIcon
                    className="scale-110"
                    titleAccess="Open mobile navigation menu"
                  />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
      {toggleMenu && (
        <div className="fixed h-screen w-screen bg-white dark:bg-[#121212] border-t-[1px] border-[#edebe5]">
          <ul id="nav-items" className="dark:text-[#eeeeee]">
            <li className="hover:bg-[#edebe5] dark:hover:bg-white dark:hover:bg-opacity-20">
              <NavLink
                className="p-5 relative inline-block w-screen"
                to="/documentation"
                onClick={handleToggleMenu}
                title="Dune Quotes API Documentation"
              >
                Documentation
              </NavLink>
            </li>
            <li className="hover:bg-[#edebe5] dark:hover:bg-white dark:hover:bg-opacity-20">
              <a
                className="flex space-x-1 p-5"
                href="http://github.com/jessicsw/dune-quotes"
                onClick={handleToggleMenu}
                title="Dune Quotes API GitHub"
              >
                {toggleDarkTheme ? (
                  <GitHubMark width="24" height="24" title="GitHub logo" />
                ) : (
                  <GitHubMarkWhite width="24" height="24" title="GitHub logo" />
                )}
                <span>GitHub</span>
              </a>
            </li>
            <li
              id="bmc"
              className="hover:bg-[#edebe5] dark:hover:bg-black dark:hover:bg-opacity-20 dark:invert"
            >
              <Link
                className="inline-block p-5 w-screen"
                to="https://www.buymeacoffee.com/jessicsw"
                title="Buy me a coffee"
              >
                <BMCButton width="120" height="25" title="Buy me a coffee" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
