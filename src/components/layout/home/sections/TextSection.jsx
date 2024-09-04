import { Typography } from "@material-tailwind/react";
import React from "react";
import { SettingIcon, SignatureImgs } from "../../../../constants";

const TextSection = () => {
  return (
    <section className="flex-1 px-1 flex-center text-white">
      <Typography variant="h1" className="text-center font-Varela text-6xl">
        Good <span className="text-customPink-600 inline-flex gap items-center">Design</span>  is <br /> Noticeable & Great <span className="text-customPink-600 inline-flex gap items-center">Design</span>  <br />
        is{" "}
        <span className="text-customPink-600 inline-flex gap items-center">
          Invisible
          <SettingIcon className="ml-2 size-6" />
          <img src={SignatureImgs} alt="" />
        </span>
        .
      </Typography>
    </section>
  );
};

export default TextSection;
