
import React from 'react';
import { useTranslation } from 'react-i18next';
import SkillsBackground from './images/tech.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logohtml from './images/html-5.png'


function LangageDeProgrammation() {
  const { t } = useTranslation();

  return (
    <div className="container-fluid"
      style={{ backgroundImage: `url(${SkillsBackground})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1
        
        className="text-center bg-white p-2 d-inline-block mb-auto programming"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
        {t("skills")}
      </h1>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={logohtml} alt='HTML5' />
      <Card.Body>
        <Card.Title>HTML</Card.Title>
        <Card.Text>
        HTML est un langage de balisage structurant le contenu des pages web.
        </Card.Text>
        <Button variant="primary">Documentation</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default LangageDeProgrammation;
