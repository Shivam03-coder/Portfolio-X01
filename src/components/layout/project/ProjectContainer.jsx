import React from "react";
import ModelsSection from "./section/ModelsSection";
import { ThreeDmodelsData } from "../../../data";
import { ImageSlideShow } from "./section/ImageSlideShow";

const ProjectContainer = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 py-10 gap-8   min-h-[89vh] place-items-center">
        {ThreeDmodelsData.map((model) => (
          <ModelsSection model={model} />
        ))}
      </div>
      <div  className="w-[90%] mx-auto  pb-10">
        <ImageSlideShow />
      </div>
    </>
  );
};

export default ProjectContainer;
