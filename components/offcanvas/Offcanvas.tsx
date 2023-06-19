"use client";
import React from "react";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons";
import Link from "next/link";

interface Props {
  showMenu: boolean;
  toggleMenu: (t: boolean) => void;
}

const Offcanvas: React.FC<Props> = ({ toggleMenu, showMenu }) => {
  return (
    <div
      className={`fixed z-50 top-0 ${
        showMenu ? "left-0" : "inset-x-full"
      } w-full flex min-h-screen transition-all duration-300 ease-in-out`}
    >
      <div className="w-7/12 bg-heroMask" onClick={() => toggleMenu(false)} />
      <nav className="w-5/12 bg-lightBlue4 flex flex-col">
        <button
          className="bg-transparent cursor-pointer self-end p-3"
          onClick={() => toggleMenu(false)}
        >
          <IconContext.Provider
            value={{
              size: "1.5rem",
              className:
                "text-accent-color hover:text-accent-color transition-colors duration-300 ease-in-out",
            }}
          >
            <GrClose />
          </IconContext.Provider>
        </button>
        <Link
          onClick={() => toggleMenu(false)}
          href="/"
          className="ps-4 py-2 hover:bg-violetBlue hover:text-lightBlue4 hover:ts-1"
        >
          Home
        </Link>
        <Link
          onClick={() => toggleMenu(false)}
          href="/products"
          className="ps-4 py-2 hover:bg-violetBlue hover:text-lightBlue4 hover:ts-1"
        >
          Products
        </Link>
        <Link
          onClick={() => toggleMenu(false)}
          href="/profile"
          className="ps-4 py-2 hover:bg-violetBlue hover:text-lightBlue4 hover:ts-1"
        >
          Daily
        </Link>
        <Link
          onClick={() => toggleMenu(false)}
          href="https://grupodanone.com.mx/"
          className="ps-4 py-2 hover:bg-violetBlue hover:text-lightBlue4 hover:ts-1"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Offcanvas;
