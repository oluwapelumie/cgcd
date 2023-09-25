import React from "react";
import { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../assets/images/shapes/heart-2-1.png";

const VolunteerForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDateOfBirth] = useState('')
  const [message, setMessage] = useState('')
  const [address, setAddress] = useState('')
  const [occupation, setOccupation] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {

    let formElement = e.target;
  
    if (formElement instanceof HTMLFormElement) {
      formElement.reset();
    }
  
    console.log('Sending');
  
    let data = {
      name,
      email,
      phone,
      date,
      message,
      address,
      occupation
    };
  
    fetch('api/volunteer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setDateOfBirth('');
        setMessage('');
        setAddress('');
        setOccupation('');
        // setBody('');
        // Refresh the form here
        e.target.reset();
      }
    })
  }

  return (
    <section className="become-volunteer pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="become-volunteer__content mb-40">
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" />
                  Join Us Now
                </p>
                <h3>
                  Register yourself as <br /> our Food Pantry Volunteer.
                </h3>
              </div>
              <p className="block-text mb-40 pr-10">
              Qualifications for Food Pantry Volunteers{" "}
              </p>
              <ul className="list-unstyled ul-list-one">
                <li>Participate in an orientation and training.</li>
                <li>Greet all customers and ensure they have a positive shopping experience.</li>
                <li>Effectively address customer questions, requests, and problem solve as needed.</li>
                <li>Keep all shelves organized, clean, well-stocked, and properly rotated.</li>
                <li>Assist food pantry staff by bagging bread, fresh produce, and other food items delivered.</li>
                <li>Accept and unload food truck deliveries from local businesses and partners.</li>
                <li>Ensure work station provided is clean and debris free at the end of the shift.</li>
                <li>Foster a positive work environment of outstanding teamwork, mutual respect, and's effective communication.</li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <form className="contact-form-validated become-volunteer__form form-one mb-40">
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    onChange={(e)=>{setName(e.target.value)}}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="sr-only">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="sr-only">
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    onChange={(e)=>{setPhone(e.target.value)}}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="date-of-birth" className="sr-only">
                    date of birth
                  </label>
                  <input
                    type="text"
                    name="date"
                    id="date-of-birth"
                    placeholder="Date of Birth"
                    onChange={(e) => {setDateOfBirth(e.target.value);}}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="address" className="sr-only">
                    address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    onChange={(e)=> setAddress(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="occupation" className="sr-only">
                    occupation
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    id="occupation"
                    placeholder="Occupation"
                    onChange={(e)=> setOccupation(e.target.value)}
                  />
                </div>
                <div className="form-control form-control-full">
                  <label htmlFor="message" className="sr-only">
                    message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write a Message"
                    onChange={(e)=>{setMessage(e.target.value)}}
                  ></textarea>
                </div>
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn " onClick={(e)=>{handleSubmit(e)}}>
                    Register Now
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VolunteerForm;