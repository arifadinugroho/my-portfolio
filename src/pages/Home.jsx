import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      <section className="h-[100vh] bg-slate-100">
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
