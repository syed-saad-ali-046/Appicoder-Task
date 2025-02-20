import React from "react";
import { Container, Row, Col, Card, CardBody, CardText } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialbg from "../asset/testimonialbg.webp";
import testimonialimg1 from "../asset/testimonialimg1.webp";
import testimonialimg2 from "../asset/testimonialimg2.png";
import reviewsicon from "../asset/reviewsicon.webp";

const testimonials = [
  {
    id: 1,
    name: "Jesenia Liseth Tovar",
    text: "We're so glad after completion of our App development project by Appcoders, they stand for the incendiary fusion of form and function. You can see and feel the difference. They make apps that excite your eyes and set your thumbs on fire. Thank you 'Team Appcoders Inc.'",
    image: testimonialimg1,
  },
  {
    id: 2,
    name: "John Doe",
    text: "Appcoders Inc. delivered a world-class solution that exceeded our expectations. The team was professional, dedicated, and truly exceptional in their approach. Highly recommended!",
    image: testimonialimg2,
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: () => (
      <div
        style={{
          width: "40px",
          height: "3px",
          background: "#ddd",
          borderRadius: "1px",
          margin: "0 2px",
        }}
      />
    ),
  };

  return (
    <div
      style={{
        backgroundImage: `url(${testimonialbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        overflow: "hidden",
        padding: "40px 0",
      }}
    >
      <Container>
        <Card
          style={{
            backgroundColor: "#B11F29",
            border: "none",
            borderRadius: "15px",
            padding: "40px",
            position: "relative",
            maxWidth: "100%",
            margin: "0 auto",
            height: "500px",
          }}
        >
          <Row>
            <Col md={4} className="d-flex flex-column justify-content-center align-items-center">
              <div style={{ position: "relative", textAlign: "center" }}>
                <img
                  src={reviewsicon}
                  alt="Review Icon"
                  style={{
                    width: "80px",
                    height: "80px",
                    position: "absolute",
                    top: "-240px",
                    left: "-20px",
                  }}
                />
                <h6
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginBottom: "5px",
                    fontWeight: "normal",
                  }}
                >
                  Client Testimonial
                </h6>
                <h2
                  style={{
                    color: "white",
                    fontSize: "32px",
                    fontWeight: "bold",
                    marginBottom: "0",
                  }}
                >
                  What our clients are Saying.
                </h2>
              </div>
            </Col>

            <Col md={8}>
              <Slider {...settings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id}>
                    <Card
                      style={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "12px",
                        padding: "25px",
                        margin: "20px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        height: "400px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CardBody style={{ textAlign: "center" }}>
                        <div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "contain",
                              marginBottom: "20px",
                              padding: "5px",
                            }}
                          />
                        </div>
                        <h4
                          style={{
                            color: "#333",
                            marginBottom: "10px",
                            fontSize: "18px",
                            fontWeight: "600",
                            borderBottom: "2px solid #CC0000",
                            paddingBottom: "5px",
                            display: "inline-block",
                          }}
                        >
                          {testimonial.name}
                        </h4>
                        <CardText
                          style={{
                            color: "#666",
                            fontSize: "15px",
                            lineHeight: "1.6",
                            marginBottom: "15px",
                          }}
                        >
                          {testimonial.text}
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default TestimonialSection;
