import React from "react";
import html from "../assests/HTML.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import graphgl from "../assests/graphql.png";
import markdown from "../assests/markdown.png";
import node from "../assests/node.js.png";
// import express from "../assests/ExpressJS.png";
// import react from "../assests/react.png";
// import github from "../assests/github.png";

function Experience() {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: graphgl,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 5,
      src: markdown,
      title: "markdown",
      style: "shadow-white",
    },
    {
      id: 6,
      src: node,
      title: "Node.js",
      style: "shadow-green-600",
    },
    // {
    //   id: 7,
    //   src: express,
    //   title: "Express.js",
    //   style: "shadow-yellow-600",
    // },
    // {
    //   id: 8,
    //   src: react,
    //   title: "React",
    //   style: "shadow-blue-600",
    // },
    // {
    //   id: 9,
    //   src: github,
    //   title: "GitHub",
    //   style: "shadow-gray-600",
    // },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b
    from-gray-800 to-black w-full h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white"
      >
        <div className="experience1">
          <p
            className="text-4xl font-bold border-b-4
                border-gray-500 p-2 inline"
          >
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8
            text-center py-8 px-12 sm:px-0"
        >
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500
              py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
