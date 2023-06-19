import { UserSettings } from "@userSettings";
import { RiPencilFill } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";

const SettingCards: React.FC = () => {
  const [settings, setSettings] = useState<UserSettings | null>(null);

  useEffect(() => {
    const user_settings = localStorage.getItem("userSettings");
    if (!user_settings) return;
    setSettings(JSON.parse(user_settings));
  }, []);
  return (
    <>
      {settings && (
        <>
          <IconContext.Provider
            value={{
              size: "24px",
              className: "text-violetBlue cursor-pointer",
            }}
          >
            <div className="flex justify-between items-center p-3 border-b border-violetBlue rounded-md mb-2">
              <span className="flex flex-col">
                Breakfast:{" "}
                <small className="text-sm text-violetBlue">
                  {settings.form.breakfast}kcal{" "}
                </small>{" "}
              </span>
              <span>
                <RiPencilFill />
              </span>
            </div>
            <div className="flex justify-between items-center p-3 border-b border-violetBlue rounded-md mb-2">
              <span className="flex flex-col">
                Lunch:{" "}
                <small className="text-sm text-violetBlue">
                  {settings.form.lunch}kcal
                </small>
              </span>
              <span>
                <RiPencilFill />
              </span>
            </div>
            <div className="flex justify-between items-center p-3 border-b border-violetBlue rounded-md mb-2">
              <span className="flex flex-col">
                Dinner:{" "}
                <small className="text-sm text-violetBlue">
                  {settings.form.dinner}kcal{" "}
                </small>{" "}
              </span>
              <span>
                <RiPencilFill />
              </span>
            </div>
            <div className="flex justify-between items-center p-3 border-b border-violetBlue rounded-md mb-2">
              <span className="flex flex-col">
                Snacks:{" "}
                <small className="text-sm text-violetBlue">
                  {settings.form.snacks}kcal{" "}
                </small>
              </span>
              <span>
                <RiPencilFill />
              </span>
            </div>
          </IconContext.Provider>
        </>
      )}
    </>
  );
};

export default SettingCards;
