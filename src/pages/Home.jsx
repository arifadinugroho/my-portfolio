import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"

const Home = () => {

  const Transition = "transition-all duration-500"

  const Links = [
    {id: 1, name: "Home", link: "/"},
    {id: 2, name: "About", link: "/"},
    {id: 3, name: "Blogs", link: "/"},
    {id: 4, name: "Contact", link: "/"}
  ]

  return ( 
    <>
      <section className="h-[150vh] md:h-screen w-full bg-bg_primary">
        <Navbar name="Arif Adi Nugroho" Links={Links} Transition={Transition}/>
        <div className="h-screen flex flex-col md:space-x-64 md:flex-row justify-center items-center md:static md:px-32">
          <Hero name="Arif Adi Nugroho" Transition={Transition}/>
        </div>
      </section>
    </>
   );
}
 
export default Home;