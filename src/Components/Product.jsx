import React, { useState } from "react";
import { Container, Row, Col, Card, Nav, NavItem, NavLink } from "reactstrap";
import productsbg from '../asset/productsbg.webp';
import productimg1 from '../asset/productimg1.webp';

const navItems = [
  "All",
  "Health Supreme",
  "CRM 365",
  "OSDA",
  "Marketplace E-Commerce Platform",
  "Sports Training App",
  "Fitness"
];

const products = [
  {
    id: 1,
    image: productimg1,
    category: "All"
  },
  {
    id: 2,
    image: productimg1,
    category: "Health Supreme"
  },
  {
    id: 3,
    image: productimg1,
    category: "CRM 365"
  },
  {
    id: 4,
    image: productimg1,
    category: "OSDA"
  },
  {
    id: 5,
    image: productimg1,
    category: "Sports Training App"
  },
  {
    id: 6,
    image: productimg1,
    category: "Fitness"
  }
];

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div style={{
      background: `url(${productsbg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#CC0000",
      padding: "60px 0",
      position: "relative",
      width: "100%",
      overflow: "hidden"
    }}>
      <Container>
        <h2 style={{
          color: "white",
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "30px"
        }}>
          Products
        </h2>

        <Nav 
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "40px",
            gap: "15px"
          }}
        >
          {navItems.map((item) => (
            <NavItem key={item}>
              <NavLink
                style={{
                  color: activeTab === item ? "white" : "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  padding: "8px 15px",
                  fontSize: "20px",
                  fontWeight: activeTab === item ? "600" : "normal",
                  background: "none",
                  border: "none",
                  transition: "color 0.3s ease",
                  textDecoration: activeTab === item ? "underline" : "none"
                }}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <Row>
          {products.map((product) => (
            <Col md="4" key={product.id} style={{ marginBottom: "30px" }}>
              <Card style={{
                border: "none",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white"
                }}>
                  <img 
                    src={product.image} 
                    alt={`Product ${product.id}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "300px",
                      objectFit: "contain"
                    }}
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductsSection;
