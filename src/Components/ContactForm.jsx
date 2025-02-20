import React from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import contactimg from "../asset/contactimg.webp";
import telephone from '../asset/telephone.svg'

const ContactForm = () => {
  return (
    <div style={{ backgroundColor: '#E91428' , padding: "50px 0", color: "white" }}>
      <Container fluid>
        <Row>
          <Col md="6" style={{ backgroundColor: '#E91428' , padding: "60px" }}>
            <div>
              <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>LET'S TALK</h4>
              <h2 style={{ fontSize: "32px", fontWeight: "bold", margin: "10px 0" }}>
                Got an idea? Let’s get in touch!
              </h2>
              <p style={{ marginBottom: "30px", lineHeight: "1.5",fontSize:"18px",fontFamily:500 }}>
                Have queries? Not sure of your App Strategy? Discuss with us and we’ll guide you the
                way forward. Please submit your inquiry and our App Development Strategist will contact
                you shortly.
              </p>
              <Form>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    style={{
                      background: "white",
                      borderRadius: "5px",
                      marginBottom: "15px",
                      padding: "10px",
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    style={{
                      background: "white",
                      borderRadius: "5px",
                      marginBottom: "15px",
                      padding: "10px",
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Phone Number"
                    style={{
                      background: "white",
                      borderRadius: "5px",
                      marginBottom: "15px",
                      padding: "10px",
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="textarea"
                    placeholder="Message"
                    rows="4"
                    style={{
                      background: "white",
                      borderRadius: "5px",
                      marginBottom: "15px",
                      padding: "10px",
                    }}
                  />
                </FormGroup>
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    borderRadius: "5px",
                  }}
                >
                  Let’s get in touch
                </Button>
              </Form>
            </div>
          </Col>

          
          <Col md="6" style={{ padding: "0" }}>
            <div
              style={{
                position: "relative",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <img
                src={contactimg}
                alt="Contact"
                style={{
                  width: "100%",
                  height: "calc(100% - 155px)",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  backgroundColor: "#1A1A1A",
                  color: "white",
                  textAlign: "center",
                  paddingTop: "30px",
                  fontWeight: 500
                }}
              >
                <p style={{ marginBottom: "10px" }}>
                  Please submit your inquiry and our App Development Strategist will contact you shortly
                </p>
                <img src={telephone} alt="telephone"/>
                <h3 style={{ margin: "10px 0", fontWeight: 500 }}>+1-(800) 826 8018</h3>
                <p style={{fontWeight: 500}}>info@appcoders.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
