import React from "react";
import TimeLineSections from "./sections/TimeLineSections";
import ExpImageSection from "./sections/ExpImageSection";

const ExperienceContainer = () => {
  return (
    <div className="grid w-[90%] mx-auto md:grid-cols-2 place-items-center ">
      <ExpImageSection />
      <TimeLineSections />
    </div>
  );
};

export default ExperienceContainer;
