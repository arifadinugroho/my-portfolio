import React from "react";
import {FaInstagram, FaWhatsapp, FaFacebookF} from 'react-icons/fa'

const Intro = () => {
  return (
    <>
      <div className="pt-[5%] pl-4 md:pl-10">
        <div className="leading-none">
          <h3 className="text-7xl md:text-[64px] text-gray-500">I'm the <span className="text-teal-500">coolest man</span> in this damn world.</h3>
          <p className="text-[19px] md:text-[64px] pt-4 md:pt-0 text-gray-500">I have learned coding about <span className="text-teal-500">3 months ago.</span><br />
          I can never be <span className="text-teal-500">consistent</span> but <span className="text-teal-500">i will try.</span></p>
          <div className="flex gap-3 md:gap-10 pt-6">
            <p className="border-gray-500 text-center h-14 text-gray-500 text-2xl"><span className="text-teal-500 text-4xl">15<sup>+</sup></span><br />years alive</p>
            <p className="border-gray-500 text-center h-14 text-gray-500 text-2xl"><span className="text-teal-500 text-4xl">1K<sup>+</sup></span><br />life problems</p>
            <p className="border-gray-500 text-center h-14 text-gray-500 text-2xl"><span className="text-teal-500 text-4xl">0</span><br />enemy</p>
          </div>
          <div className="mt-8 text-2xl md:text-4xl text-gray-500">
            <pre>Name: Arif Adi Nugroho</pre>
            <pre>Born: May 3 2007</pre>
            <pre>Country: Indonesia</pre>
          </div>
          <ul className="flex mt-12 md:mt-20">
            <li className="py-2 text-4xl text-gray-500 transition-all duration-500 hover:text-teal-500"><a href=""><FaWhatsapp/></a></li>
            <li className="py-2 pl-4 text-4xl text-gray-500 transition-all duration-500 hover:text-teal-500"><a href=""><FaInstagram/></a></li>
            <li className="py-2 pl-4 text-4xl text-gray-500 transition-all duration-500 hover:text-teal-500"><a href=""><FaFacebookF/></a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Intro;
