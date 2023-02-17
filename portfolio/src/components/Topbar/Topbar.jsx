import "./topbar.css";
import { Bungalow, Person, Article, Work, Contacts } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarContainerLogo">
        <p>JENNAH</p>
      </div>
      <div className="topbarContainerLeft">
        <div class="topbarContainerHome">
          <Bungalow className="Bungalow" />
          <div className="bungalowname">
            Home
            </div>
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
  );
}
