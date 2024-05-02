import React from 'react';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";
import Footer from '../Footer/Footer';
import AboutCharity from "./AboutCharity"

function About() {
  return (
    <>
      <React.Fragment>
        <div className='events'>
          {/* About Us Section */}
          <AboutCharity />

          {/* Mission Vision Section */}
          <section className="container-fluid mission-vision">
            <div className="container">
              <div className="row mission">
                <div className="col-md-6 mv-det">
                  <h1>Our Mission</h1>
                  <p style={{ fontSize: "19px", textAlign: "justify" }}>Our mission is to alleviate poverty, empower marginalized communities, and promote sustainable development through education, healthcare, and livelihood initiatives, creating a more equitable and just society for all.</p>
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
                  <p style={{ fontSize: "19px", textAlign: "justify" }}>Our vision is a world where every person has the opportunity to fulfill their potential, where poverty and inequality are eradicated, and where communities thrive in harmony with their environment, creating a brighter future for generations to come.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
      <Footer />
    </>
  );
}

export default About;
