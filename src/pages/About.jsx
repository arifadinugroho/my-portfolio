import Profile from "../components/Profile";
import Intro from "../components/Intro";

const About = () => {
  return (
    <>
      <section className="h-screen bg-gradient-to-br from-gray-950 to-gray-800">
        <h1 className="text-center text-4xl font-bold"><span className="text-teal-500">About me</span>🫅</h1>
        <Profile />
        <Intro />
      </section>
    </>
  );
};

export default About;
