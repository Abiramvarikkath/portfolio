import React from 'react'
import { AiFillHtml5 }from "react-icons/ai";
import { FaCss3Alt ,  FaNodeJs ,FaReact,FaBootstrap  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb ,SiTailwindcss,SiExpress } from "react-icons/si";
function Skill() {
  return (
    <div id='Skill' className='w-full h-fit'>
      <h1 className='text-center pt-10 font-bold text-4xl'>Skill</h1>
      <div className='grid grid-cols-5 gap-10  text-1xl items-center text-center  mt-28 justify-items-center '>
      <div className='w-40  rounded-2xl  h-40 place-content-center  justify-items-center shadow-md hover:shadow-2xl hover:cursor-pointer'>
        <AiFillHtml5 size={76} className="object-center content-center text-orange-500 animate-pulse hover:animate-spin "/>
        <h1 className='text-center'>HTML</h1>
      </div>
      <div className='w-40  rounded-2xl  h-40 place-content-center  justify-items-center shadow-md hover:shadow-2xl hover:cursor-pointer'>
          <FaCss3Alt  size={75} className="object-center text-blue-600 animate-pulse hover:animate-spin"/>
          <h1 className='text-center'>CSS</h1>
      </div>
      <div className='w-40  rounded-2xl h-40 place-content-center  justify-items-center shadow-md hover:shadow-2xl hover:cursor-pointer'>
          <IoLogoJavascript  size={70} className="object-center text-yellow-300  animate-pulse hover:animate-spin"/>
          <h1 className='text-center'>JAWASCRIPT</h1>
      </div>
      <div className='w-40  rounded-2xl h-40 place-content-center  justify-items-center shadow-md hover:shadow-2xl hover:cursor-pointer'>
          <FaNodeJs  size={70} className="object-center text-green-500 animate-pulse hover:animate-spin "/>
          <h1 className='text-center'>NODE.JS</h1>
      </div>
      <div className='w-40  rounded-2xl h-40 place-content-center  justify-items-center shadow-md hover:shadow-2xl hover:cursor-pointer'>
          <FaReact  size={70} className="object-center text-blue-400 animate-pulse hover:animate-spin"/>
          <h1 className='text-center'>REACT</h1>
      </div>
      <div className='w-40  rounded-2xl h-40 place-content-center  justify-items-center shadow-md hover:shadow-2xl hover:cursor-pointer'>
          <SiMongodb  size={70} className="object-center text-green-500 animate-pulse hover:animate-spin "/>
          <h1 className='text-center'>MONGODB</h1>
      </div>
      <div className='w-40  rounded-2xl  h-40 place-content-center  justify-items-center shadow-md hover:shadow-2xl hover:cursor-pointer'>
          <SiTailwindcss  size={70} className="object-center text-blue-700 animate-pulse hover:animate-spin"/>
          <h1 className='text-center'>TAILWIND</h1>
      </div>
      <div className='w-40  rounded-2xl h-40 place-content-center  justify-items-center shadow-md hover:shadow-2xl hover:cursor-pointer'>
          <FaBootstrap  size={70} className="object-center text-violet-600 animate-pulse hover:animate-spin "/>
          <h1 className='text-center'>BOOTSTRAP</h1>
      </div>
      <div className='w-40   h-40 place-content-center  justify-items-center shadow-md hover:shadow-2xl  rounded-2xl hover:cursor-pointer'>
          <SiExpress  size={70} className="object-center animate-pulse hover:animate-spin
 "/>
          <h1 className='text-center'>EXPRESS.JS</h1>
      </div>
      </div>
    </div>
  )
}

export default Skill
