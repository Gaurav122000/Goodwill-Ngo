import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Footer from '../Footer/Footer';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import './Form.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faExclamation, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert';


const DonationForm = () => {
  // useStates for getting the data 
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const [donation, setDonation] = useState()
  const [amount, setAmount] = useState()
  const [choice, setUserChoice] = useState()
  const [pickup, setPickupChoice] = useState()
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //validator
  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validatePhoneNumber = (number) => {
    var re = /^\d{10}$/;
    return re.test(number);
  }

  //handle submit controlling the submition
  const handleSubmit = async (event) => {
    event.preventDefault();
    // checking the validation
    if (!validateEmail(email)) {
      toast.warning(
      <div style={{fontWeight:"bold"}}>Email Alert : Enter Valid Email &nbsp;
      <FontAwesomeIcon icon={faExclamation} beat size="sm" style={{color: "#f60404",}} />
      </div>
      );
      return;
    }
    if (!validatePhoneNumber(phone)) {
      toast.warning(
        <div style={{fontWeight:"bold"}}> Mobile Number Alert : Number Should be of 10 digits &nbsp;
        <FontAwesomeIcon icon={faExclamation} beat size="sm" style={{color: "#f60404",}} />
        </div>
        )
      return;
    }

    // sending data
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:3001/donation-form', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, address, donation, amount, choice, pickup })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // This will parse the response as JSON

      console.log(data); // This will log the response data to the console

      setTimeout(() => {
        setLoading(false);
        alert("Form submitted successfully!");
        navigate('/'); // Redirect to home page
      }, 3000);
    }
    catch (error) {
      toast.error("Something Went Wrong.Please Try Again!")
      console.log(error);
      setLoading(false);
      alert("An error occurred while submitting the form. Please try again."); // Show an error alert
    }

  }

  //For quantity
  const minQuantity = (e) => {
    setPickupChoice(e.target.value);
  }

  const handleQuantity = (event) => {
    if (pickup < 15) {
      toast.warning(
        <div style={{fontWeight:"bold"}}> Quantity Alert : Quantity Should be more then 15 &nbsp;
        <FontAwesomeIcon icon={faExclamation} beat size="sm" style={{color: "#f60404",}} />
        </div>
        )
      event.preventDefault();
    }
    else {
      toast.success(
        <div style={{fontWeight:"bold"}}>
          Form submitted successfully! &nbsp;
          <FontAwesomeIcon icon={faFaceSmile} beat style={{color: "#FFD43B",}} />
        </div>
      );
      // navigate("/NextPage")
    }
  }


  //For making choices in books ,clothes , shoes(pickup or courier)
  const handleChoice = (e) => {
    setUserChoice(e.target.value)
  }


  const [mAmnt, setMinAmnt] = useState(0)
  const minAmnt = (eventMin) => {
    var amnt = eventMin.target.value;
    setMinAmnt(amnt)
    setAmount(amnt);

  }

  const [showhide, setShowHide] = useState("")



  const handleOnchange = (event) => {
    let value = event.target.value;
    setShowHide(value);
    setDonation(value);
    if (value !== "money") {
      setAmount(0); // Reset the amount state if donation type is not 'money'
    }
  }

  const handleMinAmount = (event) => {

    if (showhide === "money" && mAmnt <= 250) {
      toast.warning(
        <div style={{fontWeight:"bold"}}> Money Alert : Money Should be More then 250 &nbsp;
        <FontAwesomeIcon icon={faExclamation} beat size="sm" style={{color: "#f60404",}} />
        </div>
        )
      event.preventDefault(); // This will prevent the form from being submitted

    }

  }

  return (
    <>
      <div className="donation">
        <div className="form-donation">
          <form id="donationForm" onSubmit={handleSubmit}>
            <h2>Donation Form</h2>
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
                id="phone"
                type="number"
                placeholder=""
                size='lg'
                name='phone'
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label htmlFor="contact">Mobile Number</label>
            </Form.Floating>
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

            <FloatingLabel controlId="floatingSelect" label="Select the donation">
              <Form.Select onChange={handleOnchange} name='donation' id='donation' aria-label="Gender">
                <option value="Select">Select</option>
                <option value="books">Books</option>
                <option value="clothes">Clothes</option>
                <option value="money">Money</option>
                <option value="shoes">Shoes</option>
              </Form.Select>
            </FloatingLabel>
            <br />
            {
              showhide === "money" && (
                <div className="amount">
                  <Form.Floating>
                    <Form.Control
                      id="amount"
                      type="number"
                      placeholder=""
                      size='lg'
                      name='amount'
                      onChange={minAmnt}
                    />
                    <label htmlFor="Amount">Amount</label>
                  </Form.Floating>
                  <Button className='btn' id="submitButton" type='submit' size='lg' variant="success" disabled={loading} onClick={(event) => handleMinAmount(event)}>
                    {loading ? "Payment Gateway..." : "Make Payment"}
                  </Button>
                </div>
              )
            }

            {
              (showhide === "books" || showhide === "clothes" || showhide === "shoes") &&
              (
                <>
                  <FloatingLabel controlId="floatingSelect" label="Choose a Service">
                    <Form.Select onChange={handleChoice} name='choice' id='donation' aria-label="service">
                      <option value="Select">Select</option>
                      <option value="pickup">Pickup</option>
                      <option value="courier">Courier</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br />

                  {
                    choice === "pickup" && (
                      <>
                        <Form.Floating>
                          <Form.Control
                            id="pickup"
                            type="number"
                            placeholder=''
                            size='lg'
                            name='pickup'
                            onChange={minQuantity}
                          />
                          <label htmlFor="quantity">Quantity</label>
                        </Form.Floating>
                        <Button className='btn' id="submitButton" type='submit' size='lg' variant="success" disabled={loading} onClick={handleQuantity}>
                          {loading ? "Submiting..." : "Submit"}
                        </Button>
                      </>
                    )
                  }

                  {
                    choice === "courier" && (
                      <>
                        <Button className='btn' id="submitButton" type='submit' size='lg' variant="success" disabled={loading}>
                          {loading ? "Submiting..." : "Submit"}
                        </Button>
                      </>
                    )
                  }
                </>
              )
            }
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DonationForm