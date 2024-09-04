import React from "react";
import { ContactImage } from "../../../../constants";

const ContactImageSection = () => {
  return (
    <section className="order-1 md:order-2">
      <img
        src={ContactImage}
        alt="Contact"
        className="w-full max-w-full h-auto"
      />
    </section>
  );
};

export default ContactImageSection;
