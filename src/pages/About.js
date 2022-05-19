import React from "react";
import { Fragment } from "react";
import Header from '../Accordion/Headers'
import {AiFillHtml5,AiFillGithub} from 'react-icons/ai'
import {DiCss3Full,DiJqueryLogo,DiJavascript1,DiReact,DiJava,DiPhp} from 'react-icons/di'
import {SiTypescript,SiRedux,SiCsharp} from 'react-icons/si'
import {FaVuejs} from 'react-icons/fa'

const About = () => {
  return (
    <div className="w-full min-h-[calc(100vh-60px)] max-w-[1400px] mx-auto  bg-blue-600 flex flex-col justify-start items-center  pb-16 px-3">
     <h2 className="text-2xl lg:text-5xl text-blue-50 font-bold uppercase pt-10 pb-16">About Me</h2>

     <Header question='2020-Date (Freelance Web Developer)' answer={<Fragment><h1 className="text-xl font-bold uppercase">Freelance Web Application Developer</h1><ul><li>React</li><li>Vue</li><li>Jquery</li></ul></Fragment>} />
     <Header question='2016-2020 (Kobu Innovative Solutions)' answer={<Fragment><h1 className="text-xl font-bold uppercase">kobu innovative solutions</h1><ul><li>React</li><li>Vue</li><li>Jquery</li></ul></Fragment>} />
     <Header question='2014-2016 (Depot Representative PPMC Warri)' answer='Karrox Technologies Ibadan, Oyo State ,Nigeria' />
     <Header question='2012-2013 (Karrox Technoligies KCSP)' answer='Karrox Technologies Ibadan, Oyo State ,Nigeria' />
     <Header question='2008-2012 (Web Developer)' answer='Gods Wizdom Business Concept, Agbowo, Ibadan, Oyo State Nigeria' />
     <Header question='2005-2008 (Self Taught)' answer='Got introduced into Web Development and started learning' />
     <Header question='2005 (Delta State University)' answer='Delta State University Abraka, Delta State, Nigeria'  />
    
    
    {/*   Technoligies I have worked with */}
    <h2 className="text-2xl lg:text-2xl text-blue-50 font-bold uppercase pt-16 pb-5">Technologies I have worked with</h2>
    <div className="w-full lg:w-[75%] grid grid-cols-6 gap-x-4 gap-y-10">
        <AiFillHtml5 className="text-6xl text-white"/>
        <DiCss3Full className="text-6xl text-white"/>
        <DiJqueryLogo className="text-6xl text-white"/>
        <DiJavascript1 className="text-6xl text-white"/>
        <SiTypescript className="text-6xl text-white"/>
        <FaVuejs className="text-6xl text-white"/>
        <DiReact className="text-6xl text-white"/>
        <SiRedux className="text-6xl text-white"/>
        <AiFillGithub className="text-6xl text-white"/>
        <DiJava className="text-6xl text-white"/>
        <SiCsharp className="text-6xl text-white"/>
        <DiPhp className="text-6xl text-white"/>
    </div>
   
    </div>
  ); 
};

export default About;
