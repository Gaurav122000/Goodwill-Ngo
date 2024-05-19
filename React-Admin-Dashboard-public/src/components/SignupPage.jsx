import React, { useState } from 'react';
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {

  const navigate = useNavigate();

  const [adminId, setAdminId] = useState();
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await fetch('http://127.0.0.1:3001/signup-post',
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ adminId, fname, lname, email, password, confirmPassword })
        })
      // alert("Data Uploaded")
      if(data.ok){
        alert("You are successfully Registered");
        navigate('/')
      }
      else{
        if(data.status===400){
          alert("Email already Exist")
          navigate("/signup")
        }
        else if(data.status===404){
          alert("Admin Id Doesnot Match")
        }
      }




    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="mainFormContainer">
        <div className="registerForm box-shadow">
          <Container className="mt-4">
            <h1>Registration</h1>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingAdminId" label="Admin Id" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Admin Id"
                  name="id"
                  onChange={(e) => setAdminId(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={(e) => setFname(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={(e) => setLname(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FloatingLabel>
              <Button className='signup-button' variant="primary" type="submit"
                disabled={
                  (password === "")
                  ||
                  (password !== confirmPassword)
                  ||
                  (confirmPassword === "")}>
                SIGNUP
              </Button>
            </Form>
          </Container>
        </div>
        <div className="text-center mt-3">
          <p className='signup-p mb-0'>Already have an account?</p>
          <Link to="/" className='text-decoration-none'>Go to Login Page</Link>
        </div>
      </div>

    </>
  );
}

export default SignupPage;
