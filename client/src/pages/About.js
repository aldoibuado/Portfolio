import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b 
    from-gray-800 to-black text-white"
    >
      <div>
        <div>
          <p>About</p>
        </div>

        <LoremIpsum p={1} />

        <br />

        <LoremIpsum p={1} />
      </div>
    </div>
  );
}

export default About;
