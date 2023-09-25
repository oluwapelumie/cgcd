import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../assets/images/shapes/heart-2-1.png";
import welcomeImage from "../../assets/images/resources/welcome-1-1.png";
import aboutImage from "../../assets/images/shapes/about-bag-1-2.png";

const AboutTwo = () => {
  return (
    <section className="about-two pt-120 pb-120">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-two__image">
              <img src={welcomeImage} alt="" width="100%" />
              <div className="about-two__award">
                <img src={aboutImage} width="180" alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-two__content">
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" /> Christ Glory Community Development
                </p>
                <h3>Welcome to Christ Glory Community Development.</h3>
              </div>
              <p className="mb-40 pr-10">
              Christ Glory Community Development Center is a 501c(3) Organization, located at 1108 Grove Street, Irvington, NJ. We partner with
              The Food Bank of New Jersey and few individuals who purchase and donate supplies, foods and clothes to our organization. 
              </p>
              <Row>
                <Col md={6}>
                <p className="mb-40 pr-10">
                At Christ Glory Community Development Organization, our food pantry and clothes drive is one of our many services that we provide to the local community, however, it is one of the most important and impactful...
              </p>
                </Col>
                <Col md={6}>
                  <div className="about-two__box-two">
                    <i className="azino-icon-support"></i>
                    <h3>You can make a big difference in someone’s life.</h3>
                  </div>
                </Col>
              </Row>
              <Link href="/about" className="thm-btn dynamic-radius">
                Discover More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
