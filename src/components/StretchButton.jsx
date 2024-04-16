import React from "react";
import { MdAdsClick } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";

const StretchButton = ({ title, action }) => {
  return (
    <button className="stretch-button hover:w-auto p-1 sm:p-2 transition-all duration-1000 justify-between">
      <p className="text-xs sm:text-base">{title}</p>
      {action === "click" ? (
        <MdAdsClick size={20} />
      ) : (
        <FaRegPaperPlane size={18} />
      )}
    </button>
  );
};

export default StretchButton;
