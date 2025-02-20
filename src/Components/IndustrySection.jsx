import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import industryicon1 from '../asset/industryicon1.webp';
import industryicon2 from '../asset/industryicon2.webp';
import industryicon3 from '../asset/industryicon3.webp';
import industryicon4 from '../asset/industryicon4.webp';
import industryicon5 from '../asset/industryicon5.webp';
import industryicon6 from '../asset/industryicon6.webp';

const industriesData = [
  {
    id: 1,
    icon: industryicon1,
    title: "Medical & Pharma Services",
    description: "From telemedicine to drug delivery, Appcoders develops cutting-edge medical apps that advance patient care and pharma services.",
  },
  {
    id: 2,
    icon: industryicon2,
    title: "Training & Fitness",
    description: "Whether you need a personalized workout program or a virtual trainer, Appcoders crafts fitness apps that help you reach your goals.",
  },
  {
    id: 3,
    icon: industryicon3,
    title: "Fintech",
    description: "Appcoders' fintech apps facilitate secure, seamless transactions and empower businesses with AI-powered analytics for better decision-making.",
  },
  {
    id: 4,
    icon: industryicon4,
    title: "Health & Fitness",
    description: "From wellness trackers to medical records, Appcoders develops apps that enhance health outcomes and revolutionize patient care.",
  },
  {
    id: 5,
    icon: industryicon5,
    title: "Business & Services",
    description: "Appcoders' business apps streamline operations, from project management to customer service, and optimize efficiency for enhanced profitability.",
  },
  {
    id: 6,
    icon: industryicon6,
    title: "Cleaning Services",
    description: "Appcoders' cleaning service apps enable customers to book professional cleaning services with ease and simplicity, revolutionizing the industry.",
  }
];

const IndustriesSection = () => {
  return (
    <div style={{
      backgroundColor: "#f5f5f5",
      padding: "60px 0",
      width: "100%",
      overflow: "hidden"
    }}>
      <Container>
        <h2 style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#333",
          fontSize: "36px",
          fontWeight: "bold"
        }}>
          Industries
        </h2>
        <Row>
          {industriesData.map((industry) => (
            <Col md="4" key={industry.id} style={{ marginBottom: "30px" }}>
              <Card style={{
                border: "none",
                borderRadius: "10px",
                backgroundColor: "white",
                height: "100%",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <CardBody style={{ padding: "25px" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px"
                  }}>
                    <span style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px"
                    }}>
                      <img
                        src={industry.icon}
                        alt={`${industry.title} icon`}
                        style={{
                          width: "50px",
                          height: "48px",
                          objectFit: "contain"
                        }}
                      />
                    </span>
                    <CardTitle tag="h4" style={{
                      margin: "0",
                      color: "#333",
                      fontSize: "21px",
                      fontWeight: "600"
                    }}>
                      {industry.title}
                    </CardTitle>
                  </div>
                  <CardText style={{
                    color: "#666",
                    fontSize: "17px",
                    lineHeight: "1.6",
                    marginBottom: "0",
                    fontWeight: "500"
                  }}>
                    {industry.description}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default IndustriesSection;
