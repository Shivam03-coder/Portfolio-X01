import React from "react";

const EmailSection = () => {
  return (
    <section className="absolute  size-full left-0 flex items-center text-customPink-500">
      <span className="transform backdrop-blur-lg hidden md:block shadow-glass bg-black p-4 rounded-bl-xl rounded-br-xl -rotate-90 origin-left whitespace-nowrap ml-5">
        <a href="mailto:singhaarav.996@gmail.com">singhaarav.996@gmail.com </a>
      </span>
    </section>
  );
};

export default EmailSection;
