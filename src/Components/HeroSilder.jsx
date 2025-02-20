import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import herosliderimg1 from '../asset/herosliderimg1.webp';
import herosliderimg2 from '../asset/herosliderimg2.webp';
import herosliderimg3 from '../asset/herosliderimg3.webp';

const images = [
    herosliderimg1,
    herosliderimg2,
    herosliderimg3,
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="position-relative overflow-hidden">
            <Container fluid className="p-0">
                <Row className="align-items-center g-0" style={{ gap: '0px' }}>
                    <Col
                        md={6}
                        className="position-relative mt-5"
                        style={{ minHeight: '600px' }}
                    >
                        <div
                            className="position-absolute"
                            style={{
                                left: '30%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '100%',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <img
                                src={images[currentSlide]}
                                alt="Mobile App"
                                className="img-fluid"
                                style={{
                                    maxHeight: '500px',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    </Col>

                    <Col
                        md={6}
                        className="text-white " 
                    >
                        <h1 className="display-4 fw-bold mb-4" style={{ textAlign: "left" }}>
                            Leading the Way in App Development Innovation
                        </h1>
                        <p className="fs-5 fw-bold mb-4">
                            We build Android & iOS Mobile Apps that cater all your business<br />
                            needs and take it on the next level.
                        </p>
                        <Button
                            style={{
                                background: 'linear-gradient(90deg, rgba(59,4,4,1) 2%, rgba(252,9,59,1) 51%, rgba(130,5,28,1) 93%)',
                                color: '#fff', 
                                border: 'none',
                            }}
                            size="lg"
                            className="px-4 py-2 fw-bold"
                        >
                            GET A FREE QUOTE
                        </Button>

                    </Col>
                </Row>

                
                <div
                    className="position-absolute"
                    style={{
                        bottom: '60px',
                        right: '340px',
                        zIndex: 10,
                        display: 'flex',
                        gap: '10px',
                    }}
                >
                    
                    <Button
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: 'white',
                            border: 'none',
                            padding: 0,
                        }}
                        onClick={prevSlide}
                    >
                        <ChevronLeft size={24} color="#000" />
                    </Button>
                    <Button
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: 'white',
                            border: 'none',
                            padding: 0,
                        }}
                        onClick={nextSlide}
                    >
                        <ChevronRight size={24} color="#000" />
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default HeroSlider;
