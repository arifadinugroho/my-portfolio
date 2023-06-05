import Home from "./pages/Home";
import About from "./pages/About";
import Loading from "./components/Loading";
import Socmed from "./components/Socmed";
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
      </div>)}
    </>
  );
}

export default App;
