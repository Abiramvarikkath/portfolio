import React from 'react';
import image from '../public/abi 8.jpeg';

function Base() {
  return (
    <div 
      className='relative w-full h-screen  items-center justify-center bg-no-repeat bg-center bg-cover  bg-black backdrop-opacity-[50]' 
      style={{ backgroundImage: `url(${image})`,
    }}
    >
      <nav className='font-semibold justify-center text-center space-x-10 pt-[30px] text-gray-600'>
      
      <a href='#About' className="hover:text-gray-400 transition duration-300 ease-in-out hover:scale-105">About</a>
        <a href='#Project' className='hover:text-gray-400 transition duration-300 ease-in-out hover:scale-105 '>
          Projects</a>
        <a href='#Skill' className='hover:text-gray-400 transition duration-300 ease-in-out hover:scale-105 '>
          Skill</a>
        <a href='#Contact' className='hover:text-gray-400 transition duration-300 ease-in-out hover:scale-105 '>
          Contact</a>  
       
      
      </nav>
  <div >
      <h1 className='text-black text-4xl font-bold text-center pt-[250px] animate-pulse'>Welcome to My Page</h1>
      <h2 className='text-black text-3xl font-bold text-center pt-[10px] animate-pulse '> ABIRAM.V</h2>
      <h4 className='text-black text-1xl font-bold text-center pt-[5px] animate-pulse'>Web Devoloper & Designer</h4>
  </div>
   
    </div>

    
  );
}

export default Base;

