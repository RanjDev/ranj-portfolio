import React from "react";
import { ImQuotesRight, ImQuotesLeft } from "react-icons/im";

export default function Skills() {
  return (
    <div className="w-screen flex flex-col items-center ">
      <div className="flex flex-col w-auto ">
        <div className="flex gap-2 text-center mb-8 text-xl md:text-3xl text-white">
          <ImQuotesLeft className="text-lime-500 text-lg" />{" "}
          <h1>I have a very particular set of soft skills</h1>
          <div className="self-end">
            <ImQuotesRight className="text-lime-500 text-lg" />
          </div>
        </div>
        <h1 className="text-center mb-8 text-lg md:text-xl self-end">
          -Not Liam Neeson
        </h1>
      </div>
      <div className="flex flex-col w-1/2 gap-4">
        <div className="">
          <h1
            className="w-fit text-xl md:text-2xl relative after:content-[''] after:absolute after:w-full after:bg-lime-500 after:h-0.5 after:scale-x-0
          after:bottom-0 after:left-0 after:origin-bottom-left hover:after:scale-x-100 after:transition-all after:duration-500"
          >
            Work Ethics
          </h1>
          <p>
            I have small experience working as an employee and as a volunteer.
            From these experiences I learned that I in order for the group to
            succeed accountability and professionalism must be maintained.
          </p>
        </div>
        <div>
          <h1
            className="w-fit text-xl md:text-2xl relative after:content-[''] after:absolute after:w-full after:bg-lime-500 after:h-0.5 after:scale-x-0
          after:bottom-0 after:left-0 after:origin-bottom-left hover:after:scale-x-100 after:transition-all after:duration-500"
          >
            Problem Solving
          </h1>
          <p>
            I have taken classes on algorithms and data structures, and these
            have enabled me to focus more on how to solve problems in the best
            possible way.
          </p>
        </div>
        <div>
          <h1
            className="w-fit text-xl md:text-2xl relative after:content-[''] after:absolute after:w-full after:bg-lime-500 after:h-0.5 after:scale-x-0
          after:bottom-0 after:left-0 after:origin-bottom-left hover:after:scale-x-100 after:transition-all after:duration-500"
          >
            Time Management
          </h1>
          <p>
            One thing I always put in high regard is time, and I always try to
            make the best out of my time
          </p>
        </div>
        <div>
          <h1
            className="w-fit text-xl md:text-2xl relative after:content-[''] after:absolute after:w-full after:bg-lime-500 after:h-0.5 after:scale-x-0
          after:bottom-0 after:left-0 after:origin-bottom-left hover:after:scale-x-100 after:transition-all after:duration-500"
          >
            Team Work
          </h1>
          <p>
            When I was working as a volunteer I learned that in order for the
            team to succeed as whole, everyone must work really hard. That means
            even if someone is not doing there part of the job, the job must be
            finished first, and then the person can be punished.
          </p>
        </div>
      </div>
    </div>
  );
}
