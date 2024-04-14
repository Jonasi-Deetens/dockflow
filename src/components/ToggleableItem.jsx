import React from "react";
import ToggleButton from "./ToggleButton";

const ToggleableItem = ({ title, onToggle }) => {
  const handleToggle = (active) => {
    onToggle(title, active);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="font-bold">{title}</p>
      <br />
      <ToggleButton onToggle={handleToggle} />
    </div>
  );
};

export default ToggleableItem;
