
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import LanguageSelector from "./components/language-selector";
import logo from "./images/logo site.png";

function Header() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  const handleLanguageChange = () => {
    setExpanded(false);
  };

  return (
    <Navbar  id="nav" expand="md" collapseOnSelect expanded={expanded} style={{ fontSize: "16px", borderBottom: "none", padding: "5px 20px" }}>
      <Container>
        <Navbar.Brand>
          <NavLink to="/" onClick={handleLinkClick}>
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-top me-2 " 
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleMenu} style={{ backgroundColor: "transparent", border: "none" }} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto "> 
          
            
            <Nav.Link as={NavLink} to="/Langages de Programmation" className="mx-3 nav-link text-white  nav-link shift" onClick={handleLinkClick}>
              {t("link3")}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Projet" className="mx-3 nav-link text-white  nav-link shift" onClick={handleLinkClick}>
              {t("link4")}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="mx-3 nav-link text-white  nav-link shift" onClick={handleLinkClick}>
              {t("link5")}
            </Nav.Link>
          </Nav>
          <Nav>
            <LanguageSelector onLanguageChange={handleLanguageChange} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
