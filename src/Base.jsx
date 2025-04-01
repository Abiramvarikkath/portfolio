import React from 'react';
import image from '../public/abi1.jpg';

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

      <h1 className='text-white text-4xl font-bold text-center pt-[50px]'>Welcome to My Page</h1>
      
    </div>
  );
}

export default Base;

