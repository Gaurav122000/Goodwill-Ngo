import React from 'react'
import Sidebar from '../Sidebar'
import "./Upload.css"
import UploadCard from "./UploadCard"


const Upload = () => {
  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <div className="upload-container">
            <h1 style={{marginTop:"4rem"}}>Upload Data</h1>
            <div className="Upload">
              <UploadCard title={"Upload Blog"} 
              bgColor={"linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)"} 
              bxShadow={"0px 10px 20px 0px #F9D59B"} 
              link={"/BlogForm"} 
              />
              <UploadCard title={"Upload Gallery"} 
              bgColor={"linear-gradient(180deg, #FF919D 0%, #FC929D 100%)"} 
              bxShadow={"0px 10px 20px 0px #FDC0C7"} 
              link={"/GalleryForm"} />
              {/* <UploadCard title={"Upload "} bgColor={"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)"} bxShadow={"0px 10px 20px 0px #e0c6f5"} value={"Hello"}/> */}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Upload;