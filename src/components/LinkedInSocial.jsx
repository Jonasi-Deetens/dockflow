import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";

const LinkedInSocial = () => {
  return (
    <div className="linked-in text-white w-full h-full flex items-center justify-center rounded-3xl">
      <FaLinkedinIn size={"50px"} />
      <a
        className="absolute bottom-2 left-2"
        href="https://www.linkedin.com/in/jonasi-deetens-41bba4a8/"
        target="_blank"
      >
        <button className="border">
          <MdAdsClick />
        </button>
      </a>
    </div>
  );
};

export default LinkedInSocial;
