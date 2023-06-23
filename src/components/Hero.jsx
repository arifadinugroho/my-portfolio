import React from "react";
import {FaWhatsapp, FaInstagram, FaFacebookF} from "react-icons/fa"
import "animate.css"

const Hero = ({name, Transition}) => {

    const Socmeds = [
        {icon: <FaWhatsapp/>, link: "https://api.whatsapp.com/send/?phone=6282110199768&text&type=phone_number&app_absent=0", id: 1},
        {icon: <FaInstagram/>, link: "https://www.instagram.com/arrif.adi/?hl=id", id: 2},
        {icon: <FaFacebookF/>, link: "https://www.facebook.com/profile.php?id=100082183115290", id: 3}
    ]

    return ( 
        <>
            <div className="text-slate-500 text-center md:text-start">
                <h3 className="text-xl md:text-2xl">Hello everyone I am <br /> <span className="font-mono text-shadow text-[40px] md:text-6xl text-fuchsia-500">{name}</span></h3>
                <ul className="flex justify-center md:justify-normal py-4 gap-6">
                    {
                        Socmeds.map(socmed => (
                            <li key={socmed.id}><a href={socmed.link} className={`text-3xl ${Transition} hover:text-fuchsia-500`}>{socmed.icon}</a></li>
                        ))
                    }
                </ul>
            </div>
        </>
     );
}
 
export default Hero;