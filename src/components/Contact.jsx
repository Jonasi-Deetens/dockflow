import React from "react";
import StretchButton from "./StretchButton";

const Contact = () => {
  return (
    <div>
      <h2 className="my-5">Contact Me</h2>
      <a
        href="mailto:jonasideetens@hotmail.com"
        className="flex items-center justify-center"
      >
        <StretchButton title="Send" />
      </a>
    </div>
  );
};

export default Contact;
