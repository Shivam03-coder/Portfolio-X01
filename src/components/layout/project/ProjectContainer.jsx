import React from "react";
import ModelsSection from "./section/ModelsSection";
import { ThreeDmodelsData } from "../../../data";

const ProjectContainer = () => {
  return (
    <div className="grid md:grid-cols-3 py-10 gap-8   min-h-[89vh] place-items-center">
      {ThreeDmodelsData.map((model) => (
        <ModelsSection model={model} />
      ))}
    </div>
  );
};

export default ProjectContainer;
