import React from "react";
import AppicodersSection from "./Components/AppicoderSection";
import HeroSection from "./Components/HeroSection";
import TestimonialSection from "./Components/Testimonial";
import IndustriesSection from "./Components/IndustrySection";
import AwardsSection from "./Components/Award";
import ProductsSection from "./Components/Product";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";

const LandingPage = () => {
    return (
        <>

            <HeroSection />
            <AppicodersSection />
            <TestimonialSection/>
            <IndustriesSection/>
            <ProductsSection/>
            <AwardsSection/>
            <ContactForm/>
            <Footer/>

        </>
    )
}
export default LandingPage;