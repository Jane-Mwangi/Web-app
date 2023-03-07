
import Home from "./components/home/Home";
import Footer from "./components/Footer/Footer"
import Topbar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Works/Portfolio";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Topbar />
      <Footer/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
    </Routes>
    </div>
  );
}

export default App;
