"use client";
import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-lightBlue3 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row sm:gap-16 sm:justify-between">
        <nav className="hidden sm:flex flex-col gap-2 mb-4 sm:mb-0 text-blue2 ps-8 sm:flex-row sm:justify-between w-9/12 text-sm">
          <Link
            href="https://grupodanone.com.mx/noticiasv2.aspx"
            className="hover:text-vividCerulean"
          >
            NEWS
          </Link>
          <Link href="/products" className="hover:text-vividCerulean">
            PRODUCTS
          </Link>
          <Link
            href="https://grupodanone.com.mx/"
            className="hover:text-vividCerulean"
          >
            ABOUT
          </Link>
          <Link
            href="https://grupodanone.com.mx/impacto/innovacion-social.aspx"
            className="hover:text-vividCerulean"
          >
            IMPACT
          </Link>
        </nav>
        <IconContext.Provider
          value={{
            size: "20px",
            className:
              "text-blue2 transition duration-300 ease-in-out  hover:scale-125 hover:text-vividCerulean",
          }}
        >
          <section className="min-w-full px-8 flex justify-between sm:justify-center sm:gap-8 sm:min-w-0">
            <Link href="https://www.instagram.com/somosdanone/">
              <BsInstagram />
            </Link>
            <Link href="https://www.facebook.com/SomosDanone">
              <FaFacebookF />
            </Link>
            <Link href="https://twitter.com/Danone">
              <BsTwitter />
            </Link>
          </section>
        </IconContext.Provider>
      </div>
    </footer>
  );
};

export default Footer;
