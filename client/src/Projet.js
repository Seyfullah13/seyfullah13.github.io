import React from "react";
import { Container } from "react-bootstrap";
// Removed duplicate import of useTranslation
import ProjetsBackground from "./images/tech.png";
import Justeprix from "./images/justeprix.PNG";
import { motion } from "framer-motion";
import "./index.css";
import Mastermind from "./images/Mastermind.PNG";
import Myuka from "./images/Myuka.PNG";
import Portfolio from "./images/Portfolio.png";
import { useTranslation } from "react-i18next";

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
        <div className="cards-container">
          <motion.div whileHover={imageHover} className="justeprix">
            <img
              src={Justeprix}
              alt="Juste prix"
              className="justeprix-img"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
            <div className="justeprix-body">
              <h1 className="justeprix-title">{t("titre-projet1")}</h1>
              <p className="justeprix-sub-title">HTML Bootstrap Javascript
              </p>
              <p className="justeprix-info"> {t("description-projet1")}</p>
              <button className="justeprix-btn"> {t("titre-bouton")}</button>
            </div>
          </motion.div>
          
          <motion.div whileHover={imageHover} className="mastermind">
            <img
              src={Mastermind}
              alt="Mastermind"
              className="mastermind-img"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
            <div className="mastermind-body">
              <h1 className="mastermind-title">{t("titre-projet2")}</h1>
              <p className="mastermind-sub-title">HTML Bootstrap Javascript</p>
              <p className="mastermind-info"> {t("description-projet2")}</p>
              <button className="mastermind-btn">{t("titre-bouton")}</button>
            </div>
          </motion.div>
          <motion.div whileHover={imageHover} className="myuka">
            <img
              src={Myuka}
              alt="Myuka"
              className="myuka-img"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
            <div className="myuka-body">
              <h1 className="myuka-title">{t("titre-projet3")}</h1>
              <p className="myuka-sub-title">HTML CSS React</p>
              <p className="myuka-info"> {t("projet3")}  </p>
              <button className="myuka-btn">{t("titre-bouton")}</button>
            </div>
          </motion.div>

          <motion.div whileHover={imageHover} className="portfolio">
            <img
              src={Portfolio}
              alt="Portfolio"
              className="portfolio-img"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
            <div className="portfolio-body">
              <h1 className="portfolio-title">{t("titre-projet4")}</h1>
              <p className="portfolio-sub-title">HTML CSS React Bootstrap</p>
              <p className="portfolio-info">
              {t("description-projet4")}  
              </p>
              <button className="portfolio-btn">{t("titre-btn portfolio")}</button>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
}

export default Projets;
