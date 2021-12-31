import React from "react";
import IMG from "../assets/ranj.JPG";

export default function Hero() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative md:shadow-md md:hover:shadow-lg flex flex-col lg:flex-row gap-4 xl:gap-12 items-center justify-center h-2/3 w-8/12 m-4 p-4 transition-all duration-300">
        <div className="w-auto z-10 sm:w-1/2 md:w-3/6 lg:w-2/5 xl:w-2/6 p-2">
          <h1 className="text-xl xl:text-3xl">Ranj.</h1>
          <h1 className="text-lg xl:text-xl">Fullstack web developer</h1>
          <p className="text-sm my-4 xl:text-base">
            Enjoying work on projects that combine creativity and functionality
            with a <strong>minimalistic interactive</strong> design.
          </p>
          <ul className="flex flex-wrap gap-1 text-xs xl:text-sm">
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              Node.js
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              ReactJs
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              TailwindCss
            </li>
          </ul>
        </div>
        <div className="absolute z-0 opacity-50 h-3/5 rounded sm:h-4/6 md:relative md:opacity-100 md:h-3/6 lg:h-3/5">
          {/*eslint-disable-next-line jsx-a11y/img-redundant-alt*/}
          <img
            src={IMG}
            alt="my personal photo"
            className="h-full rounded filter grayscale "
          />
        </div>
      </div>
    </div>
  );
}
