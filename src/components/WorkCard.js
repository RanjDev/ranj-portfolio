import React from "react";
import { FiGithub } from "react-icons/fi";

export default function WorkCard({ info }) {
  return (
    <div className=" flex flex-col justify-between border mx-auto p-2 w-4/6 sm:w-3/6 md:w-2/6 lg:w-1/6 rounded ">
      {/* <div className="bg-red-600 h-1/2 w-full  absolute z-0 skew-y-12 hidden group-hover:block"></div> */}
      <div className="flex flex-col ">
        <img alt={info.name} src={info.image} className="h-auto " />
        <h1>{info.name}</h1>
      </div>
      <div className="flex flex-col md:h-48 lg:h-56 xl:h-40">
        <p className="my-2 text-sm">{info.desc}</p>
        <div className="flex gap-1 flex-wrap">
          {info.technologies.map((tech) => {
            return (
              <p className="border rounded p-1  w-20 text-center text-xs hover:bg-white hover:border-slate-900 hover:text-slate-900 transition-all duration-300">
                {tech}
              </p>
            );
          })}
        </div>
      </div>
      <a
        className=" self-end text-orange-700 border border-orange-700 m-2 py-1 px-2 rounded
          hover:text-slate-900 hover:bg-orange-700 font-mono transition-all duration-300 hover:border-slate-900 active:bg-orange-900 "
        href={info.link}
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiGithub />
      </a>
    </div>
  );
}
