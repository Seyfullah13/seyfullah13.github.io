import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PortfolioBackground from './images/dev.png';
import './index.css'; // Assurez-vous d'importer votre fichier CSS

// Importez les images de projet
import image9 from './images/Mastermind.PNG';
import image8 from './images/Myuka.PNG';
import image10 from './images/Pendu.PNG';
import image7 from './images/justeprix.PNG';

// Définissez le tableau des projets
const projects = [
  {
    id: 7,
    title: "Juste prix",
    link: "https://seyfullah13.github.io/justeprix/",
    tags: ["JavaScript"],
    imageSrc: image7,
    altText: "Projet JavaScript",
  },
  {
    id: 8,
    title: "Myuka",
    link: "https://seyfullah13.github.io/Myuka/",
    tags: ["React"],
    imageSrc: image8,
    altText: "Projet React",
  },
  {
    id: 9,
    title: "Mastermind",
    link: "https://seyfullah13.github.io/Mastermind2/",
    tags: ["JavaScript"],
    imageSrc: image9,
    altText: "Projet JavaScript"
  },
  {
    id: 10,
    title: "Pendu",
    link: "https://seyfullah13.github.io/pendu/",
    tags: ["JavaScript"],
    imageSrc: image10,
    altText: "Projet JavaScript"
  },
];

// Fonction pour obtenir la couleur de badge en fonction du tag
const getBadgeColor = (tag) => {
  switch (tag) {
    case 'JavaScript':
      return '#F7DF1E'; // Jaune pour JavaScript
    case 'React':
      return '#61DAFB'; // Bleu pour React
    default:
      return '#6c757d'; // Couleur secondaire par défaut de Bootstrap
  }
};

// Fonction pour obtenir le titre du projet
const getProjectTitle = (project, t) => {
  switch (project.id) {
    case 7:
      return t("project1");
    case 10:
      return t("project2");
    default:
      return project.title;
  }
};

function Portfolio() {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState('all');

  // Fonction pour changer l'onglet actif
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Filtrer les projets en fonction de l'onglet actif
  const filteredProjects = activeTab === 'all' ? projects : projects.filter(project =>
    project.tags.includes(activeTab)
  );

  // Animation au chargement du composant
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
      },
    });
  }, [controls]);

  // Styles CSS pour le fond et l'overlay
  const backgroundStyle = {
    backgroundImage: `url(${PortfolioBackground})`,
    backgroundSize: 'cover',
    padding: '20px',
    borderRadius: '10px',
    minHeight: '100vh', // Hauteur pour couvrir toute la page
  };

  const overlayStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  };

  // Animation pour chaque projet
  const projectAnimation = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "linear" } // Transition linéaire pour les animations de projet
  };

  return (
    <motion.div style={backgroundStyle} initial={{ opacity: 0, y: -100 }} animate={controls}>
      <Container fluid>
        <motion.div
          style={overlayStyle}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }} // Transition linéaire pour l'overlay
        >
          <h1 className="text-center mb-5" id='portfolio'>{t("title1")}</h1>
          <h2>{t("subtitle")}</h2>
        </motion.div>
        <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
          <Row className="justify-content-center">
            <Col>
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="all" style={{ color: 'black' }}>{t("button2")}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="JavaScript" style={{ color: 'black' }}>JavaScript</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="React" style={{ color: 'black' }}>React</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {filteredProjects.map((project) => (
              <Col key={project.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <motion.div {...projectAnimation}>
                    <Card className="h-100">
                    <Card.Img
  variant="top"
  src={project.imageSrc}
  alt={project.altText}
  style={{
    objectFit: 'contain', // Pour s'assurer que l'image est entièrement visible sans être coupée
    height: 'auto',       // Hauteur automatique pour maintenir les proportions
    maxWidth: '100%',     // Largeur maximale de l'image
    maxHeight: '200px',   // Hauteur maximale souhaitée pour éviter les images trop grandes
  }}
/>

                      <Card.Body>
                        <Card.Title>{getProjectTitle(project, t)}</Card.Title>
                        <div className="tags mb-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="badge me-1"
                              style={{ backgroundColor: getBadgeColor(tag), color: 'black' }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </a>
              </Col>
            ))}
          </Row>
        </Tab.Container>
      </Container>
    </motion.div>
  );
}

export default Portfolio;
