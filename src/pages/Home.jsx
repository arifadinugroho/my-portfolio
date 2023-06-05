import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Socmed from "../components/Socmed";

const Home = () => {
  return (
    <>
      <section className="h-[100vh] bg-slate-100">
        <Navbar />
        <div className="">
          <Gallery/>
          <Hero/>
          <Socmed/>
        </div>
      </section>
    </>
  );
};

export default Home;
