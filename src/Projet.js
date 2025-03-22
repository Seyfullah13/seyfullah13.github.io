import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjetsBackground from "./images/tech.png";
import Justeprix from "./images/justeprix.PNG";
import { motion } from "framer-motion";

function Projets() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageHover = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };

  return (
    <motion.div
      className="container-fluid d-flex flex-column align-items-center text-center"
      style={{
        backgroundImage: `url(${ProjetsBackground})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        paddingBottom: "5rem",
      }}
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
        <motion.div whileHover={imageHover}>
          <img
            src={Justeprix}
            alt="Juste prix"
            className="justeprix-img"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </motion.div>
        <div className="justeprix-body">
          {/* Vous pouvez ajouter ici d'autres détails de projet animés */}
        </div>
      </Container>
    </motion.div>
  );
}

export default Projets;
