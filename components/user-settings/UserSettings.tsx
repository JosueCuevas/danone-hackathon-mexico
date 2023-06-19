"use client";

import SettingCards from "@components/setting-cards/SettingCards";
import { UserSettings } from "@userSettings";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const UserSettings: React.FC = () => {
  const [settings, setSettings] = useState<UserSettings | null>(null);

  useEffect(() => {
    const user_settings = localStorage.getItem("userSettings");
    if (!user_settings) return;
    setSettings(JSON.parse(user_settings));
  }, []);

  return (
    <>
      {settings ? (
        <article className="flex flex-col justify-center items-center mt-14">
          <div className="w-[176px] h-[176px] rounded-full border-[6px]  border-dotted border-lightBlue3 flex flex-col justify-center items-center mb-9">
            <span className="text-xl text-violetBlue">
              {settings.daily_kcal}
            </span>
            <span className="text-violetBlue">kcal</span>
          </div>
          <div className="flex flex-col w-full">
            <SettingCards />
          </div>
        </article>
      ) : (
        <div className="flex justify-center items-center flex-col my-20">
          <p className="text-center">You have not set a limit yet</p>
          <p className="text-center">
            Please set a limit and then return to choose edit
          </p>
          <Link
            href={"/daily-calorie-settings"}
            className="mt-8 text-violetBlue hover:text-vividCerulean"
          >
            Click here
          </Link>
        </div>
      )}
    </>
  );
};

export default UserSettings;
