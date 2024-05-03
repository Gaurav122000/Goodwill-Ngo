import React from 'react';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearchDollar, faDonate, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <React.Fragment>
      <div className="about-us container-fluid">
        <div className="container">
          <div className="row natur-row no-margin w-100">
            <div className="text-part col-md-6">
              <h2>About Our NGO</h2>
              <p>Goodwill NGO, as the name suggests, carries a sense of positivity and benevolence. The name itself evokes a feeling of trust and warmth, making it inviting for people to engage with and support the organization's mission.</p>
              <p>The name "Goodwill NGO" not only reflects the organization's commitment to doing good but also communicates its professional and structured approach to charitable work. It suggests that the organization operates with integrity, transparency, and a clear sense of purpose in its endeavors to make the world a better place.</p>
              <p>Your support is crucial to our mission. By donating to [NGO Name], you become a part of something bigger—a movement of kindness and generosity that's changing lives one child at a time. Your contributions help us expand our reach, provide more essentials, and create brighter futures for children in need.</p>
            </div>
            <div className="image-part col-md-6">
              <div className="about-quick-box row">
                <div className="col-md-6 ">
                  <a href="/volunteerForm">
                    <div className="about-qcard">
                      <FontAwesomeIcon icon={faUser} style={{ height: "50px", color: "#42d288" }} />
                      <p>Become a Volunteer</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="/donation">
                    <div className="about-qcard">
                      <FontAwesomeIcon icon={faSearchDollar} className="red" style={{ height: "50px" }} />
                      <p>Quick Fundraise</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="/donation">
                    <div className="about-qcard">
                      <FontAwesomeIcon icon={faDonate} className="yell" style={{ height: "50px" }} />
                      <p>Give Donation</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="/donation">
                    <div className="about-qcard">
                      <FontAwesomeIcon icon={faHandsHelping} className="blu" style={{ height: "50px" }} />
                      <p>Help Someone</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
