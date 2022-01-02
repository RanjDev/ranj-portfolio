import React from "react";
import GroupHackathon from "../assets/_1010419.JPG";

export default function Experience() {
  return (
    <div className="min-h-screen w-screen px-8">
      <h1 className="text-center mb-8 text-2xl">Experience</h1>
      <div className="flex flex-col justify-center items-center gap-8 w-full p-8">
        <div className=" px-8 w-10/12">
          <h1 className="text-xl">Frontend</h1>
          <p className="text-sm">
            + Experience in building responsive and interactive websites. I am
            also a big fan of using animation here and there to improve the user
            experience, but not in a way that would take too much of user's
            attention.
          </p>
          <h2>Frontend Technologies:</h2>
          <ul className="flex flex-wrap gap-1 text-xs">
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              HTML
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              CSS
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              ReactJs
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              TailwindCss
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              Bootstrap
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              Redux Toolkit
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              RTK Query
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              React Router
            </li>
          </ul>
        </div>
        <div className=" w-10/12 px-8">
          <h1>Backend</h1>
          <p className="text-sm">
            + Experience in building secure server side application with
            Javascrip using Node.js and Express.
          </p>
          <p className="text-sm">
            + I have experience in creating different routes, authorization
            levels, and validating data before saving it in the database.
          </p>
          <h2>Frontend Technologies:</h2>
          <ul className="flex gap-1 flex-wrap text-xs">
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              Node.js
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              Express
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              MongoDB
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              Postman
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              RESTful API
            </li>
            <li className="border rounded p-1 hover:text-lime-500 hover:border-lime-500 transition-all duration-300">
              JWT
            </li>
          </ul>
        </div>
        <div className="px-8 w-10/12 ">
          <h1>Hackathon</h1>
          <div className="w-full flex flex-wrap justify-between items-center ">
            <div className="md:w-1/3 lg:w-2/5">
              <p className="text-sm">
                + In December of 2021, I participate in a Hackathon, that was
                organized by Potan Company and GIZ organization. With my team we
                were able to win the first place.
              </p>
              <p className="text-sm">
                + Our project was a website to help people who need mental
                support, but either don't know where to get it. Or they are
                afraid to do so due to cultural barriers in the society.
              </p>
            </div>
            <div className="md:w-2/3 lg:w-3/5 xl:w-2/5">
              <img alt="Hackathon Group" src={GroupHackathon} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
