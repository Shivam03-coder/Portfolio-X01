import React from "react";
import { ExperienceImg } from "../../../../constants";

const ExpImageSection = () => {
  return (
    <section className=" hidden md:block  p-4">
      <img
        src={ExperienceImg}
        alt="Experience"
        className="w-full max-w-md h-auto object-contain"
      />
    </section>
  );
};

export default ExpImageSection;
