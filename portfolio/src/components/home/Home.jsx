import "./home.css";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Download,
} from "@mui/icons-material";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeContainerMiddle">
        <div className="homeContainerMiddlePic">
          <img src={process.env.PUBLIC_URL + "Assets/Me.png"} alt="myimage" />
        </div>
        <div className="homeContainerMiddleName">
          <h1>Jane Mwangi</h1>
          <p>Web Developer</p>
        </div>
        <div className="homeContainerMiddleSoial">
          <div className="homeContainerMiddleSocialFb">
            <Facebook className="facebook" />
          </div>
          <div className="homeContainerMiddleSocialTwitter">
            <Twitter className="twitter" />
          </div>
          <div className="homeContainerMiddleSocialwhat">
            <Instagram className="instagram" />
          </div>
          <div className="homeContainerMiddleSocialIn">
            <LinkedIn className="linkedin" />
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
