import React, { useEffect, useRef } from "react";
import { FiLinkedin, FiCodepen, FiGithub } from "react-icons/fi";
import { gsap } from "gsap";

// The idea for this was taken from Brittany Chiang
// The code is mine however, I just took the inspiration for the listing of her links

export default function Links() {
  const linkRef = useRef();
  const q = gsap.utils.selector(linkRef);

  useEffect(() => {
    gsap.from(q(".child"), {
      stagger: 0.3,
      opacity: 0,
      y: 100,
      delay: 0.3,
      duration: 1,
    });
  }, [q]);

  return (
    <div>
      <div className="fixed bottom-0 hidden md:flex ">
        <ul
          className="flex flex-col gap-4 text-white px-8 after:w-0.5 after:bg-white after:h-32 after:m-auto 
        text-2xl
        "
          ref={linkRef}
        >
          <a
            href="https://github.com/RanjDev"
            target="_blank"
            rel="noreferrer"
            className="filter hover:drop-shadow-white transition-all duration-300 child"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ranj-jalal-8aa39b215/"
            target="_blank"
            rel="noreferrer"
            className="filter hover:drop-shadow-white transition-all duration-300 child"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://codepen.io/DevVet9"
            target="_blank"
            rel="noreferrer"
            className="filter hover:drop-shadow-white transition-all duration-300 child"
          >
            <FiCodepen />
          </a>
        </ul>
      </div>
    </div>
  );
}
