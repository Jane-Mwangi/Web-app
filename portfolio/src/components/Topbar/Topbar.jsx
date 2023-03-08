import "./topbar.css";
import { Bungalow, Person,Work, Contacts } from "@mui/icons-material";
import {React, useState, useRef} from 'react';
import { Link } from "react-router-dom";

export default function Topbar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const hambugerRef = useRef(null);
  const navMenuRef = useRef(null);

  const handleToggle = () => {
    hambugerRef.current.classList.toggle("active");
    navMenuRef.current.classList.toggle("active");
  };

  const handleLinkClick = () => {
    hambugerRef.current.classList.remove("active");
    navMenuRef.current.classList.remove("active");
  };

  return (
    <div className="topbarContainer">
      <div className="topbarContainerLogo">
        <p>JENNAH</p>
      </div>
      <div className="topbarContainerLeft">
        <div class="topbarContainerHome">
          <div className="icon">
            <Bungalow className="Bungalow" />
          </div>
          <div className="bungalowname">
          <Link className="link" to={"./"}>
            Home
          </Link>
        
          </div>
        </div>
        <div class="topbarContainerAbout">
          <div className="icon">
            <Person className="Bungalow" />
          </div>
          <div className="bungalowname">
            <Link className="link" to={"/about"}>
              About
            </Link>
          </div>
        </div>
      <div class="topbarContainerWorks">
        <div className="icon">
          <Work className="Bungalow" />
        </div>
        <div className="bungalowname">
        <Link className="link" to={"/portfolio"}>
          Portfolio
          </Link></div>
      </div>
      <div class="topbarContainerContact">
        <div className="iconContacts">
          <Contacts className="Bungalow" />
        </div>
        <div className="bungalowname">
          <Link className="link" to={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
      </div>
      <nav className="navbar">
        <ul className="nav-menu" ref={navMenuRef}>
          <li  className="nav-item">
            <a href="/" className="nav-link" onClick={handleLinkClick}>Home</a>
          </li>
          <li  className="nav-item">
            <a href="/about" className="nav-link" onClick={handleLinkClick}>About</a>
          </li>
          <li  className="nav-item">
            <a href="/portfolio" className="nav-link" onClick={handleLinkClick}>Portfolio</a>
          </li>
          <li  className="nav-item">
            <a href="/contact" className="nav-link" onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>
      </nav>
      <div className="hambuger" ref={hambugerRef} onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}
