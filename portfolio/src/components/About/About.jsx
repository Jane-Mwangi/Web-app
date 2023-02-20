import {
  Email,
  LocationOn,
  Phone,
  CalendarMonth,

} from "@mui/icons-material";
import { Icon } from "@iconify/react";
import Topbar from "../Topbar/Topbar";
import "./about.css";

export default function About() {
  return (
    <div className="aboutContainer">
      {/* <div className="topBarContainer">
        <Topbar />
      </div> */}
      <div className="aboutMeContainer">
        <div className="aboutMeTexthr ">
          <div className="aboutMeText">About Me</div>
          <div className="hr">
            <hr id="hrline" />
          </div>
        </div>

        <div className="aboutMePicText">
          <div className="aboutMePic">
      
          </div>
          <div className="aboutMeText1">
            <div className="WhoamI">Who am I</div>
            <div className="WhoamIText">
            I am a web developer and UI/UX designer who is passionate about creating digital products that provide exceptional user experiences. I leverage my skills in programming and design to bring together form and function 
            to create visually stunning, easy-to-use, and accessible websites and web applications.
            </div>
            <div className="PersonalInfo">
              <p>Personal Information</p>
            </div>
            <div className="PersonalInfoItems1">
              <div className="PersonalInfoItemsPhone">
                <div className="phoneIconContainer">
                  <Phone className="phone"  />
                </div>

                <div className="phoneNumber">
                  Phone <br />
                  +254 791033620
                </div>
              </div>
              <div className="PersonalInfoItemsLocation">
                <div className="locationIconContainer">
                  <LocationOn className="location" />
                </div>
                <div className="locationName">
                  Location <br /> Nairobi
                </div>
              </div>
            </div>
            <div className="PersonalInfoItems2">
              <div className="PersonalInfoItemsEmail">
                <div className="EmailIconContainer">
                  <Email className="EmailDetails" />
                </div>
                <div className="Email">
                  Email <br /> janiegrace097@gmail.com
                </div>
              </div>
              <div className="PersonalInfoItemsBirthday">
                <div className="birthdayIconContainer">
                  <CalendarMonth className="birthday" />
                </div>
                <div className="birthdayDate">
                  Birthday <br /> 5 May 2000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="WhatCanIDoSection">
          <div className="whatCanIDoContainer">
            <p>What I Do!</p>
          </div>
          <div className="WhatCanIDoSectionItems">
            <div className="WhatCanIDoSectionItems1">
              <div className="WhatIDo1">
                <div className="webDevIcon">
                <Icon icon="material-symbols:web" color="turquoise" width="30" height="30" />
                </div>
                <div className="webDevDetails">
                  <div className="webtext">
                    <p id="Webtitle">Web Development</p>
                  </div>
                  <div className="webDevDetailsText">
                    <p id="Web">
                    I stay current with the latest web technologies to deliver cutting-edge websites.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="WhatIDo2">
              <div className="webDevIcon">
                  <Apps />
                </div>
                <div className="webDevDetails">
                  <p>App Development</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    minima aspernatur ex illum nesciunt maiores itaque ad natus
                    rerum fugit? Nam.
                  </p>
                </div>
              </div> */}
              <div className="WhatIDo2">
                <div className="webDevIcon">
                <Icon icon="mdi:design" color="pink" width="30" height="30" />
                </div>
                <div className="webDevDetails">
                  <p id="UItitle">UI/UX Development </p>
                  <p id="UI">
                  I create intuitive and visually appealing interfaces for seamless experiences
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="WhatCanIDoSectionItems2">
              <div className="WhatIDo4">
                <div className="UIUXDevIcon">
                  <DesignServices/>
                </div>
                <div className="UIUXDetails">
                  <p>UI/UX  Development</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    minima aspernatur ex illum nesciunt maiores itaque ad natus
                    rerum fugit? Nam.
                  </p>
                </div>
              </div>
              <div className="WhatIDo5">
              <div className="DebbugingIcon">
                  <BugReport />
                </div>
                <div className="debbugingDetails">
                  <p>Debbuging</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    minima aspernatur ex illum nesciunt maiores itaque ad natus
                    rerum fugit? Nam.
                  </p>
                </div>
              </div>
              <div className="WhatIDo6">
              <div className="TestingIcon">
                  <Api />
                </div>
                <div className="testingDetails">
                  <p>Testing</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    minima aspernatur ex illum nesciunt maiores itaque ad natus
                    rerum fugit? Nam.
                  </p>
                </div>
              </div>
            </div> */}
            <div className="knowledgecontainer">
              <div className="knowledgetext" >
                <p>Knowledge</p>
              </div>
              <div className="Knowledge">
                <div className="html">
                  <Icon icon="logos:html-5" width="50" height="50" />
                </div>
                <div className="CSS">
                  <Icon icon="logos:css-3" width="50" height="50" />
                </div>
                <div className="JavaScript">
                  <Icon icon="logos:javascript" width="50" height="50" />
                </div>
                <div className="React">
                  <Icon icon="skill-icons:react-dark" width="50" height="50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
