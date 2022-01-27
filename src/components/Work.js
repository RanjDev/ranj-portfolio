import React, { useRef, useEffect } from "react";
import WorkCard from "./WorkCard";
import Koga from "../assets/koga.PNG";
import Daroon from "../assets/daroon.PNG";
import Landing from "../assets/landing.PNG";
import Cool from "../assets/cool.PNG";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Work() {
  const cardRef = useRef();
  const q = gsap.utils.selector(cardRef);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(q(".child"), {
      stagger: 0.3,
      opacity: 0,
      y: 100,
      duration: 0.7,
      scrollTrigger: {
        trigger: ".scroll-trigger",
        start: "top 60%",
        // toggleActions: "restart reverse restart reverse",
        toggleActions: "restart none none none",

        end: "top 10%",
        scrub: true,
        // markers: true,
        // end: () =>  `+=${document.querySelector(".scroll-trigger").offsetHeight}`,
      },
    });
  }, [q]);

  const workData = [
    {
      name: "Koga",
      desc: "An ecommerce fullstack application, that was built entirely by me for the Bit Bootcamp capstone project.",
      image: Koga,
      technologies: ["ReactJs", "Node.js", "TailwindCss"],
      link: "https://github.com/RanjDev/ecommerce",
    },
    {
      name: "Daroon",
      desc: "A hackathon winning project we built with my team that focuses on providing help for people who need mental support.",
      image: Daroon,
      technologies: ["ReactJs", "Node.js", "TailwindCss"],
      link: "https://github.com/RanjDev/daroon",
    },
    {
      name: "Landing Page",
      desc: "A simple landing page without backend. I focused on doing animataion with TailwindCss.",
      image: Landing,
      technologies: ["ReactJs", "TailwindCss"],
      link: "https://github.com/RanjDev/First-React-Tailwind",
    },
    {
      name: "Cool Landing",
      desc: "A simple landing page done with HTML, CSS, and Bootstrap.",
      image: Cool,
      technologies: ["HTML", "CSS", "Bootstrap"],
      link: "https://github.com/RanjDev/Bit-BC",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="h-auto w-screen">
      <h1 className="text-center mb-20 text-xl md:text-3xl text-lime-500">
        Projects
      </h1>
      <div
        className="flex flex-wrap justify-center items-center gap-4 px-12 scroll-trigger"
        ref={cardRef}
      >
        {workData.map((datum) => {
          return <WorkCard info={datum} />;
        })}
      </div>
    </div>
  );
}
