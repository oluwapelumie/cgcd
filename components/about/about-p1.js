import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import aboutImage01 from "../../assets/images/resources/about-01.jpg";
import aboutHeart from "../../assets/images/shapes/about-count-heart-1-1.png";

const AboutCounter = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="about-counter pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="block-title">
              <p>
                {/* <img src={heartImage} width="15" alt="" /> */}
                Program Director
              </p>
              <h3>
              Pastor Dr. (Mrs) Oluwashola<br />
              Idowu-Adedeji
              </h3>
            </div>
            <p className="about-counter__text">
            Pastor Dr. (Mrs) Oluwashola Adedeji has a passion helping those around her, the less privileged, youths & is a motivational speaker.<br />{" "}
            Presently, she is the Program Director at Christ Glory Development Organization.<br />{" "}
            In addition to her many talents, her special mandate for the Women of Virtue Outreach Worldwide is to empower, motivate, educate and inspire women.<br/>{" "}
            For the past 12 years, she has been sponsoring and funding empowerment programs in Nigeria and other developing Nations for ouths, widows, and the elderly.<br/>{" "}
            In addition to her numerous degrees, she received an Honorary Doctor of Divinity and Chaplaincy from Global Oved Dei Seminary University (GODSU), affiliated with United Nations.{" "}
            </p>
            {/* <div className="about-counter__count">
              <h3 className="odometer">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 8860 : 0} />
                </VisibilitySensor>
              </h3>
              <p>
                Donation campaigns <br /> are running
              </p>
            </div> */}
          </Col>
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              {/* <div className="about-counter__image-content">
                <img src={aboutHeart} alt="" />
                <p>We’re here to support you every step of the way.</p>
              </div> */}
              <img src={aboutImage01} alt="" className="float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCounter;