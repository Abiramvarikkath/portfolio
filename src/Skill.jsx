import React from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaNodeJs, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

function Skill() {
  return (
    <div id="Skill" className="w-full h-fit py-10">
      <h1 className="text-center font-bold text-4xl">Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-1xl items-center text-center mt-10 px-6 sm:px-10">
        <div className="w-40 h-40 rounded-2xl shadow-md hover:shadow-2xl hover:cursor-pointer flex flex-col items-center justify-center">
          <AiFillHtml5 size={76} className="text-orange-500 animate-pulse hover:animate-spin" />
          <h1>HTML</h1>
        </div>
        <div className="w-40 h-40 rounded-2xl shadow-md hover:shadow-2xl hover:cursor-pointer flex flex-col items-center justify-center">
          <FaCss3Alt size={75} className="text-blue-600 animate-pulse hover:animate-spin" />
          <h1>CSS</h1>
        </div>
        <div className="w-40 h-40 rounded-2xl shadow-md hover:shadow-2xl hover:cursor-pointer flex flex-col items-center justify-center">
          <IoLogoJavascript size={70} className="text-yellow-300 animate-pulse hover:animate-spin" />
          <h1>JAVASCRIPT</h1>
        </div>
        <div className="w-40 h-40 rounded-2xl shadow-md hover:shadow-2xl hover:cursor-pointer flex flex-col items-center justify-center">
          <FaNodeJs size={70} className="text-green-500 animate-pulse hover:animate-spin" />
          <h1>NODE.JS</h1>
        </div>
        <div className="w-40 h-40 rounded-2xl shadow-md hover:shadow-2xl hover:cursor-pointer flex flex-col items-center justify-center">
          <FaReact size={70} className="text-blue-400 animate-pulse hover:animate-spin" />
          <h1>REACT</h1>
        </div>
        <div className="w-40 h-40 rounded-2xl shadow-md hover:shadow-2xl hover:cursor-pointer flex flex-col items-center justify-center">
          <SiMongodb size={70} className="text-green-500 animate-pulse hover:animate-spin" />
          <h1>MONGODB</h1>
        </div>
        <div className="w-40 h-40 rounded-2xl shadow-md hover:shadow-2xl hover:cursor-pointer flex flex-col items-center justify-center">
          <SiTailwindcss size={70} className="text-blue-700 animate-pulse hover:animate-spin" />
          <h1>TAILWIND</h1>
        </div>
        <div className="w-40 h-40 rounded-2xl shadow-md hover:shadow-2xl hover:cursor-pointer flex flex-col items-center justify-center">
          <FaBootstrap size={70} className="text-violet-600 animate-pulse hover:animate-spin" />
          <h1>BOOTSTRAP</h1>
        </div>
        <div className="w-40 h-40 rounded-2xl shadow-md hover:shadow-2xl hover:cursor-pointer flex flex-col items-center justify-center">
          <SiExpress size={70} className="animate-pulse hover:animate-spin" />
          <h1>EXPRESS.JS</h1>
        </div>
      </div>
    </div>
  );
}

export default Skill;

