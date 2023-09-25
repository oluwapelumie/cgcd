import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about1 from "../../assets/images/shapes/about-bag-1-1.png";
import about2 from "../../assets/images/resources/about-1-1.jpg";
import about3 from "../../assets/images/resources/about-1-2.jpg";
import heart from "../../assets/images/shapes/heart-2-1.png";

const AboutOne = () => {
  return (
    <section className="about-one pt-120 pb-40">
      <Container>
        <Row>
          <div className="about-one__award">
            <img src={about1} width="151" alt="" />
          </div>
          <Col lg={6}>
            <img src={about2} alt="" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <img src={about3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={4}>
              <div className="block-title">
                {/* <p>
                  <img src={heart} width="15" alt="" />
                  Christ Glory
                </p> */}
                <h3>Christ Glory Community Development Center</h3>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text">
              is a 501c(3) Organization, located at 1108 Grove Street, Irvington, NJ. We partner with The Food Bank of New
              Jersey and few individuals who purchase and donate supplies, foods and clothes to our organization.
              <br/>
              <br/>
              At Christ Glory Community Development Organization, our food pantry and clothes drive is one of our many services that we provide to the local community, however,
              it is one of the most important and impactful. We serve a diverse population, not limited to low income families, single parents, senior citizens,
              unemployed individuals, disabled veterans, working poor, and anyone else in need of food our assistance. 
              </p>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text">
              Our food pantry provides quality food items to households experiencing food insecurity.
              Clothing items are an offered at our food pantry for those with a need.
              This program supplies critical nutrition to hungry individual
               and families. Populations this program serves is anyone in need all ages.
               The coverage areas for the program are Essex County and parts of  Union County.
              </p>
              <br/>
              <p className="team-about__top-text">
              Services provided to our community include:
-Food to meet basic nutritional needs such as:
              </p>
              <ul className="list-unstyled ul-list-one">
              <li>Fresh vegetables</li>
              <li>Fruits</li>
              <li>Starches</li>
              <li>Juices</li>
              <li>Breads</li>
              <li>Baby diapers</li>
              <li>Adult panties</li>
              <li>Hygiene Products</li>
            </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutOne;
