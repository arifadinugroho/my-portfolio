import React from "react";

const Hero = () => {


  return (
    <>
        <div className="absolute top-[60%] min-w-[640px] pl-4 md:pl-10 md:top-1/3">
          <h3 className="text-2xl font-bold">Hallo my name is</h3>
          <h1 className="text-[45px] font-bold sm:text-6xl">
            Arif Adi Nugroho
          </h1>
          <p>I'm a bitch and piece of shit</p>
          <ul className="flex">
            <li className="py-2 px-4 mr-2 bg-gray-950 text-slate-100 border-2 border-solid border-gray-950 rounded-md shadow-md">
              <a href="/notfound">About me</a>
            </li>
            <li className="py-2 px-4 border-2 border-solid border-gray-950 rounded-md">
              <a href="/notfound">Portfolio</a>
            </li>
          </ul>
        </div>
    </>
  );
};

export default Hero;
