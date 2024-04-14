import React, { useState } from "react";

const ToggleButton = ({ onToggle }) => {
  const [active, setActive] = useState(false);

  const toggleSwitch = () => {
    const nowActive = !active;
    setActive(nowActive);
    onToggle(nowActive);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={`w-10 h-5 rounded-full p-1 transition-all duration-800 relative flex ${
        active ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-3 h-3 rounded-full transition-all duration-800 absolute ${
          active ? "right-1 bg-white" : "right-6 bg-green-500"
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
