import React from "react";
import Layout from "../components/layout";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import VolunteerForm from "../components/team/volunteer-form";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import HeaderTwo from "../components/header/header-two";

const BecomeVolunteer = () => {
  return (
    <Layout pageTitle="Become a Volunteer">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Become a Volunteer" crumbTitle="Become Volunteer" />
      <VolunteerForm />
      <Footer />
    </Layout>
  );
};

export default BecomeVolunteer;
