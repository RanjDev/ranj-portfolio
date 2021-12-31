import React from "react";
import { FiGithub } from "react-icons/fi";

export default function WorkCard({ info }) {
  return (
    <div
      className=" flex flex-col justify-between border shadow-lg hover:shadow-xl mx-auto p-2 w-4/6 sm:w-3/6 md:w-2/6 lg:w-1/6 rounded
     border-lime-500 group transition-all duration-300 overflow-hidden"
    >
      {/* <div className="bg-red-600 h-1/2 w-full  absolute z-0 skew-y-12 hidden group-hover:block"></div> */}
      <div className="flex flex-col relative ">
        <a
          className="hidden lg:block absolute self-center z-10 text-lime-500 border border-lime-500 m-2 py-2 px-4 rounded text-xl
         hover:bg-lime-500 hover:text-white active:bg-lime-900 font-mono transition-all duration-300 transform -translate-y-16 group-hover:translate-y-0
         filter drop-shadow-black"
          href={info.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiGithub />
        </a>
        <img
          alt={info.name}
          src={info.image}
          className="h-auto rounded lg:group-hover:opacity-30 transition-all duration-300"
        />
        <h1 className="group-hover:text-lime-500 transition-all duration-300">
          {info.name}
        </h1>
      </div>
      <div className="flex flex-col justify-between md:h-36 lg:h-56 xl:h-36 group">
        <p className=" my-2 text-sm group-hover:text-lime-500 lg:opacity-0 lg:group-hover:opacity-100 transform lg:group-hover:translate-y-1 transition-all duration-300">
          {info.desc}
        </p>
        <p className=" text-xs hidden lg:block group-hover:opacity-0 transform group-hover:translate-y-1 transition-all duration-300">
          Hover for description
        </p>
        <div className="flex gap-1 flex-wrap">
          {info.technologies.map((tech) => {
            return (
              <p className="border rounded p-1  w-20 text-center text-xs hover:bg-transparent hover:border-lime-500 hover:text-lime-500 transition-all duration-300">
                {tech}
              </p>
            );
          })}
        </div>
      </div>
      <a
        className="lg:hidden self-end text-lime-500 border border-lime-500 m-2 py-1 px-2 rounded
         hover:bg-lime-500 hover:text-white active:bg-lime-900 font-mono transition-all duration-300 "
        href={info.link}
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiGithub />
      </a>
    </div>
  );
}
