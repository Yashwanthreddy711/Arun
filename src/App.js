import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Curriculam from "./Pages/Curriculam/Curriculam";

import Testimonials from "./Pages/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Whyus from "./Pages/Whyus/Whyus";
import Faq from "./Pages/Faq/Faq";


function App() {
  return (
    <div className="App  max-w-[1200px]  mx-auto h-full ">
      <Router>
         <Navbar/>
         <Home/>
         <About/>
         <Whyus/>
         <Curriculam/>
         <Testimonials/>
         <Faq/>
         <Footer/>
      </Router>
    </div>
  );
}

export default App;
