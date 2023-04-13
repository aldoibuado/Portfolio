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
      src: rockon,
      link: "https://danielmartin971.github.io/Empty-Orchestra/",
      GitHub: "https://github.com/DanielMartin971/Empty-Orchestra",
    },
    {
      id: 2,
      src: ryrm,
      link: "https://rate-my-roomie.herokuapp.com/",
      GitHub: "https://github.com/leann-labra/Rate-My-Roomie",
    },
    {
      id: 3,
      src: notetaker,
      link: "https://rocky-castle-10172.herokuapp.com/",
      GitHub: "https://github.com/aldoibuado/The-Note-Taker",
    },
    {
      id: 4,
      src: scheduler,
      link: "https://aldoibuado.github.io/Work-Day-Scheduler/",
      GitHub: "https://github.com/aldoibuado/Work-Day-Scheduler",
    },
    {
      id: 5,
      src: password,
      link: "https://aldoibuado.github.io/Password-Generator-/",
      GitHub: "https://github.com/aldoibuado/Password-Generator-",
    },
    {
      id: 6,
      src: website,
      link: "https://the-red-place.herokuapp.com/",
      GitHub: "https://github.com/jhlynn95/The-Red-Place",
    },
  ];

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
          {projects.map(({ id, src, link, GitHub }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link}><button
                  className="w-1/2 px-6 py-3 m-4 duration-200
              hover:scale-105"
                >
                  Website Link
                </button></a>
                <a href={GitHub}><button
                  className="w-1/2 px-6 py-3 m-4 duration-200
              hover:scale-105"
                >
                  GitHub Link
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
