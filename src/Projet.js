import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './index.css';
import ProjetsBackground from './images/tech.png';

function Projets() {
  const { t } = useTranslation();

  return (
    <div 
      className="container-fluid d-flex flex-column align-items-center text-center"
      style={{
        backgroundImage: `url(${ProjetsBackground})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        paddingBottom: '5rem'
      }}
    >
      <Container>
        <h1 
          className="text-center mx-auto mb-5 p-3 bg-white rounded mt-5"
          style={{ maxWidth: '300px' }}
          id="portfolio"
        >
          {t("title1")}
        </h1>
      </Container>
    </div>
  );
}

export default Projets;
