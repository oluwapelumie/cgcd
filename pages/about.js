import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AboutOne from "../components/about/about-one";
import AboutPerson01 from "../components/about/about-p1";
import AboutPerson02 from "../components/about/about-p2";
import TeamHome from "../components/team/team-home";
import VideoCard from "../components/videos/video-card";
import TestimonialsOne from "../components/testimonials/testimonials-one";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import HeaderTwo from "../components/header/header-two";
import CallToAction from "../components/call-to-action/call-to-action";

const About = () => {
  return (
    <Layout pageTitle="About Page ">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="About Page" crumbTitle="About" />
      <AboutOne />
      <AboutPerson01 />
      <AboutPerson02 />
      <VideoCard />
      <Footer />
    </Layout>
  );
};

export default About;
