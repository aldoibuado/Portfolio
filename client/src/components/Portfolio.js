import React from "react";
import rockon from "../assests/Portfolio/Rock On.png";
import ryrm from "../assests/Portfolio/Rate Your Roommate.png";
import notetaker from "../assests/Portfolio/Note Taker.png";
import scheduler from "../assests/Portfolio/Work Day Scheduler.png";
import password from "../assests/Portfolio/password generator.png";
// import team from "../assests/Portfolio/Team Profile Generator.png";
import website from "../assests/Portfolio/The Red Place.png";

function Portfolio() {

    const projects = [
        {
            id: 1,
            src: rockon
        },
        {
            id: 2,
            src: ryrm
        },
        {
            id: 3,
            src: notetaker
        },
        {
            id: 4,
            src: scheduler
        },
        {
            id: 5,
            src: password
        },
        {
            id: 6,
            src: website
        },
    ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
        px-12 sm:px-0"
        >
        {
        projects.map(({id, src}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200
              hover:scale-105">Website Link</button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200
              hover:scale-105">GitHub Link</button>
            </div>
          </div>
        ))
        }
        </div>
      </div>
    </div>
  );
}

export default Portfolio;