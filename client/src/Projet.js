import React from "react";
import { Container, Button } from "react-bootstrap";
import ProjetsBackground from "./images/tech.png";
import Justeprix from "./images/justeprix.PNG";
import Mastermind from "./images/Mastermind.PNG";
import Myuka from "./images/Myuka.PNG";
import Portfolio from "./images/Portfolio.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./index.css";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageHover = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

const backgroundStyle = {
  backgroundImage: `url(${ProjetsBackground})`,
  backgroundSize: "cover",
  minHeight: "100vh",
  paddingBottom: "5rem",
};

function Projets() {
  const { t } = useTranslation();

  const projects = [
    {
      id: "justeprix",
      image: Justeprix,
      alt: "Juste prix",
      title: t("titre-projet1"),
      subtitle: "HTML Bootstrap Javascript",
      description: t("description-projet1"),
      link: "https://seyfullah13.github.io/justeprix/",
    },
    {
      id: "mastermind",
      image: Mastermind,
      alt: "Mastermind",
      title: t("titre-projet2"),
      subtitle: "HTML Bootstrap Javascript",
      description: t("description-projet2"),
      link: "https://seyfullah13.github.io/Mastermind2/",
    },
    {
      id: "myuka",
      image: Myuka,
      alt: "Myuka",
      title: t("titre-projet3"),
      subtitle: "HTML CSS React",
      description: t("projet3"),
      link: "https://seyfullah13.github.io/Myuka/",
    },
    {
      id: "portfolio",
      image: Portfolio,
      alt: "Portfolio",
      title: t("titre-projet4"),
      subtitle: "HTML CSS React Bootstrap",
      description: t("description-projet4"),
      link: "https://seyfullah13.github.io/",
    },
  ];

  return (
    <motion.div
      className="container-fluid d-flex flex-column align-items-center text-center"
      style={backgroundStyle}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Container>
        <h1
          className="text-center mx-auto mb-5 p-3 text-white rounded mt-5"
          style={{ maxWidth: "300px", backgroundColor: "#1E3A8A" }}
          id="portfolio"
        >
          {t("title1")}
        </h1>
        <div className="cards-container">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={imageHover}
              className={project.id}
            >
              <img
                src={project.image}
                alt={project.alt}
                className={`${project.id}-img`}
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
              <div className={`${project.id}-body`}>
                <h1 className={`${project.id}-title`}>{project.title}</h1>
                <p className={`${project.id}-sub-title`}>{project.subtitle}</p>
                <p className={`${project.id}-info`}>{project.description}</p>
                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${project.id}-btn`}
                  style={{ backgroundColor: "#06B6D4", color: "#333333" }}
                >
                  {project.id === "portfolio"
                    ? t("titre-btn portfolio")
                    : t("titre-bouton")}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}

export default Projets;
