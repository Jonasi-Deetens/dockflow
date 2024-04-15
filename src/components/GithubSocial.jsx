import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const GithubSocial = () => {
  return (
    <div className="github w-full h-full bg-neutral-50 flex items-center justify-center rounded-3xl">
      <FaGithub size={"50px"} />
    </div>
  );
};

export default GithubSocial;
