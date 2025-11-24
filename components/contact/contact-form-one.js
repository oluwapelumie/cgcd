import React from "react";
import { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";

const ContactFormOne = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
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
      subject,
      message
    };
  
    fetch('api/contact', {
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
        setSubject('');
        setMessage('');
        // setBody('');
        // Refresh the form here
        e.target.reset();
      }
    })
  }

  return (
    <section className="contact-page pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="contact-page__content mb-40">
              <BlockTitle
                title={`You Can Talk to Someone no matter what the challenge is.`}
                tagLine="Contact With Us"
              />
              <p className="block-text mb-30 pr-10">
              There are competent & Spirit filled Counsellors, Pastors
              & Ministers willing to speak with you at any time. Don't keep it all in,
              speak to someone now.{" "}
              </p>
              <div className="footer-social black-hover">
                {/* <a href="#" aria-label="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#" aria-label="pinterest">
                  <i className="fab fa-pinterest-p"></i>
                </a> */}
                <a href="https://instagram.com/cgim_gracechapel" aria-label="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <form className="contact-form-validated contact-page__form form-one mb-40">
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    Name
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
                  <label htmlFor="subject" className="sr-only">
                    subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    onChange={(e)=>{setSubject(e.target.value)}}
                  />
                </div>
                <div className="form-control form-control-full">
                  <label htmlFor="message" className="sr-only">
                    message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write a Message"
                    id="message"
                    onChange={(e)=>{setMessage(e.target.value)}}
                  ></textarea>
                </div>
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn " onClick={(e)=>{handleSubmit(e)}}>
                    Submit Message
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

export default ContactFormOne;
