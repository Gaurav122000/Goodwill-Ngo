import React from 'react';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";

// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="container-fluid ">
        <div className="header-top ">
          <div className="container ">
            <div className="row col-det">
              <div className="col-lg-6 d-none d-lg-block">
                <ul className="ulleft">
                  <li>
                    <i className="far fa-envelope"></i>
                    sales@smarteyeapps.com
                    <span>|</span>
                  </li>
                  <li>
                    <i className="fas fa-phone-volume"></i>
                    +876 987 666 5433
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 folouws">
                <ul className="ulright">
                  <li> <small>Follow Us</small>:</li>
                  <li>
                    <i className="fab fa-facebook-square"></i>
                  </li>
                  <li>
                    <i className="fab fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fab fa-linkedin"></i>
                  </li>
                  <li>
                  <i className="fab fa-whatsapp"></i>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 d-none d-md-block col-md-6 btn-bhed">
                <button className="btn btn-sm btn-success"><a href='/VolunteerForm'>Be a Volunteer</a></button>
                <button className="btn btn-sm btn-default"><a href='/donation'>Donate</a></button>
              </div>
            </div>
          </div>
        </div>
        </header>
        <header id="menu-jk" className="header-bottom sticky-top" >
          <div className="container">
            <div className="row nav-row">
              <div className="col-lg-3 col-md-12 logo">
                <a href="/">
                <img src="./images/logo.jpg" alt="" />
                </a>
                <a data-toggle="collapse" data-target="#menu" href="#menu"><i className="fas d-block d-lg-none small-menu fa-bars"></i></a>
              </div>
              <div id="menu" className="col-lg-9 col-md-12 d-none d-lg-block nav-col">
                <ul className="navbad">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/gallery">Gallery</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/blog">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact US</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        {/* </div>  */}
      </header>
    </>
  );
}

export default Navbar;
