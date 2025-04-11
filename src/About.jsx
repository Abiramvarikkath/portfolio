import React from 'react'


function About() {
  return (
    <div id='About' className='w-full h-screen flex '>
      <div className='w-[500px] h-[600px] pt-[100px] pl-[30px] '
         >
            <img src="abi 10.jpeg" alt="" />
      </div>
      <div >
      <h1 className='pt-[30px] text-center mt-12 font-bold .. text-4xl italic md:not-italic ...'> About Me

      </h1>
      <hr />
      <br /><br />
      <p className='pl-[50px]'> Iam a passionate and detail-oriented <b>MERN STACK DEVELOPER</b>,eager to kickstart my carrior in web devolopment .with a solid foundation in <br />
           <b> MongoDB,Express.Js,React.js</b>,and <b>Note.js</b>,i posses a strong understanding of both front-end and back-end devolopment  <br /><br />
             My experience include building dynamic and responsive Web applications,creating <b>REST full APLs</b>,and impimenting robust data base solutions. <br />
             her are sum of my key skills. <br /><br />
             </p>
             <ul  className="list-disc list-inside text-lg pl-[50px]">
                <li>profiiociency in <b>java Script,HTML,and CSS</b></li><br />
                <li>Experience With <b>React.js</b> for Building Intractive User InterFaces</li><br />
                <li> knowlwdge of <b>Node.js </b>and Expres for server-side logic</li><br />
                <li> Familarity with <b>MongoDB</b> for Data Base Management</li>
             </ul>
             <br /><br />
             <p className='pl-[50px]'>
             iam enthusiastic about learning new technologies,solving complex problems,and colaaborating in a team environment.my goal is to grow as a
              proffesionel while contributing to innovative and imbact full projects.
           <br /><br />
            <b>Let's connect</b> ! i'm exited to explore modern web technolgies together.
      </p>
      </div>
    </div>
  )
}

export default About
