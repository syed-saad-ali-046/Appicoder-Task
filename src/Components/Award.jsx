import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import awardsimg1 from '../asset/awardsimg1.webp';
import awardsimg2 from '../asset/awardsimg2.webp';
import awardsimg3 from '../asset/awardsimg3.webp';
import awardsimg4 from '../asset/awardsimg4.webp';

const awards = [
  {
    id: 1,
    image: awardsimg1,
    alt: "IT Firms Award"
  },
  {
    id: 2,
    image: awardsimg2,
    alt: "Top Developers Award"
  },
  {
    id: 3,
    image: awardsimg3,
    alt: "Clutch Award"
  },
  {
    id: 4,
    image: awardsimg4,
    alt: "Appfutura Award"
  }
];

const AwardsSection = () => {
  return (
    <div style={{
      backgroundColor: "#f5f5f5",
      padding: "60px 0",
      position: "relative",
      width: "100%",
      overflow: "hidden"
    }}>
      <Container>
        <h2 style={{
          textAlign: "center",
          color: "#333",
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "50px"
        }}>
          Awards and Recognitions
        </h2>

        <Row className="justify-content-center align-items-center">
          {awards.map((award) => (
            <Col 
              key={award.id} 
              xs={6} 
              sm={6} 
              md={3} 
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px"
              }}
            >
              <div style={{
                width: "250px",
                height: "250px",
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <img
                  src={award.image}
                  alt={award.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>

     
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "2px",
          backgroundColor: "#CC0000"
        }} />
      </Container>
    </div>
  );
};

export default AwardsSection;