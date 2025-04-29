 import React from 'react'

function About() {
  return(
<>

<div id='About' className='w-full min-h-screen flex flex-col md:flex-row items-center p-4 md:p-12'>
  <div className='w-full md:w-1/2 flex justify-center'>
    <img src="abi 10.jpeg" alt="Abhiram profile" className="max-h-[600px] w-auto object-cover rounded-lg" />
  </div>
  <div className='w-full md:w-1/2 mt-8 md:mt-0'>
    <h1 className='text-center text-4xl font-bold italic'>About Me</h1>
    <hr className="my-4 mx-auto w-1/2 border-gray-400" />
    
    <p className='text-justify px-4 md:px-0'>
      I am a passionate and detail-oriented <b>MERN Stack Developer</b>, eager to kickstart my career in web development.
      With a solid foundation in <b>MongoDB, Express.js, React.js</b>, and <b>Node.js</b>, I possess a strong understanding of both front-end and back-end development.
    </p>
    
    <ul className="list-disc list-inside text-lg mt-4 px-4 md:px-0">
      <li>Proficiency in <b>JavaScript, HTML, and CSS</b></li>
      <li>Experience with <b>React.js</b> for building interactive user interfaces</li>
      <li>Knowledge of <b>Node.js</b> and Express for server-side logic</li>
      <li>Familiarity with <b>MongoDB</b> for database management</li>
    </ul>

    <p className='mt-4 px-4 md:px-0'>
      I am enthusiastic about learning new technologies, solving complex problems, and collaborating in a team environment.
      My goal is to grow as a professional while contributing to innovative and impactful projects.
      <br /><br />
      <b>Let's connect!</b> I'm excited to explore modern web technologies together.
    </p>
  </div>
</div>

</>
  )
}

export default About
