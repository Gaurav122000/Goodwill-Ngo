import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
// import Navbar from './components/Navbar';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";

function Gallery() {

  const [gallery, setGallery] = useState([]);

  const [imgType , setImgType] = useState("all")

  useEffect(() => {
    fetch('http://localhost:3001/gallery')
      .then(response => response.json())
      .then(data => setGallery(data));
  }, []);


  return (
    <>
      <div className='events'>
        <div className="container">
          <div className="gallery-filter d-none d-sm-block p-2">
            <button
              value="all"
              className="btn btn-default filter-button m-1"
              data-filter="all"
              onClick={(e)=>setImgType(e.target.value)}
            >
              All
            </button>
            <button
              value="education"
              className="btn btn-default filter-button m-1"
              data-filter="education"
              onClick={(e)=>setImgType(e.target.value)}
            >
              Education
            </button>
            <button
              value="food"
              className="btn btn-default filter-button m-1"
              data-filter="food"
              onClick={(e)=>setImgType(e.target.value)}
            >
              Food Donation
            </button>
            <button
              value="healthcare"
              className="btn btn-default filter-button m-1"
              data-filter="healthcare"
              onClick={(e)=>setImgType(e.target.value)}
            >
              {" "}
              HealthCare
            </button>
            <button
              value="essentials"
              className="btn btn-default filter-button m-1"
              data-filter="essentials"
              onClick={(e)=>setImgType(e.target.value)}
            >
             Essentials Donation 
            </button>
          </div>
          <br />
          <div className="row">
            {gallery.filter((data)=>{
              if(imgType === "all"){
                return data.tag
              }
              else{
                return imgType === data.tag
              }
            }).map((data => {
              return (
                <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe">
                  <img src={data.img} alt="Images" />
                </div>
              )
            }))}
          </div>
        </div>
        {/* </section> */}
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
