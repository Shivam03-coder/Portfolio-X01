import React from "react";
import "./Layout.css";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage";
import Projectpage from "./pages/Projectpage";
import Experiencepage from "./pages/Experiencepage";
import Contactpage from "./pages/Contactpage";
import Header from "./shared/header/HeaderSection";
import EmailSection from "./layout/home/sections/EmailSection";

const Layout = () => {
  return (
    <>
      <Header />
      <Homepage />
      <Profilepage />
      <Projectpage />
      <Experiencepage />
      <Contactpage />
    </>
  );
};

export default Layout;
