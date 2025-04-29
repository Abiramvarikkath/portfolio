import React from 'react';
import image from '../public/abi 8.jpeg';

function Base() {
  return (
    <>
     <nav className="w-full text-center py-6 bg-transparent text-gray-600 font-semibold space-x-4 sm:space-x-8 md:space-x-12 text-sm sm:text-base md:text-lg">
  <a href="#About" className="hover:text-gray-400 transition-transform duration-300 ease-in-out hover:scale-105">About</a>
  <a href="#Project" className="hover:text-gray-400 transition-transform duration-300 ease-in-out hover:scale-105">Projects</a>
  <a href="#Skill" className="hover:text-gray-400 transition-transform duration-300 ease-in-out hover:scale-105">Skill</a>
  <a href="#Contact" className="hover:text-gray-400 transition-transform duration-300 ease-in-out hover:scale-105">Contact</a>
</nav>

    
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Navigation */}
    

      {/* Welcome Text */}
      <div className="text-center text-black px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold animate-pulse">Welcome to My Page</h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold pt-2 animate-pulse">ABIRAM.V</h2>
        <h4 className="text-base sm:text-lg md:text-xl font-semibold pt-1 animate-pulse">
          Web Developer & Designer
        </h4>
      </div>
    </div>
    </>
  );
}

export default Base;
