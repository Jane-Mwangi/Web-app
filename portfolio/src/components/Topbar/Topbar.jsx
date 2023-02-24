import "./topbar.css";
import { Bungalow, Person, Article, Work, Contacts } from "@mui/icons-material";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export default function Topbar() {
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
          <div className="bungalowname">Home</div>
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
        <div className="bungalowname">Works</div>
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
    </div>
    // </div>
  );
}
