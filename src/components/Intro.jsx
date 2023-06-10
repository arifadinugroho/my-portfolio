import React from "react";
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Intro = () => {
  return (
    <>
      <div className="absolute text-start">
        <p className="w-96">
          Hello, my name is Arif Adi Nugroho. I am currently 16 years old and a
          student at a vocational high school. Technology has always fascinated
          me, and I'm enthusiastic about diving into programming languages and
          enhancing my software development skills. With a strong foundation
          being built during my time in SMK, I am excited about the
          opportunities that lie ahead in my future tech career.
        </p>
        <h2>
          <a href="/" className="py-2 px-4">Contact me</a>
        </h2>
      </div>
    </>
  );
};

export default Intro;
