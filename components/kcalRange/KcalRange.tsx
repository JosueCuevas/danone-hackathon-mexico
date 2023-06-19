"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./kcal.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import Link from "next/link";
import { UserSettings } from "@userSettings";

const KcalRange: React.FC = () => {
  const [value, setValue] = useState(100);
  const [form, setForm] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
    snacks: "",
  });
  const [userSettings, setUserSettings] = useState<UserSettings | null>(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const range = useRef<HTMLInputElement>(null);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const min = parseInt(e.target.min);
    const max = parseInt(e.target.max);
    const val = parseInt(e.target.value);
    if (range.current) {
      range.current.style.backgroundSize =
        ((val - min) * 100) / (max - min) + "% 100%";
    }
    setValue(val);
  };

  useEffect(() => {
    if (range.current) {
      range.current.style.backgroundSize = "0% 100%";
    }

    const settings = localStorage.getItem("userSettings");
    if (!settings) return;
    setUserSettings(JSON.parse(settings));
    setLoader(false);
  }, [loader]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) < 0) {
      e.target.value = "0";
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let sum =
      parseFloat(form.breakfast) +
      parseFloat(form.dinner) +
      parseFloat(form.lunch) +
      parseFloat(form.snacks);
    if (sum != value) {
      setError((prev) => !prev);
    } else {
      setLoader(true);
      localStorage.setItem(
        "userSettings",
        JSON.stringify({ form, daily_kcal: value })
      );
    }
  };

  return (
    <>
      {userSettings ? (
        <>
          <p className="text-xl text- font-semibold text-center my-4">
            Settings saved successfully
          </p>
          <div className="flex justify-center flex-col items-center">
            <IconContext.Provider
              value={{ size: "32px", className: "text-green-400" }}
            >
              <BsFillCheckCircleFill />
            </IconContext.Provider>
            <section className="flex w-9/12 justify-evenly gap-4 mx-auto mt-2">
              <Link
                href={"/profile"}
                className="px-4 py-2 rounded-lg bg-vividCerulean text-lightBlue4 text-sm transition-transform duration-300 ease-in-out hover:scale-105"
              >
                Your profile
              </Link>
              <Link
                href={"/products"}
                className="px-4 py-2 text-sm rounded-lg text-lightBlue4 bg-violetBlue transition-transform duration-300 ease-in-out hover:scale-105"
              >
                Products
              </Link>
            </section>
          </div>
        </>
      ) : (
        <form className="w-9/12 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-20">
            <label
              htmlFor="kcal-range"
              className="block mb-2 text-md text-darkBlue2 text-center font-semibold"
            >
              Daily kcal: {value}
            </label>
            <input
              ref={range}
              id="kcal-range"
              type="range"
              value={value}
              className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${styles.kcal_range}`}
              onChange={handleRangeChange}
              min={100}
              max={250}
            />
            <div className="min-w-full flex justify-between">
              <span className="text-sm">100 kcal</span>
              <span className="text-sm">250 kcal</span>
            </div>
          </div>
          <div className="mb-2">
            <p className="text-center text-darkBlue2 mb-10">
              Manage your consume during the day
            </p>
            <section className="flex flex-wrap flex-col sm:flex-row sm:justify-around">
              <article className="input-kcal mb-12 sm:min-w-[182px]">
                <div
                  className="w-full text-sm text-neutral-500 peer-focus:text-primary"
                  data-te-input-helper-ref
                >
                  Breakfast
                </div>
                <div className="relative flex flex-wrap items-stretch">
                  <input
                    type="number"
                    value={form.breakfast}
                    required
                    onChange={handleChange}
                    name="breakfast"
                    className="relative m-0 -ml-px block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    aria-label="kcal"
                  />
                  <span className="flex items-center whitespace-nowrap rounded-r border border-solid bg-lightBlue4 border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 ">
                    kcal
                  </span>
                </div>
              </article>
              <article className="input-kcal mb-12 sm:min-w-[182px]">
                <div
                  className=" w-full text-sm text-neutral-500 peer-focus:text-primary"
                  data-te-input-helper-ref
                >
                  Lunch
                </div>
                <div className="relative flex flex-wrap items-stretch">
                  <input
                    type="number"
                    value={form.lunch}
                    required
                    onChange={handleChange}
                    name="lunch"
                    className="relative m-0 -ml-px block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    aria-label="kcal"
                  />
                  <span className="flex items-center whitespace-nowrap rounded-r border border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 bg-lightBlue4">
                    kcal
                  </span>
                </div>
              </article>
              <article className="input-kcal mb-12 sm:min-w-[182px]">
                <div
                  className=" w-full text-sm text-neutral-500 peer-focus:text-primary"
                  data-te-input-helper-ref
                >
                  Dinner
                </div>
                <div className="relative flex flex-wrap items-stretch">
                  <input
                    type="number"
                    value={form.dinner}
                    required
                    onChange={handleChange}
                    name="dinner"
                    className="relative m-0 -ml-px block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    aria-label="kcal"
                  />
                  <span className="flex items-center whitespace-nowrap rounded-r border border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 bg-lightBlue4">
                    kcal
                  </span>
                </div>
              </article>
              <article className="input-kcal mb-12 sm:min-w-[182px]">
                <div
                  className=" w-full text-sm text-neutral-500 peer-focus:text-primary"
                  data-te-input-helper-ref
                >
                  Snacks
                </div>
                <div className="relative flex flex-wrap items-stretch">
                  <input
                    type="number"
                    value={form.snacks}
                    required
                    onChange={handleChange}
                    name="snacks"
                    className="relative m-0 -ml-px block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    aria-label="kcal"
                  />
                  <span className="flex items-center whitespace-nowrap rounded-r border border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 bg-lightBlue4">
                    kcal
                  </span>
                </div>
              </article>
            </section>
          </div>
          <div className="flex sm:justify-center">
            <button className="bg-violetBlue text-lightBlue4 rounded px-6 py-3">
              Send my information
            </button>
          </div>
        </form>
      )}
      {error && (
        <div
          className="mb-3 inline-flex w-full items-center rounded-lg bg-red-500 px-6 py-5 text-lightBlue4 fixed top-[20px]
        max-w-[400px] right-[10px] text-sm"
          role="alert"
        >
          <span
            className="mr-2 cursor-pointer"
            onClick={() => setError((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          The sum of your calories is not equal to the limit you set
        </div>
      )}
    </>
  );
};

export default KcalRange;
