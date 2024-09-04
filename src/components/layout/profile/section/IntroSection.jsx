import { Typography } from "@material-tailwind/react";
import React from "react";

const IntroSection = () => {
  return (
    <section className="w-[96%] px-5 mx-auto text-white order-2 md:order-1  flex flex-col justify-center gap-4">
      <Typography variant="h1">
        Welcome to My 3D Art{" "}
        <span className="text-customPink-500">Portfolio.</span>
      </Typography>
      <Typography className=" md:block" variant="h2">
        Explore My <span className="text-customPink-500">Blender</span>{" "}
        Creations.
      </Typography>
      <Typography
        className="text-justify font-Poppins hidden md:block font-medium"
        variant="body1"
      >
        Delve into the world of 3D artistry where creativity meets technology.
        In this portfolio, you'll discover a collection of meticulously crafted
        <span className="text-customPink-500">
          {" "}
          3D models, animations, and visual effects
        </span>
        , all brought to life using{" "}
        <span className="text-customPink-500">Blender</span> . Whether you're
        here to appreciate the art, learn new techniques.
      </Typography>
    </section>
  );
};

export default IntroSection;
