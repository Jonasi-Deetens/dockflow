import React from "react";
import { MdAdsClick } from "react-icons/md";

const StretchButton = ({ title }) => {
  return (
    <button className="stretch-button hover:w-auto p-2 transition-all duration-1000 justify-between">
      <p>{title}</p>
      <MdAdsClick size={20} />
    </button>
  );
};

export default StretchButton;
