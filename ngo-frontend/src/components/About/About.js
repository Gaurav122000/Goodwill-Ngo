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
          
        </div>
      </React.Fragment>
      <Footer />
    </>
  );
}

export default About;
