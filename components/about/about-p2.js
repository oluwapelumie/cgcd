import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import aboutImage02 from "../../assets/images/resources/about-02.jpg";
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
    <section className=" pt-120">
      <Container>
        <Row>
                    <Col lg={6}>
            <div className="about-counter__image clearfix">
              {/* <div className="about-counter__image-content">
                <img src={aboutHeart} alt="" />
                <p>We’re here to support you every step of the way.</p>
              </div> */}
              <img src={aboutImage02} alt="" className="float-right" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="block-title">
              <p>
                {/* <img src={heartImage} width="15" alt="" /> */}
                Food Pantry Coordinator
              </p>
              <h3>
              Mrs. Musu Shodeinde
              </h3>
            </div>
            <p className="about-counter__text">
            Mrs. Musu Shodeinde has been an active member of Christ Glory Community Development since the onset of the program and has a commitment to helping those in the community.<br/><br/>{" "}
            Driven by love and passion, she is ever ready to sacrifice her time to ensure the consistency and moving forward of the Food Pantry Program.{" "}
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
        </Row>
      </Container>
    </section>
  );
};

export default AboutCounter;