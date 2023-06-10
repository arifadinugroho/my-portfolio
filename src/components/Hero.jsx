import React from "react";
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Hero = () => {


  return (
    <>
        <div className="absolute top-[70%] pl-4 md:pl-10 md:top-1/3">
          <h3 className="text-[25px] md:text-4xl font-semibold text-gray-500 leading-none">Hallo my name is</h3> 
          <h1 className="text-teal-500 font-bold text-[40px] md:text-7xl leading-none">Arif Adi Nugroho.</h1>
          <p className="text-[25px] md:text-4xl font-semibold text-gray-500 leading-none">I'm a Full Snack Provider</p>
          <ul className="flex mt-2">
            <li className="w-fit py-2 px-4 border-2 border-solid border-teal-500 text-teal-500 rounded-md transition-all duration-500 hover:box-shadow"><a href="">Portfolio</a></li>
            <li className="text-gray-500 text-3xl pt-2 pl-4 transition-all duration-500 hover:text-teal-500"><a href=""><FaGithub/></a></li>
            <li className="text-gray-500 text-3xl pt-2 pl-4 transition-all duration-500 hover:text-teal-500"><a href=""><FaLinkedinIn/></a></li>
          </ul>
        </div>
    </>
  );
};

export default Hero;
