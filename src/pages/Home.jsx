import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      <section className="h-screen bg-gradient-to-bl from-gray-800 to-gray-950">
        <Navbar />
        <div className="">
          <Gallery/>
          <Hero/>
        </div>
      </section>
    </>
  );
};

export default Home;
