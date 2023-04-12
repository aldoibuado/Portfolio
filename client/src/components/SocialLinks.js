import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/aldo-ibuado",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/aldoibuado",
    },
    {
      id: 3,
      child: (
        <>
          E-mail
          <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:aldo.ibuado@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "https://drive.google.com/file/d/1ZvCf1I8YWC5Y0N1GWLyioHSaQUg8H8SU/view?usp=share_link",
      style: "rounded-br-md",
    //   download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, style, href }) => (
          <li
            key={id}
            className="flex justify-between items-center w-40 h-14 
         px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
            //   download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
