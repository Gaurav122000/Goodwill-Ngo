import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
// import Footer from '../Footer/Footer';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.css";
import Footer from '../Footer/Footer';
import Button from "react-bootstrap/esm/Button";


const Contact = () => {
  // useStates
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setContact] = useState()
  const [subject,setSubject] = useState()
  const [message, setComment] = useState()
  const [loading, setLoading] = useState(false);

  // validator
  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validatePhoneNumber = (number) => {
    var re = /^\d{10}$/;
    return re.test(number);
  }
  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert("Invalid email format");
      return;
    }
    if (!validatePhoneNumber(phone)) {
      alert("Invalid phone number format");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:3001/contact-us-form', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone , subject , message })
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
        {/* <div className="events"> */}
        {/* <div className="page-nav no-margin row">
        <div className="container">
          <div className="row">
            <h2>Our Contact</h2>
            <ul>
              <li>
                <a href="/">
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li>  <a href="/contact">
                <i className="fas fa-angle-double-right"></i> Contact
              </a></li>
            </ul>
          </div>
        </div>
      </div> */}

        {/* Contact Form */}
        <section className="our-blog" style={{marginTop:"-2rem"}}>


          {/* Contact Details */}
          <div className="row contact-row no-margin">
            <div className="container">
              <div className="row">

                <form style={{ padding: "20px" }} className="col-sm-7" onSubmit={handleSubmit}>
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
                      id="subject"
                      type="text"
                      placeholder=""
                      size='lg'
                      name='subject'
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <label htmlFor="subject">Subject</label>
                  </Form.Floating>


                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      as="textarea"
                      placeholder=""
                      onChange={(e) => setComment(e.target.value)}
                      style={{ height: '100px' }}
                    />
                  </FloatingLabel>

                  <Button className='d-block m-auto' type='submit' size='lg' variant="success" disabled={loading}>
                    {loading ? "Submitting..." : "Contact-Us"}
                  </Button>
                </form>

                <div className="col-sm-5">
                  <div style={{ margin: "50px" }} className="serv">
                    <h2 style={{ marginTop: "10px" }}>Address</h2>
                    <p>
                      Antonya Street,
                      <br />
                      23/H-2, Building,
                      <br />
                      TA, AUS District
                      <br />
                      Phone: +91 9159669599
                      <br />
                      Email: support@smarteyeapps.com
                      <br />
                      Website: www.smarteyeapps.com
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
