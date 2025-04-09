import React from 'react';
import image from '../public/abi 7.avif';

function Base() {
  return (
    <div 
      className='relative w-full h-screen  items-center justify-center bg-no-repeat bg-center bg-cover  bg-black backdrop-opacity-[50]' 
      style={{ backgroundImage: `url(${image})`,
    }}
    >
      <nav className='font-semibold justify-center text-center space-x-10 pt-[50px] text-lime-50'>
      
      <a className="hover:text-gray-500 transition duration-300 ease-in-out hover:scale-105">About</a>
        <a className='hover:text-gray-500 transition duration-300 ease-in-out hover:scale-105 '>
          Project</a>
        <a className='hover:text-gray-500 transition duration-300 ease-in-out hover:scale-105 '>
          Skill</a>
        <a className='hover:text-gray-500 transition duration-300 ease-in-out hover:scale-105 '>
          Contact</a>  
       
      
      </nav>

      <h1 className='text-black text-4xl font-bold text-center pt-[100px] animate-pulse'>Welcome to My Page</h1>
      <h2 className='text-black text-3xl font-bold text-center pt-[10px] animate-pulse '> ABIRAM.V</h2>
      <h4 className='text-black text-1xl font-bold text-center pt-[5px] animate-pulse'>Web Devoloper & Designer</h4>
    </div>

    
  );
}

export default Base;

