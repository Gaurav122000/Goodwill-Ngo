import React from 'react';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearchDollar, faDonate, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <React.Fragment>
      <div className='events'>
      {/* About Us Section */}
      <div className="about-us container-fluid">
        <div className="container">
          <div className="row natur-row no-margin w-100">
            <div className="text-part col-md-6">
              <h2>About Our Charity</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius faucibus ligula non congue. Suspendisse at pretium massa, sit amet vulputate nibh. Nam posuere eros dolor. Donec vel arcu sagittis, pretium nisl.</p>
              <p>Cras faucibus laoreet nibh, sit amet tincidunt leo mollis in. Etiam eu mauris metus. Nulla facilisi. Etiam vestibulum, nisi et convallis elementum, leo orci aliquam metus, id posuere massa neque vitae arcu.</p>
              <p>Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien, eget tempor justo. Aenean porttitor nibh metus, sollicitudin egestas metus posuere et. Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit amet tellus posuere, at malesuada sem gravida. Integer maximus ultricies augue, at dapibus elit bibendum consequat. Cras faucibus tellus eleifend, fermentum purus in, dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida vestibulum, urna justo posuere ante, id pretium massa arcu sed mi. Nunc a sollicitudin sem. Duis tempus.</p>
            </div>
            <div className="image-part col-md-6">
              <div className="about-quick-box row">
                <div className="col-md-6">
                  <div className="about-qcard">
                    <FontAwesomeIcon icon={faUser} style={{height:"50px",color:"#42d288"}}/>
                    <p>Become a Volunteer</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-qcard">
                    <FontAwesomeIcon icon={faSearchDollar} className="red" style={{height:"50px"}} />
                    <p>Quick Fundraise</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-qcard">
                    <FontAwesomeIcon icon={faDonate} className="yell"style={{height:"50px"}} />
                    <p>Give Donation</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-qcard">
                    <FontAwesomeIcon icon={faHandsHelping} className="blu" style={{height:"50px"}} />
                    <p>Help Someone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Vision Section */}
      <section className="container-fluid mission-vision">
        <div className="container">
          <div className="row mission">
            <div className="col-md-6 mv-det">
              <h1>Our Mission</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.</p>
            </div>
            <div className="col-md-6 mv-img">
            <img src="/images/misin.jpg" alt="Child Education in Africa" />
            </div>
          </div>
          <div className="row vision">
            <div className="col-md-6 mv-img">
            <img src="/images/vision.jpg" alt="Child Education in Africa" />
            </div>
            <div className="col-md-6 mv-det">
              <h1>Our Vision</h1>
              <p>Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat vel augue eget, iaculis tristique dui.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </div>
    </React.Fragment>
  );
}

export default About;
