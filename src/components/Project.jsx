import React from "react";
import StretchButton from "./StretchButton";

const Project = ({ name, image, alt }) => {
  return (
    <div
      className={`w-full h-full relative overflow-hidden  ${
        name ? "project-" + name : ""
      }`}
    >
      <img src={image} alt={alt} />
      <a
        className="absolute bottom-2 left-2"
        target="_blank"
        href="https://jonasideetens-weather-app.netlify.app/"
        rel="noopener noreferrer"
      >
        <StretchButton title={name} />
      </a>
    </div>
  );
};

export default Project;
