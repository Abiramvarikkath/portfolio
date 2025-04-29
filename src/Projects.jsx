import React from 'react';
import { SiStarbucks, SiKtm, SiFlipkart } from "react-icons/si";

function Projects() {
  return (
    <div id="Project" className="w-full min-h-autio py-12">
      <p className="text-center font-bold text-3xl sm:text-4xl mb-10">Projects</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-10 text-center font-bold">
        {/* Project 1 */}
        <div className="bg-white w-full h-60 rounded-2xl shadow-xl flex flex-col items-center justify-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <SiFlipkart className="text-yellow-400 w-20 h-20 animate-pulse hover:animate-spin cursor-pointer" />
          <h1 className="mt-4">Commerce Website</h1>
        </div>

        {/* Project 2 */}
        <div className="bg-white w-full h-60 rounded-2xl shadow-xl flex flex-col items-center justify-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <SiStarbucks className="text-green-700 w-20 h-20 animate-pulse hover:animate-spin cursor-pointer" />
          <h1 className="mt-4">StarBucks</h1>
        </div>

        {/* Project 3 */}
        <div className="bg-white w-full h-60 rounded-2xl shadow-xl flex flex-col items-center justify-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <SiKtm className="text-orange-600 w-24 h-24 animate-pulse hover:animate-spin cursor-pointer" />
          <h1 className="mt-4">KTM</h1>
        </div>
      </div>
    </div>
  );
}

export default Projects;
