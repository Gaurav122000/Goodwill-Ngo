import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";

function Footer() {
  return (
    <div>
      {/* ************************* Footer Starts Here ************************** */}

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h2>About Us</h2>
              <p>
                Smart Eye is a leading provider of information technology,
                consulting, and business process services. Our dedicated
                employees offer strategic insights, technological expertise and
                industry experience.
              </p>
              <p>
                We focus on technologies that promise to reduce costs,
                streamline processes and speed time-to-market, Backed by our
                strong quality processes and rich experience managing global...{" "}
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
                Plot 20, IT Plots, ConsultIT House, TECHZONE 7, West, opposite
                Bloom International School, Greater Noida, Uttar Pradesh 20320<br />
                {/* BlueDart <br />
                            Marthandam (K.K District) <br />
                            Tamil Nadu, IND <br /> */}
                        
                Phone:{""}
                <a href="/">+91-9810266776<br /></a>
                Email:{" "}
                <a href="#" className="">
                info@connectingit.in
                </a>
                <br />
                {/* Web:{" "}
                <a href="smart-eye.html" className="">
                  www.bluedart.in
                </a> */}
              </address>
              <div className="donate-link col-md-3">
                <a href="/" className="btn btn-primary ">
                  <span className="btn-title"><a href="/donation">Donate Now</a></span>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="nav-box row clearfix">
                    <div className="inner col-md-9 clearfix">
                        <ul className="footer-nav clearfix">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
    
                      
                    </div>
                      <div className="donate-link col-md-3"><a href="donate.html" className="btn btn-primary "><span className="btn-title">Donate Now</span></a></div>
                </div> */}
        </div>
      </footer>
      <div className="copy">
        <div className="container">
          <a href="https://www.smarteyeapps.com/">
            2015 &copy; All Rights Reserved | Designed and Developed by
            Smarteyeapps
          </a>

          <span>
            <a>
              <i className="fab fa-facebook-square"></i>
            </a>
            <a>
              <i className="fab fa-instagram"></i>
            </a>
            <a>
              <i className="fab fa-linkedin"></i>
            </a>
            <a>
              <i className="fab fa-whatsapp"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
