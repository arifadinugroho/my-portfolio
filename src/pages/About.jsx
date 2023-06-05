import Profile from "../components/Profile";
import Intro from "../components/Intro";

const About = () => {
  return (
    <>
      <section className="bg-slate-100 border-t-2 border-solid">
        <h1 className="text-2xl text-center">About me</h1>
        <Profile />
        <Intro />
        <div className="relative -bottom-2/3">
        </div>
      </section>
    </>
  );
};

export default About;
