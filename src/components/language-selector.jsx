import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import GlobeIcon from "../images/globe 1.png";

const LanguageSelector = ({ onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "ar", label: "العربية" },
    { code: "tr", label: "Türkçe" },
    { code: "it", label: "Italiano" },
  ];

  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (onLanguageChange) {
      onLanguageChange();
    }
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        aria-label="Sélecteur de langue"
      >
        <img
          src={GlobeIcon}
          alt="Sélecteur de langue"
          style={{ display: "block" }}
        />
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            background: "#333",
            padding: "10px",
            borderRadius: "5px",
            zIndex: 1000,
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              style={{ color: "white", cursor: "pointer", padding: "5px 0", background: "none", border: "none" }}
              aria-label={`Change language to ${lang.label}`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

LanguageSelector.propTypes = {
  onLanguageChange: PropTypes.func,
};

export default LanguageSelector;
