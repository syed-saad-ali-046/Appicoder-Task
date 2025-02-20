import { Container, Row, Col } from "reactstrap";
import logodark from '../asset/logodark.webp';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1A1A1A", color: "white" }}>
      <Container>
       
        <Row className="py-5">
          <Col md={4}>
            <div>
              <img
                src={logodark}
                alt="Appicoders Logo"
                width={160}
                height={45}
                className="mb-4"
              />
              <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>Contact Us</h5>
              <p style={{ fontSize: "16px", marginBottom: "8px" }}>
                Tel: <a href="tel:+18008268018" className="text-white">+1 (800) 826-8018</a>
              </p>
              <p style={{ fontSize: "16px" }}>
                Email: <a href="mailto:info@appicoders.com" className="text-white">info@appicoders.com</a>
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div>
              <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>About</h5>
              <ul className="list-unstyled mt-3">
                <li style={{  fontSize: "18px" }}>
                  <a href="/" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li style={{  fontSize: "18px" }}>
                  <a href="/about" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li style={{  fontSize: "18px" }}>
                  <a href="/contact" className="text-white text-decoration-none">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={4}>
            <div>
              <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>Appicoders Services</h5>
              <ul className="list-unstyled mt-3">
                <li style={{  fontSize: "18px" }}>
                  <a href="/services/iphone" className="text-white text-decoration-none">
                    » IPHONE APPLICATION DEVELOPMENT
                  </a>
                </li>
                <li style={{  fontSize: "18px" }}>
                  <a href="/services/android" className="text-white text-decoration-none">
                    » ANDROID APPLICATION DEVELOPMENT
                  </a>
                </li>
                <li style={{ fontSize: "18px" }}>
                  <a href="/services/enterprise" className="text-white text-decoration-none">
                    » ENTERPRISE APP DEVELOPMENT
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "#444", margin: "0",width:"100%" }} />

      
        <Row className="py-4">
          <Col className="text-center">
            <p style={{ fontSize: "14px", margin: "0" }}>
              © 2023 <span style={{ fontWeight: "bold" }}>APPICODERS</span>. ALL RIGHTS RESERVED.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
