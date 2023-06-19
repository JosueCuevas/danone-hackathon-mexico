"use client";
import { AiOutlineUser } from "react-icons/ai";
import { IconContext } from "react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UserSettings } from "@userSettings";

const LoginBtn = () => {
  const [settings, setSettings] = useState<UserSettings | null>(null);

  useEffect(() => {
    const user_settings = localStorage.getItem("userSettings");
    if (!user_settings) return;
    setSettings(JSON.parse(user_settings));
  }, []);
  return (
    <Link
      className="bg-transparent flex gap-x-2 items-center transition duration-300 ease-in-out  hover:scale-105 hover:text-vividCerulean"
      href={`${settings ? "/profile" : "/daily-calorie-settings"}`}
    >
      <IconContext.Provider
        value={{
          size: "32px",
          className: "text-lightBlue4",
        }}
      >
        <AiOutlineUser />
      </IconContext.Provider>
      <span className="text-sm text-lightBlue4 hidden sm:block">
        Login/Sign Up
      </span>
    </Link>
  );
};

export default LoginBtn;
