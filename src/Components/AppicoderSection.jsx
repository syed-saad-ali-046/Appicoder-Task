import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const AppicodersSection = () => {
  return (
    <div className="py-3" style={{ backgroundColor: '#fff' }}>
      <Container>
        <Row className="align-items-center">
       
          <Col md={6} className="text-md-start text-center">
            <h1 className="display-5 fw-bold">
              <span style={{ color: '#e50914' }}>Appicoders</span> 
              <span style={{ color: '#e50914' }}> #1</span>
            </h1>
            <h2 className="fw-bold">
              Mobile App & Web Development <br /> Company in USA
            </h2>
          </Col>
         
          <Col md={6} className="text-md-start text-center mt-4">
            <p className="mb-4 mt-3 fs-5 fw-bold">
              Welcome to Appicoders, your trusted partner for expert mobile app
              and web development. With over 10+ years of experience, we
              specialize in designing, developing, and marketing cutting-edge
              solutions for all major mobile platforms, including Android, iOS,
              and Windows. But we don't just stop there. Our team of experts
              also excels in emerging technologies like AR, VR, and ML, as well
              as enterprise app development and digital marketing. Partner with
              us and experience the power of technology brought to life.
            </p>
            <Button
              color="dark"
              size="lg"
              style={{
                background: 'linear-gradient(90deg, rgba(59,4,4,1) 2%, rgba(252,9,59,1) 51%, rgba(130,5,28,1) 93%)',
                border: 'none',
                color: '#fff',
              }}
            >
              Read More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppicodersSection;
