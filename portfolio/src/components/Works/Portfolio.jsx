import "./Portfolio.css";
// import tyre from "./tyre.png"
import {GitHub} from "@mui/icons-material"
function Portfolio() {
  return (
    <div className="PortfolioContainer">
      <div className="projectDescription">
        <div className="E-Commerceapp">
          <p>REDSTORE</p>
        </div>
        <div className="E-CommerceappDescription">
          <p>
            Welcome to my portfolio! This project showcases my work on an
            ecommerce website for sports wear. The goal of this project was to
            create an online platform that offers a wide selection of
            high-quality sports wear products at competitive prices. The website
            is designed to be user-friendly and accessible to customers on
            different devices. I aimed to demonstrate my skills in web
            development, design, and project management, as well as my ability
            to meet client needs and deliver a successful product
          </p>
         
        </div>
        <div className="githubTech">
        <div className="githublink">
          <a href="https://github.com/JanieG55/RedStore" target="_blank" rel="noreferrer" aria-label="RedStore">
          <GitHub/>
          </a>
       
        </div>
        <div className="technoligies">
          HTML  CSS JAVASCRIPT PHP
        </div>
        </div>
      
      </div>
      <div className="projectpic">
      {/* <img src={tyre} alt="redstore site" /> */}
      </div>
    </div>
  );
}

export default Portfolio;
