import React, {useState} from "react";
import {IoClose, IoMenu} from "react-icons/io5"

const Navbar = ({name, Links, Transition}) => {

  const [navbarColor, setNavbarColor] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY) {
      setNavbarColor(true)
    } else {
      setNavbarColor(false)
    }
  }

  window.addEventListener('scroll', changeNavbarColor)
  
  return ( 
    <>
      <nav className={`flex fixed w-full justify-between py-2 border-b-[1px] border-slate-500 z-50 ${Transition} ${navbarColor ? `bg-black bg-opacity-80` : `bg-transparent`}`}>
        <h1 className={`text-3xl md:text-4xl font-mono text-fuchsia-500 pl-4 md:pl-10 z-50`}>{name}</h1>
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden text-3xl text-slate-500 ${Transition} hover:text-fuchsia-500 absolute right-4 top-3 z-50`}>{isOpen ? <IoClose/> : <IoMenu/>}</button>
        <ul className={`md:flex text-center w-3/4 md:w-fit md:h-0 gap-6 absolute right-0 md:right-10 top-28 md:top-2 border-2 border-fuchsia-500 shadow-md shadow-fuchsia-500 bg-black bg-opacity-90 md:bg-none rounded-lg z-50 md:border-none md:translate-x-0 ${Transition} ${isOpen ? `translate-x-0` : `translate-x-[100rem]`}`}>
          {
            Links.map(link => (
              <li key={link.id} className={`pl-5 md:pl-0`} onClick={() => setIsOpen(!isOpen)}><a href={link.link} className={`text-xl block text-slate-100 ${Transition} hover:text-fuchsia-500 py-2`}>{link.name}</a></li>
              ))
            }
        </ul>
      </nav>
    </>
   );
}
 
export default Navbar;