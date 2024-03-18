import { Route, Router, Routes } from "react-router";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route path="/" element={<Home/>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
