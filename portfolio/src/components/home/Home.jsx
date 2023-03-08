import "./home.css";
import {
  Facebook,
  Twitter,
  GitHub,
  LinkedIn,
  Download,
} from "@mui/icons-material";




export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeContainerMiddle">
        <div className="homeContainerMiddlePic">
          <img src={process.env.PUBLIC_URL + "image/jane2.jpg"} alt="me" />
        </div>
        <div className="homeContainerMiddleName">
          <h1>Jane Mwangi</h1>
          <p>Web Developer</p>
        </div>
        <div className="homeContainerMiddleSoial">
          <div className="homeContainerMiddleSocialFb">
            <a href="" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook className="facebook" />
            </a>
          </div>
          <div className="homeContainerMiddleSocialTwitter">
            <a href="https://twitter.com/Njeri_Mwangi77?t=p1Gaxxr1SjRqy-D_iHJrsA&s=09" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter className="twitter" />
            </a>
          </div>
          <div className="homeContainerMiddleSocialwhat">
            <a href="https://github.com/JanieG55?tab=repositories" target="_blank" rel="noreferrer" aria-label="Github">
              <GitHub className="github" />
            </a>
          </div>
          <div className="homeContainerMiddleSocialIn">
            <a href="https://www.linkedin.com/in/jane-njeri-317b6a263/" target="_blank" rel="noreferrer" aria-label="Linkedin">
              <LinkedIn className="linkedin" />
            </a>
          </div>
        </div>
        <div className="CVcontainer">
          <Download className="download" />
          <div className="downloadcv">Download CV</div>
        </div>
      </div>
    </div>
  );
}
