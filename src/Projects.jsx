import React from 'react'
import { SiStarbucks, SiKtm, SiFlipkart } from "react-icons/si";
function Projects() {
  return (
    <div className='w-full h-[500px]'>
      <p className='text-center mt-12 font-bold text-4xl'>Projects</p>
    <div className='grid grid-cols-3 gap-3 flex text-center text-bold mt-12 p-10 '>
        <div >
          <div className='bg-white w-70 h-60 rounded-2xl shadow-xl flex flex-col items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 pt-10'>
          <SiFlipkart className='text-yellow-400 w-20 h-20 animate-pulse hover:animate-spin'/>
          <h1 className='font-bold'>Commerce Website</h1>
          </div>
          </div>
        <div >
          <div className='bg-white  rounded-2xl shadow-xl w-70 h-60  flex flex-col items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 pt-10' >
        <SiStarbucks className="text-green-700 w-20 h-20 animate-pulse  hover:animate-spin" />
        <h1 className='font-bold'>StarBucks</h1>
        </div>
        </div>
        
        <div>
          <div className='bg-white object-center w-70 h-60 rounded-2xl shadow-xl flex flex-col items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  pt-10'>
            <SiKtm className=' text-orange-600 w-24 h-24 animate-pulse  hover:animate-spin'/>
            <h1 className='font-bold'>KTM</h1>
          </div>
        </div>
    </div>
   </div>
  )
}


export default Projects
