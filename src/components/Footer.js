import React from "react";
import { FiLinkedin, FiCodepen, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <div>
      <div className="bg-lime-900 flex flex-col justify-center items-center h-12 ">
        <div className="flex md:hidden p-2">
          <ul
            className="flex gap-8 text-xl text-white 
        "
          >
            <a
              href="https://github.com/RanjDev"
              target="_blank"
              rel="noreferrer"
              className="filter hover:drop-shadow-white transition-all duration-300"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ranj-jalal-8aa39b215/"
              target="_blank"
              rel="noreferrer"
              className="filter hover:drop-shadow-white transition-all duration-300"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://codepen.io/DevVet9"
              target="_blank"
              rel="noreferrer"
              className="filter hover:drop-shadow-white transition-all duration-300"
            >
              <FiCodepen />
            </a>
          </ul>
        </div>
        <p className="text-white text-lg hidden md:block">@Ranj.Dev</p>
      </div>
    </div>
  );
}
