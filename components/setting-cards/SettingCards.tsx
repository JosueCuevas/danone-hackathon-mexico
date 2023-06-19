import { UserSettings } from "@userSettings";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import ReadAndUpdateSetting from "@components/read-and-update-setting/ReadAndUpdateSetting";

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
              <ReadAndUpdateSetting
                prop="breakfast"
                value={settings.form.breakfast}
              />
            </div>
            <div className="flex justify-between items-center p-3 border-b border-violetBlue rounded-md mb-2">
              <ReadAndUpdateSetting prop="lunch" value={settings.form.lunch} />
            </div>
            <div className="flex justify-between items-center p-3 border-b border-violetBlue rounded-md mb-2">
              <ReadAndUpdateSetting
                prop="dinner"
                value={settings.form.dinner}
              />
            </div>
            <div className="flex justify-between items-center p-3 border-b border-violetBlue rounded-md mb-2">
              <ReadAndUpdateSetting
                prop="snacks"
                value={settings.form.snacks}
              />
            </div>
          </IconContext.Provider>
        </>
      )}
    </>
  );
};

export default SettingCards;
