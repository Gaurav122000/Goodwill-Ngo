import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Footer from '../Footer/Footer';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";

const Contact = () => {
  // useStates
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  // validator
  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validatePhoneNumber = (phone) => {
    var re = /^\d{10}$/;
    return re.test(phone);
  }

  // handle submit
  const handleSubmit = async (event) => {
    // event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:3001/contact-us-form', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // This will parse the response as JSON

      console.log(data); // This will log the response data to the console

      setTimeout(() => {
        setLoading(false);
        alert("Form submitted successfully!");
      }, 3000);
    }
    catch (error) {
      console.log(error);
      setLoading(false);
      alert("An error occurred while submitting the form. Please try again."); // Show an error alert
    }
  }


  return (
    <>
      <div className='events'>
        {/* Contact Form */}
        <section className="our-blog" style={{ marginTop: "-2rem" }}>
          {/* Contact Details */}
          <div className="row contact-row no-margin">
            <div className="container">
              <div className="row">
                <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ padding: "20px" }} className="col-sm-7">
                  <h2 className="mb-4">Contact Form</h2>

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
                    <Form.Control.Feedback type="invalid">
                      Please provide your full name.
                    </Form.Control.Feedback>
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
                      isValid={email && validateEmail(email)}
                    />
                    <label htmlFor="email">Email address</label>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email.
                    </Form.Control.Feedback>
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

                      isValid={phone && validatePhoneNumber(phone)}
                    />
                    <label htmlFor="contact">Mobile Number</label>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid mobile number.
                    </Form.Control.Feedback>
                  </Form.Floating>

                  <FloatingLabel controlId="floatingSelect" label="Subject">
                    <Form.Select onChange={(e) => setSubject(e.target.value)} name='subject' id='subject' aria-label="subject" required>
                      <option value="">Select</option>
                      <option value="suggestion">Suggestion</option>
                      <option value="contact">Contact</option>
                      <option value="complaint">Complaint</option>
                      <option value="others">Others</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please select a subject.
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <br />

                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      as="textarea"
                      placeholder=""
                      onChange={(e) => setComment(e.target.value)}
                      style={{ height: '100px' }}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your comments.
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <Button className='d-block m-auto' type='submit' size='lg' variant="success" disabled={loading}>
                    {loading ? "Submitting..." : "Contact Us"}
                  </Button>
                </Form>

                <div className="col-sm-5">
                  <div style={{ margin: "50px" }} className="serv">
                    <h2 style={{ marginTop: "10px" }}>Address</h2>
                    <p>
                      Plot 20, IT Plots, ConsultIT House,TECHZONE 7,
                      <br />
                      West,Opposite Bloom International School,
                      <br />
                      Greater Noida, Uttar Pradesh 203200
                      <br />
                      Phone: +91 8009478238
                      <br />
                      Email: goodwillngo@gmail.com
                      <br />
                      Website: www.goodwillngo.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "0px" }} className="row no-margin">
            <iframe
              style={{ width: "100%" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107"
              height="450"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
