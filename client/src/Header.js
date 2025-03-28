import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./components/language-selector";
import logo from "./images/logo site.png";

function Header() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);
  const handleLanguageChange = () => setExpanded(false);

  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <Navbar
      id="nav"
      expand="md"
      collapseOnSelect
      expanded={expanded}
      style={{
        fontSize: "16px",
        borderBottom: "none",
        padding: "5px 20px",
      }}
    >
      <Container>
        <Navbar.Brand>
          <NavLink to="/" onClick={handleLinkClick}>
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-top me-2"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleMenu}
          style={{ backgroundColor: "transparent", border: "none" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <motion.div variants={linkVariants} whileHover="hover" style={{ display: "inline-block" }}>
              <Nav.Link
                as={NavLink}
                to="/langages-de-programmation"
                className="mx-3 nav-link text-white"
                onClick={handleLinkClick}
              >
                {t("link3")}
              </Nav.Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover" style={{ display: "inline-block" }}>
              <Nav.Link
                as={NavLink}
                to="/projet"
                className="mx-3 nav-link text-white"
                onClick={handleLinkClick}
              >
                {t("link4")}
              </Nav.Link>
            </motion.div>
            <motion.div variants={linkVariants} whileHover="hover" style={{ display: "inline-block" }}>
              <Nav.Link
                as={NavLink}
                to="/prise-de-rendez-vous"
                className="mx-3 nav-link text-white"
                onClick={handleLinkClick}
              >
                {t("link6")}
              </Nav.Link>
            </motion.div>
            
            
            <motion.div variants={linkVariants} whileHover="hover" style={{ display: "inline-block" }}>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className="mx-3 nav-link text-white"
                onClick={handleLinkClick}
              >
                {t("link5")}
              </Nav.Link>
            </motion.div>
          
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
