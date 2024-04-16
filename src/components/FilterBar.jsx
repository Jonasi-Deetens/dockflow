import React from "react";
import ToggleableItem from "./ToggleableItem";
import logo from "../assets/logo.svg"

const FilterBar = ({ handleToggle }) => {
  return (
    <div className="flex w-full h-20 justify-between items-center px-10 lg:px-40 py-20">
      <h1 className="max-w-48"><img className="logo" src={logo} alt="" /></h1>
      <ul className="flex items-center justify-between">
        <li className="mx-5">
          <ToggleableItem title="Skills" onToggle={handleToggle} />
        </li>
        <li className="mx-5">
          <ToggleableItem title="About" onToggle={handleToggle} />
        </li>
      </ul>
    </div>
  );
};

export default FilterBar;
