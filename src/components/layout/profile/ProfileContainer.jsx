import React from "react";
import IntroSection from "./section/IntroSection";
import ProfileImageSection from "./section/ProfileImageSection";

const ProfileContainer = () => {
  return (
    <div className="grid md:grid-cols-2 py-10 gap-8  min-h-[89vh]">
      <IntroSection />
      <ProfileImageSection />
    </div>
  );
};

export default ProfileContainer;
