import React from "react";
import { DownArrowIcon } from "../../constants";
import useSmoothScroll from "../../hooks/useSmoothScroll";

const GoToBottom = () => {
  const scrollTo = useSmoothScroll();

  return (
    <section
      onClick={() => scrollTo("#contacts")}
      className="absolute size-[5rem] bg-customOrange-500 shadow-glass cursor-pointer  rounded-full animate-bounce flex-center bottom-3   md:bottom-24 right-10"
    >
      <DownArrowIcon className="size-14" />
    </section>
  );
};

export default GoToBottom;
