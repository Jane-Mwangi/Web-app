
import Home from "./components/home/Home";
import Topbar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Topbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
      {/* <Topbar/> */}
      {/* <About/> */}
      {/* <Contact/> */}
    </div>
  );
}

export default App;
