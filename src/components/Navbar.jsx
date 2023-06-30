import React, {useState, useEffect} from "react";
import {IoSunny, IoMoon, IoReorderThree} from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {

    const Links = [
        {name: "Home", link: "/"},
        {name: "About", link: "/"},
        {name: "Projects", link: "/"},
        {name: "Contact", link: "/"}
    ];

    const transition = "transition-all duration-500 ease-in-out"

    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState(false)
    const [navColor, setNavColor] = useState(false)

    useEffect(() => {
        AOS.init({
            once: false,
            duration: 500
        })
    }, []);

    const changeBG = () => {
        if (window.scrollY >= 20) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    }

    window.addEventListener('scroll', changeBG);

    const body = document.body;

    return ( 
        <>
            <nav className={`flex justify-between fixed w-full py-3 px-4 md:px-10 ${transition} ${navColor ? "backdrop-blur-sm" : "bg-transparent"}`}>
                <div data-aos="fade-down">
                    <h1 className="text-2xl">
                        <a href="/">Arif Adi Nugroho</a>
                    </h1>
                </div>
                <div data-aos="fade-down">
                    <div className="flex gap-4 md:gap-10 mt-1">
                        <button className="text-2xl" onClick={() => {setTheme(!theme)}}>{theme ? <IoMoon/> : <IoSunny/>}</button>
                        <button className="md:hidden text-2xl active:border-[1px] active:rounded-[5px] active:border-teal-500" onClick={() => {setIsOpen(!isOpen)}}><IoReorderThree/></button>
                        <ul className={`md:flex absolute h-40 md:h-fit top-14 right-1 md:static gap-6 md:text-lg bg-black shadow-md shadow-black md:shadow-none rounded-2xl md:bg-transparent w-56 md:w-fit md:translate-x-0 ${transition} ${isOpen ? "translate-x-0" : "translate-x-[100rem]"}`}>
                            {
                                Links.map(link => (
                                    <li><a href={link.link} className={`md:mx-0 mx-2 block p-2 md:p-0 md:border-none ${transition} hover:text-teal-500`}>{link.name}</a></li>
                                    ))
                                }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;