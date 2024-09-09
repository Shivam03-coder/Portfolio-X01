import { Typography } from "@material-tailwind/react";
import React from "react";
import { SettingIcon, SignatureImgs } from "../../../../constants";

const TextSection = () => {
  return (
    <section className="flex-1 px-4 md:px-8 lg:px-12 flex-center text-white">
    <Typography variant="h1" className="text-center font-Varela text-4xl md:text-5xl lg:text-6xl leading-tight">
      Good{" "}
      <span className="text-customPink-600 inline-flex items-center">
        Design
      </span>{" "}
      is <br className="hidden md:block" /> Noticeable & Great{" "}
      <span className="text-customPink-600 inline-flex items-center">
        Design
      </span>{" "}
      <br className="hidden md:block" />
      is{" "}
      <span className="text-customPink-600 inline-flex items-center">
        Invisible
        <SettingIcon className="ml-2 w-5 h-5 md:w-6 md:h-6" />
        <img className="ml-2 hidden md:block w-12 md:w-16" src={SignatureImgs} alt="" />
      </span>
    </Typography>
  </section>
  
  );
};

export default TextSection;
