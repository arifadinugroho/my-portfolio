import React from "react";
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'


const Hero = () => {


  return (
    <>
        <div className="absolute top-[60%] pl-4 md:pl-10 md:top-1/3">
          <h3 className="text-2xl text-gray-950 leading-none font-bold">Hallo my name is</h3>
          <p className="text-[45px] leading-none font-bold md:text-6xl">
            Arif Adi Nugroho
          </p>
          <h3 className="text-xl">I'm a Full Snack Provider</h3>
          <ul className="flex">
            <li className="py-2 px-4 mr-2 bg-gray-950 text-slate-100 border-2 border-solid border-gray-950 rounded-md shadow-md">
              <a href="/notfound">About me</a>
            </li>
            <li className="py-2 px-4 border-2 border-solid border-gray-950 rounded-md">
              <a href="/notfound">Portfolio</a>
            </li>
          </ul>
          <ul className="flex gap-2 pt-2 md:mt-52">
            <li className="text-3xl"><a href=""><FaGithub/></a></li>
            <li className="text-3xl"><a href=""><FaLinkedinIn/></a></li>
          </ul>
        </div>
    </>
  );
};

export default Hero;
