import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import "./Forms.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Navigate, useNavigate } from 'react-router-dom';

const GalleryForm = () => {

  const [tag, setTag] = useState();
  const [img, setImage] = useState();

  // const Navigate = useNavigate();

  const handleSubmit = async (event) => {
    
    try { 
      const data = await fetch('http://127.0.0.1:3001/gallery-post',
      { method: "POST",
       headers: { "Content-Type": "application/json" }, 
       body: JSON.stringify({ tag , img }) 
      })
      alert("Data Uploaded")
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <div className="main">
            <h1>Gallery Form</h1>
            <div className="galleryForm">  
              <Form onSubmit={handleSubmit}>
                <Form.Label>Tag</Form.Label>
                <Form.Select className='mb-3' aria-label="tag" onChange={(e) => setTag(e.target.value)}>
                  <option>Choose Your Image Type</option>
                  <option value="education">Education</option>
                  <option value="food">Food Donation</option>
                  <option value="healthcare">HealthCare</option>
                  <option value="essentials">Essentials Donation</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="img">
                  <Form.Label>Image Url</Form.Label>
                  <Form.Control type="url" placeholder='https://www.website.com' name='img' onChange={(e) => setImage(e.target.value)} />
                </Form.Group>
                <Button type='submit' className='d-block m-auto mt-3' variant="success">Upload Image</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GalleryForm;