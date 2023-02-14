import "./home.css";
import {

  Person,
  Article,
  Work,
  Contacts,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Download,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";
export default function Home() {
  return (
    <div className="homeContainer">
      <div className="topbarContainer">
        <div className="topbarContainerLogo">
          <p>JENNAH</p>
        </div>
        <div className="topbarContainerLeft">
          <div class="topbarContainerHome">
            <div className="bungalowicon">
            <Icon icon="material-symbols:home" color="white" width="25" height="25" />
            </div>
            <div className="bungalowname">Home</div>
          </div>

          <div class="topbarContainerAbout">
            <Person className="Bungalow" />
            <div className="bungalowname">About</div>
          </div>
          <div class="topbarContainerResume">
            <Article className="Bungalow" />
            <div className="bungalowname">Resume</div>
          </div>
          <div class="topbarContainerWorks">
            <Work className="Bungalow" />
            <div className="bungalowname">Works</div>
          </div>
          <div class="topbarContainerContact">
            <Contacts className="Bungalow" />
            <div className="bungalowname">Contact</div>
          </div>
        </div>
      </div>
      <div className="homeContainerMiddle">
        <div className="homeContainerMiddlePic"></div>
        <div className="homeContainerMiddleName">
          <h1>Jane Mwangi</h1>
          <p>Front-End Developer</p>
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
