import 'animate.css/animate.min.css';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PortfolioBackground from './images/Portfolio.jpg';

// Importer les images de projet
import image9 from './images/Mastermind.PNG';
import image8 from './images/Myuka.PNG';
import image10 from './images/Pendu.PNG';
import image7 from './images/justeprix.PNG';

// Définir le tableau des projets
const projects = [
  {
    id: 7,
    title: "Juste prix",
    link: "https://seyfullah13.github.io/justeprix/",
    tags: ["JavaScript"],
    imageSrc: image7,
    altText: "Projet JavaScript"
  },
  {
    id: 8,
    title: "Myuka",
    link: "https://seyfullah13.github.io/Myuka/",
    tags: ["React"],
    imageSrc: image8,
    altText: "Projet React"
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
  if (project.id === 7) {
    return t("project1");
  } else if (project.id === 10) {
    return t("project2");
  } else {
    return project.title;
  }
};

function Portfolio() {
  // État pour suivre l'onglet actif
  const [activeTab, setActiveTab] = useState('all');
  const controls = useAnimation();
  const { t } = useTranslation();

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
        duration: 0.5,
      },
    });
  }, [controls]);

  const backgroundStyle = {
    backgroundImage: `url(${PortfolioBackground})`,
    backgroundSize: 'cover',
    padding: '20px',
    borderRadius: '10px',
    minHeight: '100vh', // Réglage de la hauteur pour couvrir toute la page
  };

  const overlayStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  };

  return (
    <motion.div style={backgroundStyle} initial={{ opacity: 0, y: -100 }} animate={controls}>
      <Container fluid>
        <motion.div style={overlayStyle} className="animate__animated animate__backInLeft">
          <h1 className="text-center mb-5" id='portfolio'>{t("title1")}</h1>
          <h2>{t("subtitle")}</h2>
        </motion.div>
        <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
          <Row>
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
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="animate__animated animate__swing">
                    <Card className="h-100">
                      <Card.Img variant="top" src={project.imageSrc} alt={project.altText} style={{ objectFit: 'cover', height: '200px' }} />
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
