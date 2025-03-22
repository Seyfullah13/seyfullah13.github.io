import React from 'react';
import { useTranslation } from 'react-i18next';
import SkillsBackground from './images/tech.png';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaPhp, FaDatabase, FaBootstrap, FaSymfony } from 'react-icons/fa';

function LangageDeProgrammation() {
  const { t } = useTranslation();

  return (
    <div 
      className="container-fluid d-flex flex-column align-items-center"
      style={{
        backgroundImage: `url(${SkillsBackground})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        paddingBottom: '5rem'
      }}
    >
      <Container className="my-5">
        <h2 
          className="text-center mx-auto  text-white p-3  rounded"
          style={{ maxWidth: '300px', backgroundColor: '#1E3A8A' }}
        >
          {t("skills")}
        </h2>

        <Row className="justify-content-center row-cols-1 row-cols-md-2 g-4">
          {/* Front-End Technologies */}
          <Col>
            <h4 className="text-center mx-auto mb-3 p-3  rounded" style={{ maxWidth: '200px' ,backgroundColor:'#F5F5F5', color:'#333333' }}>
              Front-End
            </h4>
            {[ 
              { icon: FaHtml5, color: "#e34c26", title: "HTML", desc: "description-html" },
              { icon: FaCss3Alt, color: "#1572b6", title: "CSS", desc: "description-css" },
              { icon: FaSass, color: "#c69", title: "Sass", desc: "description-sass" },
              { icon: FaBootstrap, color: "#7952b3", title: "Bootstrap", desc: "description-bootstrap" },
              { icon: FaJsSquare, color: "#f7df1e", title: "JavaScript", desc: "description-js" },
              { icon: FaReact, color: "#61dafb", title: "React", desc: "description-react" }
            ].map((tech, index) => (
              <Card key={tech.title} className="text-center shadow-sm mb-3" >
                <Card.Body >
                  <tech.icon size={50} color={tech.color} />
                  <Card.Title className="mt-3" style={{color:'#333333 '}}>{tech.title}</Card.Title>
                  <Card.Text style={{color:'#333333 '}}>{t(tech.desc)}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>

          {/* Back-End Technologies */}
          <Col>
            <h4 className="text-center mx-auto mb-3 p-3 bg-white rounded" style={{ maxWidth: '200px' ,backgroundColor:'#F5F5F5' }}>
              Back-End
            </h4>
            {[ 
              { icon: FaPhp, color: "#8C8C8C", title: "PHP", desc: "description-Php" },
              { icon: FaDatabase, color: "#4479a1", title: "MySQL", desc: "description-MySql" },
              { icon: FaSymfony, color: "#000", title: "Symfony", desc: "description-symfony" }
            ].map((tech, index) => (
              <Card key={index} className="text-center shadow-sm mb-3">
                <Card.Body>
                  <tech.icon size={50} color={tech.color} />
                  <Card.Title className="mt-3" style={{color:'#333333 '}}>{tech.title}</Card.Title>
                  <Card.Text style={{color:'#333333 '}}>{t(tech.desc)}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LangageDeProgrammation;
