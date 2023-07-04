import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearIcon from "@mui/icons-material/Clear";
import BMCFullLogo from "../assets/bmc-full-logo.svg";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div
      id="container"
      className="border-solid border-b-[1px] border-[#edebe5]"
    >
      <div id="bar" className="flex py-3 md:mx-auto max-w-4xl">
        <div id="menu" className="flex min-w-full justify-between">
          <div id="logo" className="flex items-center space-x-2 ml-4">
            <NavLink to="/" className="flex items-center">
              <span className="font-DuneRise">Dune Quotes</span>
            </NavLink>
          </div>
          <ul id="nav-items" className="flex items-center">
            <li className="hidden md:block p-3 hover:bg-[#edebe5] rounded-full">
              <NavLink to="/documentation">Documentation</NavLink>
            </li>
            <li className="hidden md:block p-3 hover:bg-[#edebe5] rounded-full">
              <a
                className="flex space-x-1"
                href="http://github.com/jessicsw/dune-quotes"
              >
                <img
                  src={require("../assets/github-mark.png")}
                  alt="GitHub Logo"
                  width="24"
                  height="24"
                />
                <span>GitHub</span>
              </a>
            </li>
            <li id="bmc" className="relative">
              <Link to="https://www.buymeacoffee.com/jessicsw">
                <img
                  className="min-w-[140px] p-3 rounded-full hover:bg-[#edebe5]"
                  src={BMCFullLogo}
                  alt="Button to buy me a coffee"
                  width="140"
                />
              </Link>
            </li>
            <li>
              <button
                id="icon-container"
                className="md:hidden p-3 hover:bg-[#edebe5] rounded-full mx-2 "
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
        <div className="fixed h-screen w-screen bg-white">
          <h1 className="font-medium border-b-[1px] border-[#edebe5] mt-5 mx-5">
            API
          </h1>
          <ul id="nav-items" className="mt-2">
            <li className="p-5 hover:bg-[#edebe5]">
              <NavLink to="/documentation" onClick={handleToggleMenu}>
                Documentation
              </NavLink>
            </li>
            <li className="hover:bg-[#edebe5] p-5">
              <a
                className="flex space-x-1"
                href="http://github.com/jessicsw/dune-quotes"
                onClick={handleToggleMenu}
              >
                <img
                  src={require("../assets/github-mark.png")}
                  alt="GitHub Logo"
                  width="24"
                  height="24"
                />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
