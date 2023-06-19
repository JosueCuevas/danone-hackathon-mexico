import Avatar from "@components/avatar/Avatar";
import HamburgerMenu from "@components/hamburger-menu/HamburgerMenu";
import LoginBtn from "@components/login-btn/LoginBtn";
import NavHeader from "@components/nav-header/NavHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  logged: boolean;
}

const Header: React.FC<Props> = ({ logged }) => {
  return (
    <header className="bg-violetBlue min-w-full">
      <div className=" flex justify-between items-center py-2 container mx-auto px-8">
        <Link href="./">
          <Image
            className="transition duration-300 ease-in-out  hover:scale-105 hover:text-vividCerulean"
            alt="logo"
            src={
              "https://images.ctfassets.net/sbt660ufyk41/12h42m7d5NmbtHsYeQvr3Y/a1c628673cfd65c10c0549c58759b3ca/logo_header.png"
            }
            height={49}
            width={104}
          />
        </Link>
        {logged && <NavHeader />}
        <section className="flex items-center gap-x-2">
          <>
            {!logged ? <LoginBtn /> : <Avatar />}
            <HamburgerMenu />
          </>
        </section>
      </div>
    </header>
  );
};

export default Header;
