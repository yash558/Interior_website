import React from "react";
import Footer from "../../components/Footer/Footer";
import Partner from "../../components/partner/Partner";
import Hero from "../../components/Hero/Hero";
import Facility from "../../components/Facility/Facility";
import Testimonial from "../../components/Testimonials/Testimonial";
import SocialIcon from "../../components/SocialIcon/SocialIcon";
import Whatsapp from "../../components/Whatsapp/Whatsapp";
import Company from "../../components/Company/Company";
import Team from "../../components/Team/Team";
import Projects from "./../../components/Projects/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <Company />
      <Facility />
      <Team />
      <Projects />
      <Testimonial />
      <Partner />
      <Whatsapp />
      <SocialIcon />
      <Footer />
    </div>
  );
};

export default Home;
