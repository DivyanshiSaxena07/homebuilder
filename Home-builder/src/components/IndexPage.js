import React from 'react'
import Nav from "./Nav.js";
import Header from "./Header.js";
import Section from "./Section.js";
import AboutUs from "./AboutUs.js";
import Services from "./Services.js";
import Facts from "./Facts.js";
import PortFolio from "./PortFolio.js";
import Team from "./Team.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

const Index = () => {
  return (
    <div>
       <Header></Header>
    <Section></Section>
    <AboutUs></AboutUs>
    <Services></Services>
    <Facts></Facts>
    <PortFolio></PortFolio>
    {/* <Testimonials></Testimonials> */}
    <Team></Team>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default Index
