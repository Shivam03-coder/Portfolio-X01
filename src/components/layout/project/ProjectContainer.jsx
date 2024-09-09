import React from "react";
import ModelsSection from "./section/ModelsSection";
import { ThreeDmodelsData } from "../../../data";
import { ImageSlideShow } from "./section/ImageSlideShow";
import { Typography } from "@material-tailwind/react";
import { GfxSLidesSection } from "./section/GfxSLidesSection";

const ProjectContainer = () => {
  return (
    <>
      <Typography
        variant="h3"
        className="w-[90%] mx-auto underline underline-offset-4 text-purple-400 font-Varela  "
      >
        HARD SURFACES
      </Typography>
      <div className="grid md:grid-cols-3 py-10 gap-8   min-h-[89vh] place-items-center">
        {ThreeDmodelsData.map((model) => (
          <ModelsSection model={model} />
        ))}
      </div>
      <div className="w-[90%] mx-auto  pb-10">
        <Typography
          variant="h3"
          className="w-[90%] mx-auto underline my-6 underline-offset-4 text-purple-400 font-Varela  "
        >
          OTHER-WORKS
        </Typography>
        <ImageSlideShow />
      </div>
      <div className="w-[90%] mx-auto  pb-10">
        <Typography
          variant="h3"
          className="w-[90%] mx-auto underline my-6 underline-offset-4 text-purple-400 font-Varela  "
        >
         GFX IMAGES
        </Typography>
        <GfxSLidesSection />
      </div>
    </>
  );
};

export default ProjectContainer;
