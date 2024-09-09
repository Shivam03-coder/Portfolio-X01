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
        className="w-[90%] mx-auto  underline underline-offset-4 text-purple-400 font-Varela  "
      >
        HARD SURFACES
      </Typography>
      <div className="grid md:grid-cols-3 py-10 gap-8   min-h-[89vh] place-items-center">
        {ThreeDmodelsData.map((model) => (
          <ModelsSection model={model} />
        ))}
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto pb-10">
        {" "}
        {/* Decrease width to 80% and center */}
        <Typography
          variant="h3"
          className="w-[90%] mx-auto  underline my-6 underline-offset-4 text-purple-400 font-Varela"
        >
             OTHER-WORKS
        </Typography>
        <div className="w-[90%] mx-auto">
          {" "}
          {/* Further decrease the width of the GFX slider */}
          <ImageSlideShow />
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto pb-10">
        {" "}
        {/* Decrease width to 80% and center */}
        <Typography
          variant="h3"
          className="w-[90%] mx-auto  underline my-6 underline-offset-4 text-purple-400 font-Varela"
        >
          GFX IMAGES
        </Typography>
        <div className="w-[90%] mx-auto">
          {" "}
          {/* Further decrease the width of the GFX slider */}
          <GfxSLidesSection />
        </div>
      </div>
    </>
  );
};

export default ProjectContainer;
