import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer/Footer';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import "./VolunteerForm.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {  toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faExclamation, faFaceSmile } from '@fortawesome/free-solid-svg-icons';


function VolunteerForm() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [contact, setContact] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [address, setAddress] = useState()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // validator
    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePhoneNumber = (number) => {
        var re = /^\d{10}$/;
        return re.test(number);
    }

    const validateAge = (age) => {
        return age >= 18 && age <= 80;
    }

    //handle submit controlling the submition
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            toast.warning(
                <div style={{fontWeight:"bold"}}>Email Alert : Enter Valid Email &nbsp;
                <FontAwesomeIcon icon={faExclamation} beat size="sm" style={{color: "#f60404",}} />
                </div>
                );
                return;
           
        }
        if (!validatePhoneNumber(contact)) {
            toast.warning(
                <div style={{fontWeight:"bold"}}> Mobile Number Alert : Number Should be of 10 digits &nbsp;
                <FontAwesomeIcon icon={faExclamation} beat size="sm" style={{color: "#f60404",}} />
                </div>
                )
                alert("")
                return;
        }
        if (!validateAge(age)) {
            toast.warning(
                <div style={{fontWeight:"bold"}}>Age Alert : Age Should be between 18 to 80 &nbsp;
                <FontAwesomeIcon icon={faExclamation} beat size="sm" style={{color: "#f60404",}} />
                </div>
                )
                return;
            
        }
        setLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:3001/volunteer-form', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, contact, age, gender, address })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // This will parse the response as JSON

            console.log(data); // This will log the response data to the console

            setTimeout(() => {
                setLoading(false);
                alert(`Form submitted successfully! ${name}`);
                navigate('/'); // Redirect to home page
            }, 2000);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
            alert("An error occurred while submitting the form. Please try again."); // Show an error alert
        }


    }


    return (
        <>
            <div className="volunteer">
                <div className="VolunteerForm">
                    <form className='form-volunteer' onSubmit={handleSubmit}>
                        <h2>Volunteer Form</h2>
                        <Form.Floating>
                            <Form.Control
                                id="name"
                                type="text"
                                placeholder=""
                                size='lg'
                                name='name'
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <label htmlFor="name">Full Name</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="email"
                                type="email"
                                placeholder=""
                                size='lg'
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="email">Email address</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="contact"
                                type="text"
                                placeholder=""
                                size='lg'
                                name='contact'
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                            <label htmlFor="contact">Mobile Number</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="age"
                                type="text"
                                placeholder=""
                                size='lg'
                                name='age'
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                            <label htmlFor="age">Age</label>
                        </Form.Floating>
                        <FloatingLabel controlId="floatingSelect" label="Select Your Gender">
                            <Form.Select onChange={(e) => setGender(e.target.value)} name='gender' aria-label="Gender" required>
                                <option>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                        </FloatingLabel>
                        <br />
                        <Form.Floating>
                            <Form.Control
                                id="address"
                                type="text"
                                placeholder=""
                                size='lg'
                                name='address'
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                            <label htmlFor="address">Address</label>
                        </Form.Floating>
                        <Button className='btn' type='submit' size='lg' variant="success" disabled={loading}>
                            {loading ? "Submitting..." : "Be a Volunteer"}
                        </Button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default VolunteerForm