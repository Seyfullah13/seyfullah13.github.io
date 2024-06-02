import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'animate.css/animate.min.css';
import enFlag from '../images/UK.png'; // Import English flag
import frFlag from '../images/drapeaufrance.jpg'; // Import French flag

function LanguageSelector({ onLanguageChange }) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Appeler la fonction onLanguageChange avec la nouvelle langue
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  const getCurrentFlag = () => {
    switch (i18n.language) {
      case 'en':
        return enFlag;
      case 'fr':
        return frFlag;
      default:
        return enFlag;
    }
  };

  return (
    <Dropdown className="mx-3">
      <Dropdown.Toggle
        className="animate__animated animate__backInLeft"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'white',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img 
          src={getCurrentFlag()} 
          alt={i18n.language} 
          width="20" 
          height="15" 
          style={{ marginRight: '8px' }} // Explicit margin
        />
        {i18n.language.toUpperCase()}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeLanguage('en')}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={enFlag} 
              alt="English" 
              width="20" 
              height="15" 
              style={{ marginRight: '8px' }} // Explicit margin
            />
            <span>EN</span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('fr')}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={frFlag} 
              alt="French" 
              width="20" 
              height="15" 
              style={{ marginRight: '8px' }} // Explicit margin
            />
            <span>FR</span>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

// Définir la validation de la prop onLanguageChange
LanguageSelector.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
};

export default LanguageSelector;
