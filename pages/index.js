import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import MainSliderTwo from "../components/slider/main-slider-2";
import AboutTwo from "../components/about/about-two";
import VideoCard from "../components/videos/video-card";
import ServiceTwo from "../components/services/service-two";
import FaqOne from "../components/faq-one";
import GalleryHomeTwo from "../components/gallery/gallery-home-two";
import Footer from "../components/footer";
import ServiceOne from "../components/services/service-one";

const HomeTwo = () => {
  return (
    <Layout pageTitle="CGCD Home">
      <HeaderTwo />
      <StickyHeader extraClassName="stricky-header-two" />
      <MainSliderTwo />
      <ServiceTwo />
      <AboutTwo />
      <VideoCard />
      {/* <FaqOne /> */}
      <GalleryHomeTwo />
      <Footer />
    </Layout>
  );
};

export default HomeTwo;
