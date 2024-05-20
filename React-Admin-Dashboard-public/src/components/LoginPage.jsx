import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"


const Login = () => {

    const navigate = useNavigate();



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [forgotPassword, setForgotPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:3001/login-post',
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                })

                const data = await response.json();
            
            console.log(data,"userRegister");

            if (response.ok) {
                alert("Login Successfull")
                window.localStorage.setItem("token",data.data)
                navigate("/app");
                // window.localStorage.setItem("loggedIn" , true)
                // console.log(data.data);
                

            } else {
                if (response.status === 404) {
                    alert("User Not Exist")
                    navigate("/signup")
                }
                else {
                    alert("Username or Password is Incorrect ! Try Again :>")
                    navigate("/");
                }
            }
        }
        catch (error) {
            console.log(error);
        }



        // Handle the login logic here
        // console.log('Email:', email);
        // console.log('Password:', password);
        // console.log('Forgot Password:', forgotPassword);
    };




    return (
        <>
            <div className="login-page">
                <Container className="d-flex justify-content-center align-items-center min-vh-100 w-50">
                    <Row className="w-100">
                        <Col md={{ span: 6, offset: 3 }}>
                            <div className="box-shadow p-4">
                                <h2 className='text-center md-2'>Login</h2>
                                <Form onSubmit={handleLogin} >
                                    <Form.Group controlId="Email" className="mb-3">
                                        <Form.Label>Enter Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formPassword" className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicCheckbox" className="mb-3">
                                        <Form.Check
                                            type="checkbox"
                                            label="Forgot Password"
                                            checked={forgotPassword}
                                            onChange={(e) => setForgotPassword(e.target.checked)}
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="w-100">
                                        Log In
                                    </Button>
                                </Form>
                            </div>
                            <div className="text-center mt-3">
                                <p className='signup-p mb-0'>Don't have an Account yet?</p>
                                <Link to="/signup" className='text-decoration-none'>Create an account</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Login;