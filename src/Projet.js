import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './index.css';
import ProjetsBackground from './images/tech.png';
import Justeprix from './images/justeprix.PNG'

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
          className="text-center mx-auto mb-5 p-3  text-white rounded mt-5"
          style={{ maxWidth: '300px',backgroundColor:'#1E3A8A' }}
          id="portfolio"
        >
          {t("title1")}
        </h1>
        <div className='justeprix'>
          <img src={Justeprix} alt='Juste prix' className='justeprix-img'></img>
        </div>
        <div className='justeprix-body'></div>
      </Container>
    </div>
  );
}

export default Projets;
