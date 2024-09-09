import { Typography } from "@material-tailwind/react";
import React from "react";

const IntroSection = () => {
  return (
    <section className="w-[90%] px-5 mx-auto text-white order-2 md:order-1  flex flex-col justify-center gap-4">
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
        Step into my world of 3D artistry, where creativity and technology
        intertwine. My journey began in 2019 when I first discovered my passion
        for bringing S
        <span className="text-customPink-500"> ideas to life in 3D.</span>, all
        brought to life using{" "}
        <span className="text-customPink-500">Blender</span> . Whether you're
        ince then, Blender has been my canvas, allowing me to explore endless
        possibilities in creating 3D models, animations, and visual effects.
        Delve into the world of 3D artistry where creativity meets technology.
        In this portfolio, you'll discover a collection of meticulously crafted
      </Typography>
    </section>
  );
};

export default IntroSection;
