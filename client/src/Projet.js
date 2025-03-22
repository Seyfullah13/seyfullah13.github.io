import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjetsBackground from "./images/tech.png";
import Justeprix from "./images/justeprix.PNG";
import { motion } from "framer-motion";
import "./index.css";
import Mastermind from "./images/Mastermind.PNG";
import Myuka from "./images/Myuka.PNG";
import Portfolio from "./images/Portfolio.png";

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
              <h1 className="justeprix-title">Justeprix</h1>
              <p className="justeprix-sub-title">HTML Javascript
              </p>
              <p className="justeprix-info">Le Juste Prix est un jeu où l'utilisateur doit deviner une valeur cible générée aléatoirement. À chaque tentative, le programme compare la proposition à ce nombre et indique si le prix à trouver est plus haut ou plus bas, jusqu'à ce que l'utilisateur trouve la valeur exacte.</p>
              <button className="justeprix-btn">Visiter</button>
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
              <h1 className="mastermind-title">Mastermind</h1>
              <p className="mastermind-sub-title">HTML CSS Javascript</p>
              <p className="mastermind-info">Le Mastermind est un programme où l'utilisateur devine une combinaison secrète générée par l'ordinateur. Après chaque essai, des indices indiquent les valeurs correctes bien placées et mal placées. Le jeu se termine lorsque la combinaison est trouvée ou après un nombre limité de tentatives.</p>
              <button className="mastermind-btn">Visiter</button>
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
              <h1 className="myuka-title">Myuka</h1>
              <p className="myuka-sub-title">HTML CSS React</p>
              <p className="myuka-info">Myuka est un projet qui permet de rechercher des produits alimentaires via l'API d'OpenFoodFacts. L'utilisateur entre un code-barres, et l'application affiche les informations disponibles (nutrition, ingrédients, allergènes, etc.) si le produit est trouvé.</p>
              <button className="myuka-btn">Visiter</button>
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
              <h1 className="portfolio-title">Portfolio</h1>
              <p className="portfolio-sub-title">HTML CSS React Bootstrap</p>
              <p className="portfolio-info">
                Ce site est mon portfolio personnel, où je présente mes projets, mes compétences et mon parcours. Il est hébergé sur GitHub Pages.
              </p>
              <button className="portfolio-btn">Visiter</button>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
}

export default Projets;
