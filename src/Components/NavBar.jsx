import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../asset/logo.webp'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Why Choose Us",
    "Portfolio",
    "Products",
    "Testimonial",
    "Technologies",
    "Contact",
  ];

  return (
    <Navbar expand="lg" className="py-3" style={{ backgroundColor: '#E91428' }}>
      <Container className="d-flex justify-content-between align-items-center">
        <NavbarBrand href="/" className="text-white fw-bold">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
        </NavbarBrand>
        
        <NavbarToggler onClick={toggle} className="border-0" />
        
        <Collapse isOpen={isOpen} navbar className="justify-content-center">
          <Nav navbar className="text-center">
            {navItems.map((item, index) => (
              <NavItem key={index}>
                <NavLink
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white px-3"
                >
                  {item}
                </NavLink>
              </NavItem>
            ))}
            <NavItem>
              <Button
                outline
                color="light"
                className="rounded-pill mt-2 mt-lg-0 ms-lg-3"
              >
                +1 (800) 826-8018
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;