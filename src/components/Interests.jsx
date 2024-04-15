import React from "react";
import { FaCode } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { MdOutlineBakeryDining } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

const Interests = () => {
  return (
    <div className="w-10/12">
      <h2 className="my-5">My interests</h2>
      <hr className="mb-5" />
      <ul className="text-left w-full p-2">
        <li className="flex items-center justify-between my-3">
          <FaCode className="text-slte-900 lg:w-6 lg:h-6" />
          <p>Coding</p>
        </li>
        <li className="flex items-center justify-between my-3">
          <GiMountainClimbing className="text-gray-500 lg:w-6 lg:h-6" />
          <p>Bouldering</p>
        </li>
        <li className="flex items-center justify-between my-3">
          <MdOutlineBakeryDining className="text-amber-700 lg:w-6 lg:h-6" />
          <p>Baking</p>
        </li>
        <li className="flex items-center justify-between my-3">
          <MdSunny className="text-orange-500 lg:w-6 lg:h-6" />
          <p>Sun & Beach</p>
        </li>
      </ul>
      <hr />
      <ul className="text-left w-full p-2">
        <li className="flex items-center justify-between my-3">
          <FaReact className="text-blue-500 lg:w-6 lg:h-6" />
          <p>React</p>
        </li>
        <li className="flex items-center justify-between my-3">
          <FaNode className="text-green-500 lg:w-6 lg:h-6" />
          <p>NodeJs</p>
        </li>
        <li className="flex items-center justify-between my-3">
          <FaDocker className="text-blue-500 lg:w-6 lg:h-6" />
          <p>Docker</p>
        </li>
      </ul>
    </div>
  );
};

export default Interests;
