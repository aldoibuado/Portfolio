import React from "react";
import hero from "../assests/heroImage.jpg";
import { RiArrowRightLine } from "react-icons/ri";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b
    from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row">
        <div>
          <h2>I am a Full Stack Web Developer</h2>
          <p>
            My name is Aldo Ibuado and I have graduated from my full-stack web
            developer program. I am excited to continue to put my skills to good
            use!
          </p>

          <div>
            <button>
              Portfolio
              <span>
                <RiArrowRightLine />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img src={hero} alt="my profile pic" />
        </div>
      </div>
    </div>
  );
}

export default Home;
