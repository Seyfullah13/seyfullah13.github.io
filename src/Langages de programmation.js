
import React from 'react';
import { useTranslation } from 'react-i18next';
import SkillsBackground from './images/tech.png';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaPhp, FaDatabase, FaBootstrap, FaSymfony } from 'react-icons/fa';



function LangageDeProgrammation() {
  const { t } = useTranslation();

  return (
  <div className="container-fluid"
  style={{
    backgroundImage: `url(${SkillsBackground})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:'40rem'
  }}>
  
  <Container className="my-5">
      <h2 className="text-center mb-5">   {t("skills")}</h2>

      <Row className="justify-content-center">
        {/* Front-End Technologies */}
        <Col md={5} className="mb-4">
          <h4 className="text-center mb-3">Front-End</h4>
          <Card className="text-center shadow-sm mb-4">
            <Card.Body>
              <FaHtml5 size={50} color="#e34c26" />
              <Card.Title className="mt-3">HTML</Card.Title>
              <Card.Text>
              {t("description-html")}
               
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center shadow-sm mb-4">
            <Card.Body>
              <FaCss3Alt size={50} color="#1572b6" />
              <Card.Title className="mt-3">CSS</Card.Title>
              <Card.Text>
              {t("description-css")}
              
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center shadow-sm mb-4">
            <Card.Body>
              <FaSass size={50} color="#c69" />
              <Card.Title className="mt-3">Sass</Card.Title>
              <Card.Text>
              {t("description-sass")}
               
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center shadow-sm mb-4">
            <Card.Body>
              <FaBootstrap size={50} color="#c69" />
              <Card.Title className="mt-3">Bootstrap</Card.Title>
              <Card.Text>
              {t("description-bootstrap")}
              
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center shadow-sm mb-4">
            <Card.Body>
              <FaJsSquare size={50} color="#f7df1e" />
              <Card.Title className="mt-3">JavaScript</Card.Title>
              <Card.Text>
              {t("description-js")}
                
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center shadow-sm mb-4">
            <Card.Body>
              <FaReact size={50} color="#61dafb" />
              <Card.Title className="mt-3">React</Card.Title>
              <Card.Text>
              {t("description-react")}
               
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Back-End Technologies */}
        <Col md={5} className="mb-4">
          <h4 className="text-center mb-3">Back-End</h4>

          <Card className="text-center shadow-sm mb-4">
            <Card.Body>
              <FaPhp size={50} color="#8C8C8C" />
              <Card.Title className="mt-3">PHP</Card.Title>
              <Card.Text>
              {t("description-Php")}
               
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center shadow-sm mb-4">
            <Card.Body>
              <FaDatabase size={50} color="#4479a1" />
              <Card.Title className="mt-3">MySQL</Card.Title>
              <Card.Text>
              {t("description-MySql")}
               
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center shadow-sm mb-4">
            <Card.Body>
              <FaSymfony size={50} color="#4479a1" />
              <Card.Title className="mt-3">Symfony</Card.Title>
              <Card.Text>
              {t("description-symfony")}
             

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

 
  </div>


  );
}

export default LangageDeProgrammation;
