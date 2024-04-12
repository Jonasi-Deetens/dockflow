import React from "react";
import { MdAdsClick } from "react-icons/md";

const StretchButton = ({ title }) => {
  return (
    <button className="hover:w-48 transition-all duration-700 justify-between">
      <p className="hidden hover:block">{title}</p>
      <MdAdsClick size={20} />
    </button>
  );
};

export default StretchButton;
