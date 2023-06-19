import KcalRange from "@components/kcalRange/KcalRange";
import React from "react";

const page: React.FC = () => {
  return (
    <main className="my-11 border border-vividCerulean rounded-md pb-8">
      <div className="mb-12">
        <h5 className="text-center text-3xl text-violetBlue mt-7 font-bold">
          Set your maximum calorie limit here!
        </h5>
        <p className="text-center text-violetBlue mb-3">
          Answer the following questions in order to have your food information
        </p>
      </div>
      <KcalRange />
    </main>
  );
};

export default page;
