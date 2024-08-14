import React from "react";
import TextSection from "./sections/TextSection";
import EmailSection from "./sections/EmailSection";
import GoToBottom from "../../feature/GoToBottom";

const HomeContainer = () => {
  return (
    <div className="flex flex-col h-[89vh]">
      <EmailSection />
      <TextSection />
      <GoToBottom />
    </div>
  );
};

export default HomeContainer;
