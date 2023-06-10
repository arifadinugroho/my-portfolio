import React, { useState } from "react";
import {FaInstagram, FaWhatsapp, FaFacebookF} from 'react-icons/fa'
import {IoMenu, IoClose} from 'react-icons/io5'

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  const [isOpen , setIsOpen] = useState(false)

  const navbarColor = () => {
    if (window.scrollY >= 30) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', navbarColor)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className={navbar ? "flex fixed w-full text-teal-500 bg-gray-900 justify-between px-4 pb-3 z-50 transition-all duration-500 md:px-10" : "flex fixed w-full text-teal-500 justify-between px-4 pb-3 z-50 transition-all duration-500 md:px-10"}>
        <h1 className="text-3xl mt-3 min-w-[200px]">My Website</h1>
        <div className="hidden md:flex">
          <ul className="flex mt-4 text-xl">
            <li className="pr-6 transition-all duration-500 hover:text-shadow">
              <a href="/">Home</a>
            </li>
            <li className="pr-6 transition-all duration-500 hover:text-shadow">
              <a href="/notfound">About</a>
            </li>
            <li className="pr-6 transition-all duration-500 hover:text-shadow">
              <a href="/notfound">Blogs</a>
            </li>
            <li className="pr-6 transition-all duration-500 hover:text-shadow">
              <a href="/notfound">Contact</a>
            </li>
          </ul>
        </div>  
        <button className="text-4xl pt-3 md:hidden" onClick={toggleMenu}>{isOpen ? <IoClose/> : <IoMenu/>}</button>
        {isOpen && ( <>
          <div className="absolute top-[59px] right-0 text-slate-100 w-screen h-screen text-start nav-respon" onClick={toggleMenu}>
            <div className="w-2/5 h-screen absolute right-0 bg-gray-900">
            <ul className="text-xl">
              <li className="p-2 transition-all duration-500 hover:text-teal-500"><a href="/">Home</a></li>
              <li className="p-2 transition-all duration-500 hover:text-teal-500"><a href="/notfound">About</a></li>
              <li className="p-2 transition-all duration-500 hover:text-teal-500"><a href="/notfound">Blogs</a></li>
              <li className="p-2 transition-all duration-500 hover:text-teal-500"><a href="/notfound">Contact</a></li>
            </ul>
            <ul className="flex gap-1">
              <li className="p-2"><a href=""><FaWhatsapp className="text-3xl"/></a></li>
              <li className="p-2"><a href=""><FaInstagram className="text-3xl"/></a></li>
              <li className="p-2"><a href=""><FaFacebookF className="text-3xl"/></a></li>
            </ul>
            </div>
          </div>
        </>)}
      </nav>
    </>
  );
};

export default Navbar;
