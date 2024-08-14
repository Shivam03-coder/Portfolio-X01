import { Typography } from "@material-tailwind/react";
import React from "react";
import { SettingIcon, SignatureImgs } from "../../../../constants";

const TextSection = () => {
  return (
    <section className="flex-1 flex-center text-white">
      <Typography variant="h1" className="text-center font-Varela text-6xl">
        Good Design is <br /> Noticeable & Great Design <br />
        is{" "}
        <span className="text-secondary-600 inline-flex gap items-center">
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
