import React, { useState } from "react";
import { RiPencilFill } from "react-icons/ri";

interface Props {
  prop: string;
  value: string;
}

const ReadAndUpdateSetting: React.FC<Props> = ({ prop, value }) => {
  const [isReading, setIsReading] = useState(true);
  const [newValue, setNewValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) < 0) {
      e.target.value = "0";
    }
    setNewValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const settings = localStorage.getItem("userSettings");
    let settingsObj = JSON.parse(settings!);
    settingsObj = {
      form: {
        ...settingsObj.form,
        [prop]: newValue,
      },
    };
    localStorage.setItem("userSettings", JSON.stringify(settingsObj));
    setIsReading(true);
  };

  return (
    <>
      {isReading ? (
        <>
          <span className="flex flex-col">
            {prop.charAt(0).toUpperCase() + prop.slice(1)}:{" "}
            <small className="text-sm text-violetBlue">{newValue}kcal </small>{" "}
          </span>
          <span onClick={() => setIsReading(false)}>
            <RiPencilFill />
          </span>
        </>
      ) : (
        <form className="input-kcal w-full mb-12" onSubmit={handleSubmit}>
          <div
            className="w-full text-sm text-neutral-500 peer-focus:text-primary"
            data-te-input-helper-ref
          >
            {prop.charAt(0).toUpperCase() + prop.slice(1)}
          </div>
          <div className="flex gap-2">
            <section className="flex-grow relative flex flex-wrap items-stretch">
              <input
                type="number"
                required
                onChange={handleChange}
                name="lunch"
                className="relative m-0 -ml-px block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                aria-label="kcal"
                value={newValue}
              />
              <span className="flex items-center whitespace-nowrap rounded-r border border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 bg-lightBlue4">
                kcal
              </span>
            </section>
            <section>
              <button
                type="submit"
                className="p-2 rounded-sm bg-green-600 text-lightBlue4"
              >
                Save
              </button>
            </section>
          </div>
        </form>
      )}
    </>
  );
};

export default ReadAndUpdateSetting;
