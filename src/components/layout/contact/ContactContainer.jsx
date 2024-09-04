import React from "react";
import ContactFormSection from "./sections/ContactFormSection";
import ContactImageSection from "./sections/ContactImageSection";

const ContactContainer = () => {
  return (
    <div className="grid w-full md:grid-cols-2 ">
      <ContactFormSection />
      <ContactImageSection />
    </div>
  );
};

export default ContactContainer;
