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
        Step into my world of{" "}
        <span className="text-customPink-500">3D artistry</span>, where
        creativity and technology intertwine. My journey began in 2019 when I
        first discovered my passion for bringing ideas to life in 3D. Since
        then, <span className="text-customPink-500">Blender</span> has been my
        canvas, allowing me to explore endless possibilities in creating 3D
        models, animations, and visual effects. Every piece you’ll find here
        reflects not just technical skill but my growth as an artist. From
        experimenting with textures to creating complex models, each project
        tells a story—one of persistence, innovation, and a love for game
        development and{" "}
        <span className="text-customPink-500">digital art.</span>
      </Typography>
    </section>
  );
};

export default IntroSection;
