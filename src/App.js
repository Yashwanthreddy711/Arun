import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Curriculam from "./Pages/Curriculam/Curriculam";

import Testimonials from "./Pages/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Whyus from "./Pages/Whyus/Whyus";


function App() {
  return (
    <div className="App  max-w-[1200px] border-2 mx-auto h-full border-black">
      <Router>
         <Navbar/>
         <Home/>
         <About/>
         <Whyus/>
         <Curriculam/>
         
         <Testimonials/>
         <Footer/>
      </Router>
    </div>
  );
}

export default App;
