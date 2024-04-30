import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
// import Footer from "./components/Footer";
import Blog from "./components/Blog/Blog";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Home from "./components/Home";
import Contact from "./components/Contact/Contact";
import Donation from "../src/components/DonationForm/Form"
import VolunteerForm from "../src/components/VolunteerForm/VolunteerForm"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> 
        {/* <Route path="/footer" element={<Footer/>} />  */}
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/donation" element={<Donation />} /> 
        <Route path="/volunteerForm" element={<VolunteerForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
