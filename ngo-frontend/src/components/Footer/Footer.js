import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h2>About Us</h2>
              <p>
              Goodwill NGO, as the name suggests, carries a sense of positivity and benevolence. The name itself evokes a feeling of trust and warmth, making it inviting for people to engage with and support the organization's mission.
              </p>
              <p>
              Your support is crucial to our mission. By donating to GoodWill NGO, you become a part of something bigger — a movement of kindness and generosity that's changing lives one child at a time. {" "}
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h2>Useful Links</h2>
              <ul className="list-unstyled link-list">
                <li>
                  <a href="/">Home</a>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <a href="/about">About us</a>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <a href="/services">Services</a>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                  <i className="fa fa-angle-right"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12 map-img">
              <h2>Contact Us</h2>
              <address className="md-margin-bottom-40">
                Plot 20, IT Plots, ConsultIT House, TECHZONE 7, West, Opposite
                Bloom International School, Greater Noida, Uttar Pradesh ,203200
                <br />      
                Phone:{" +91 8009478238"}
                <br />
                Email:{" goodwillngo@gmail.com"}
                <br />
              </address>
              <div className="donate-link col-md-3">
                <a href="/" className="btn btn-primary ">
                  <span className="btn-title"><a href="/donation">Donate Now</a></span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
      <div className="copy">
        <div className="container">
          <a href="/">
            2024 &copy; All Rights Reserved | Designed and Developed by
            ConsultIT Pvt. Ltd.
          </a>

          <span>
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href='https://www.instagram.com'>
              <i className="fab fa-instagram"></i>
            </a>
            <a href='https://www.linkedin.com/'>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href='https://web.whatsapp.com'>
              <i className="fab fa-whatsapp"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
