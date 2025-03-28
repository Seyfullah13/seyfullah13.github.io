import React from "react";
import { useTranslation } from "react-i18next";
import SkillsBackground from "./images/tech.png";
import { Card, Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaDatabase,
  FaBootstrap,
  FaSymfony,
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerStyle = {
  backgroundImage: `url(${SkillsBackground})`,
  backgroundSize: "cover",
  minHeight: "100vh",
  paddingBottom: "5rem",
};

function LangageDeProgrammation() {
  const { t } = useTranslation();

  const frontEndTech = [
    { icon: FaHtml5, color: "#e34c26", title: "HTML", desc: "description-html" },
    { icon: FaCss3Alt, color: "#1572b6", title: "CSS", desc: "description-css" },
    { icon: FaSass, color: "#c69", title: "Sass", desc: "description-sass" },
    { icon: FaBootstrap, color: "#7952b3", title: "Bootstrap", desc: "description-bootstrap" },
    { icon: FaJsSquare, color: "#f7df1e", title: "JavaScript", desc: "description-js" },
    { icon: FaReact, color: "#61dafb", title: "React", desc: "description-react" },
  ];

  const backEndTech = [
    { icon: FaPhp, color: "#8C8C8C", title: "PHP", desc: "description-Php" },
    { icon: FaDatabase, color: "#4479a1", title: "MySQL", desc: "description-MySql" },
    { icon: FaSymfony, color: "#000", title: "Symfony", desc: "description-symfony" },
  ];

  return (
    <div className="container-fluid d-flex flex-column align-items-center" style={containerStyle}>
      <Container className="my-5">
        <h2
          className="text-center mx-auto text-white p-3 mb-5 rounded"
          style={{ maxWidth: "300px", backgroundColor: "#1E3A8A" }}
        >
          {t("skills")}
        </h2>
        <Row className="justify-content-center row-cols-1 row-cols-md-2 g-4">
          <Col>
            <h4
              className="text-center mx-auto mb-4 p-3 rounded"
              style={{ maxWidth: "200px", backgroundColor: "#F5F5F5", color: "#333333" }}
            >
              Front-End
            </h4>
            {frontEndTech.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div key={tech.title} variants={cardVariants} initial="hidden" animate="visible">
                  <Card className="text-center shadow-sm mb-3">
                    <Card.Body>
                      <Icon size={50} color={tech.color} />
                      <Card.Title className="mt-3" style={{ color: "#333333" }}>
                        {tech.title}
                      </Card.Title>
                      <Card.Text style={{ color: "#333333" }}>{t(tech.desc)}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              );
            })}
          </Col>
          <Col>
            <h4
              className="text-center mx-auto mb-4 p-3 rounded"
              style={{ maxWidth: "200px", backgroundColor: "#F5F5F5", color: "#333333" }}
            >
              Back-End
            </h4>
            {backEndTech.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div key={tech.title} variants={cardVariants} initial="hidden" animate="visible">
                  <Card className="text-center shadow-sm mb-3">
                    <Card.Body>
                      <Icon size={50} color={tech.color} />
                      <Card.Title className="mt-3" style={{ color: "#333333" }}>
                        {tech.title}
                      </Card.Title>
                      <Card.Text style={{ color: "#333333" }}>{t(tech.desc)}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LangageDeProgrammation;
