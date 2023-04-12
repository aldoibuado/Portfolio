import React from "react";
import hero from "../assests/heroImage.jpg";
import { RiArrowRightLine } from "react-icons/ri";
import "../styles/Home.css";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 p-4 max-w-md">
            My name is Aldo Ibuado and I have graduated from my full-stack web
            developer program. I am excited to continue to put my skills to good
            use!
          </p>

          <div>
            <button
              className=" group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500
            to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightLine size={20} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img src={hero} alt="my profile pic" className="profileimg" />
        </div>
      </div>
    </div>
  );
}

export default Home;