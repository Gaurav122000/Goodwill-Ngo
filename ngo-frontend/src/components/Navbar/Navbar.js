import React, { useState } from 'react';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

function Navbar() {

  const [activeButton1 , setActiveButton1] = useState(false)
  const [activeButton2 , setActiveButton2] = useState(false)

  const handleButtonClick1 = () => {
    setActiveButton1(true);
    setActiveButton2(false);
  }
  const handleButtonClick2 = () => {
    setActiveButton1(false);
    setActiveButton2(true);
  }
  console.log(activeButton1);
  console.log(activeButton2);

  // Style for active button
  const activeStyle = {
    backgroundColor: 'green',
    color: 'white',
  };

  // Style for inactive button
  const inactiveStyle = {
    backgroundColor: '',
    color: ''
  };



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
                <button className="btn btn-md btn-default btn-outline-success"
                  onClick={() => handleButtonClick1()}
                  style={activeButton1 ? activeStyle : inactiveStyle}
                >
                  <Link to='/VolunteerForm'>
                    Be a Volunteer
                  </Link>
                </button>
                <button className="btn btn-md btn-default btn-outline-success"
                  onClick={() => handleButtonClick2()}
                  style={activeButton2 ? activeStyle : inactiveStyle}
                >
                  <Link to="/donation">
                  Donate
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header id="menu-jk" className="header-bottom sticky-top" >
        <div className="container">
          <div className="row nav-row">
            <div className="col-lg-3 col-md-12 logo">
              <Link to="/">
                <img src="./images/logo.jpg" alt="" />
              </Link>
              <a data-toggle="collapse" data-target="#menu" href="#menu"><i className="fas d-block d-lg-none small-menu fa-bars"></i></a>
            </div>
            <div id="menu" className="col-lg-9 col-md-12 d-none d-lg-block nav-col">
              <ul className="navbad">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact US</Link>
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
