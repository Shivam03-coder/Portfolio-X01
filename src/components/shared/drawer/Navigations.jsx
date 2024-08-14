import React from "react";
import { Button } from "@material-tailwind/react";
import useSmoothScroll from "../../../hooks/useSmoothScroll";

const Navigations = () => {
  const scrollTo = useSmoothScroll();

  return (
    <section className="flex flex-col gap-2">
      <Button
        size="sm"
        className="shadow-glass w-[120px] bg-transparent border border-customOrange-500"
        onClick={() => scrollTo("#home")}
      >
        HOME
      </Button>
      <Button
        size="sm"
        className="shadow-glass w-[120px] bg-transparent border border-customOrange-500"
        onClick={() => scrollTo("#profile")}
      >
        PROFILE
      </Button>
      <Button
        size="sm"
        className="shadow-glass w-[120px] bg-transparent border border-customOrange-500"
        onClick={() => scrollTo("#projects")}
      >
        PROJECTS
      </Button>
      <Button
        size="sm"
        className="shadow-glass w-[120px] bg-transparent border border-customOrange-500"
        onClick={() => scrollTo("#experience")}
      >
        EXPERIENCE
      </Button>
      <Button
        size="sm"
        className="shadow-glass w-[120px] bg-transparent border border-customOrange-500"
        onClick={() => scrollTo("#contacts")}
      >
        CONTACTS
      </Button>
    </section>
  );
};

export default Navigations;
