import React, { useEffect, useRef } from "react";
import IMG from "../assets/ranj.JPG";
import { gsap } from "gsap";

export default function Hero() {
  const textRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
    });
    gsap.from(imageRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
    });
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative lg:shadow-md lg:hover:shadow-lg flex flex-col lg:flex-row gap-4 xl:gap-12 items-center justify-center h-2/3 w-8/12 m-4  transition-all duration-300">
        <div
          className="w-auto z-10 sm:w-5/6 md:w-3/6 lg:w-2/5 xl:w-2/6 "
          ref={textRef}
        >
          <h1 className="text-xl xl:text-3xl">Ranj.</h1>
          <h1 className="text-lg xl:text-xl">Fullstack web developer</h1>
          <p className="text-xs my-4 xl:text-base">
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
        <div className="w-auto rounded sm:w-5/6  md:w-3/6 lg:w-2/5">
          <img
            src={IMG}
            alt="Ranj"
            className="rounded filter grayscale "
            ref={imageRef}
          />
        </div>
      </div>
    </div>
  );
}
