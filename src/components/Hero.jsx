import React from "react";

const Hero = () => {


  return (
    <>
        <div className="absolute top-[70%] pl-4 md:pl-10 md:top-1/3">
          <h3 className="text-[25px] md:text-4xl font-semibold text-gray-500 leading-none">Hallo my name is</h3> 
          <h1 className="text-teal-500 font-bold text-[40px] md:text-7xl leading-none">Arif Adi Nugroho.</h1>
          <p className="text-[25px] md:text-4xl font-semibold text-gray-500 leading-none">I'm a Full Snack Provider</p>
          <ul className="flex pt-3">
            <li className="py-2 px-4 mr-2 bg-gray-950 text-teal-500 border-2 border-solid border-gray-950 rounded-md shadow-md transition-all duration-500 hover:box-shadow">
              <a href="/notfound">About me</a>
            </li>
            <li className="py-2 px-4 border-2 border-solid border-teal-500 text-teal-500 rounded-md transition-all duration-500 hover:box-shadow">
              <a href="/notfound">Portfolio</a>
            </li>
          </ul>
        </div>
    </>
  );
};

export default Hero;
