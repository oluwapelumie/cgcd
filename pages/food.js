import React from "react";
import Layout from "../components/layout";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import FoodForm from "../components/team/food-form";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import HeaderTwo from "../components/header/header-two";

const BecomeFoodVolunteer = () => {
  return (
    <Layout pageTitle="Become a Food Volunteer">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Food Pantry" crumbTitle="Food Pantry" />
      <FoodForm />
      <Footer />
    </Layout>
  );
};

export default BecomeFoodVolunteer;
