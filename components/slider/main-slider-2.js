import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import banner1 from "../../assets/images/main-slider/slider-2-1.jpg";
import banner2 from "../../assets/images/main-slider/slider-1-2.jpg";
import Image from "next/image";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSliderTwo = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  };

  return (
    <section className="main-slider main-slider__two">
      <Swiper {...mainSlideOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            // style={{ backgroundImage: `url(${banner1})` }}
          ></div>
<Image src={banner1} alt="" className="image-layer"  layout="fill" objectFit="cover" objectPosition="center" />

          <Container>
            <Row className=" justify-content-start">
              <Col xl={6} lg={12} className="text-left">
                <h2>
                  Christ Glory<br /> Community <br /> Development
                </h2>
                <p>Let all that you do be done in love. – 1 Corinthians 16:14</p>
                {/* <a
                  href="#"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn dynamic-radius"
                >
                  Start Donating
                </a> */}
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            // style={{ backgroundImage: `url(${banner2})` }}
          ></div>
<Image src={banner2} alt="" className="image-layer"  layout="fill" objectFit="cover" objectPosition="center" />
          <Container>
            <Row className=" justify-content-start">
              <Col xl={6} lg={12} className="text-left">
              <h2>
                  Christ Glory<br /> Community <br /> Development
                </h2>
                <p>Let all that you do be done in love. – 1 Corinthians 16:14</p>
                {/* <a
                  href="#"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn dynamic-radius"
                >
                  Start Donating
                </a> */}
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            // style={{ backgroundImage: `url(${banner1})` }}
          ></div>
<Image src={banner1} alt="" className="image-layer"  layout="fill" objectFit="cover" objectPosition="center" />

          <Container>
            <Row className="justify-content-start">
              <Col xl={6} lg={12} className="text-left">
              <h2>
                  Christ Glory<br /> Community <br /> Development
                </h2>
                <p>Let all that you do be done in love. – 1 Corinthians 16:14</p>
                {/* <a
                  href="#"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn dynamic-radius"
                >
                  Start Donating
                </a> */}
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default MainSliderTwo;
