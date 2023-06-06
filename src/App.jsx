import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 500)
  }, [])

  return (
    <>
      {loading ? <Loading/> : (<div>
        <Home/>
        <About/>
        <Project/>
        <Blog/>
      </div>)}
    </>
  );
}

export default App;
