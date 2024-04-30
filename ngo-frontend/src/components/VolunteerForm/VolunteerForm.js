import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer/Footer';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import "./VolunteerForm.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


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
            alert("Invalid email format");
            return;
        }
        if (!validatePhoneNumber(contact)) {
            alert("Invalid phone number format");
            return;
        }
        if (!validateAge(age)) {
            alert("Invalid age. Age should be between 18 and 100");
            return;
        }
        setLoading(true);
        try {
            await fetch('http://127.0.0.1:3001/volunteer-form', { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, contact, age, gender, address }) })
            // console.log(data); 
            setTimeout(() => {
                setLoading(false);
                alert("Form submitted successfully!");
                navigate('/'); // Redirect to home page
            }, 3000);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
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
                            />
                            <label htmlFor="age">Age</label>
                        </Form.Floating>
                        <FloatingLabel controlId="floatingSelect" label="Select Your Gender">
                            <Form.Select onChange={(e) => setGender(e.target.value)} name='gender' aria-label="Gender">
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