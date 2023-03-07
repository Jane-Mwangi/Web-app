
import "./contact.css";
import { Icon } from "@iconify/react";
export default function Contact() {
  return (
    <div className="ContactContainer">
      <div className="ContactTextHr">
        <div className="contactText">
          <p>Contact</p>
        </div>
        <div className="hr">
          <hr id="hrline" />
        </div>
      </div>
      <div className="ContactSEc1Sec2">
        <div className="ContactSec1">
          <div className="ContactSec1Phone" id="Phone">
            <div className="phoneIconSec">
            <Icon icon="material-symbols:phone-in-talk" color="#0be5d8" width="50" height="50" />
            </div>
            <div className="phoneText">
              <div className="phoneText1">
                <p>Phone</p>
              </div>
              <div className="phoneText2">
                <p>+254 91033620</p>
              </div>
              <div className="phoneText3">
                <p>+254 976465456</p>
              </div>
            </div>
          </div>
          <div className="ContactSec1Email " id="Email">
          <div className="EmailIconSec">
          <Icon icon="material-symbols:attach-email" color="#FFA500" width="50" height="50" />
            </div>
            <div className="EmailText">
              <div className="EmailText1">
                <p>Email</p>
              </div>
              <div className="EmailText2">
                <p>janenjery2020@gmail.com</p>
              </div>
              <div className="EmailText3">
                <p>janiegrace097@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="ContactSec1Address" id="Address">
          <div className="EmailIconSec">
          <Icon icon="material-symbols:location-on-outline" color="#BB3F3F" width="50" height="50" />
            </div>
            <div className="EmailText">
              <div className="EmailText1">
                <p>Address</p>
              </div>
              <div className="EmailText2">
                <p>Kiharu,Murang'a</p>
              </div>
              <div className="EmailText3">
                <p>Kenya</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ContactSec2">
          <div className="myDescription">
            <p id="Description">I am always open to discuss product design,development or partnerships</p>
          </div>
          <div className="inputName">
            <input  type="text" placeholder="Name*" />
          </div>
          <div className="inputEmail">
            <input type="text" id="EmailInput" placeholder="Email*" />
          </div>
          <div className="inputMessage">
            <input type="text" id="Message" placeholder="Message*" />
          </div>
          <div className="Submitbutton">
        <button class="button button1">Submit</button>
          </div>
        </div>
      </div>

        
        <div className="Year">
       <p>&copy</p>
        </div>

    </div>
    
  );
}
