"use client";
import Offcanvas from "@components/offcanvas/Offcanvas";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";

const HamburgerMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = (s: boolean) => {
    setShowMenu(s);
  };
  return (
    <>
      <button
        type="button"
        className="sm:hidden"
        onClick={() => toggleMenu(true)}
      >
        <IconContext.Provider
          value={{
            size: "2rem",
            className:
              "sm:hidden text-lightBlue4 hover:text-lightBlue2 transition-all duration-300 ease-in-out hover:scale-105",
          }}
        >
          <FiMenu />
        </IconContext.Provider>
      </button>
      <Offcanvas toggleMenu={toggleMenu} showMenu={showMenu} />
    </>
  );
};

export default HamburgerMenu;
