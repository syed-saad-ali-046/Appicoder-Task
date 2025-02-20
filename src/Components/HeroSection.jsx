import React from "react";
import { Row, Col } from 'reactstrap';
import herobg from '../asset/herobg.webp';
import Navigation from "./NavBar";
import HeroSlider from "./HeroSilder";


const HeroSection = () => {
    return (
        <>
            <Navigation />
            <Row 
                className="g-0" 
                style={{
                    height: "100vh",
                    width:"100%",
                    overflow: "hidden",
                    backgroundImage: `url(${herobg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Col>
            <HeroSlider />
          </Col>
            </Row>
        </>
    );
};

export default HeroSection;