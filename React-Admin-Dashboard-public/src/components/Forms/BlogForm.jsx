import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import "./Forms.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {

  const navigate = useNavigate();

  const [name , setName] = useState()
  const [title , setTitle] = useState()
  const [img , setImg] = useState()
  const [blog , setBlog] = useState()
 
  

  const handleSubmit = async (event) => {
    
    try { 
      const data = await fetch('http://127.0.0.1:3001/blog-post',
      { method: "POST",
       headers: { "Content-Type": "application/json" }, 
       body: JSON.stringify({ name , title ,img , blog }) 
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
          <h1>Blog Form</h1>
            <div className="blogForm">
              
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-2 " controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name='name' onChange={(e) => setName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" name='title' onChange={(e)=>setTitle(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="img">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control type='url' placeholder="Image Link" name='img' onChange={(e) => setImg(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="blog">
                    <Form.Label>Blog</Form.Label>
                    <Form.Control name='blog' type='text' as="textarea" placeholder='Write Your Blog' rows={3} onChange={(e)=>setBlog(e.target.value)} />
                  </Form.Group>
                  <Button className='d-block m-auto mt-3' type='submit' variant="success">Upload Blog</Button>
                </Form>
              
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default BlogForm