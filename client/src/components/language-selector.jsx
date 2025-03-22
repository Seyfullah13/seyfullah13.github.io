import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import GlobeIcon from "../images/globe 1.png";
import Frenchflag from "../images/france.png";
import EnglishFlag from "../images/united-kingdom.png";
import SpanishFlag from "../images/spain.png";
import Italianflag from "../images/italy.png";
import Turkishflag from "../images/turkey.png";
import Arabicflag from "../images/world.png";

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
    { code: "en", label: "English", img: EnglishFlag },
    { code: "fr", label: "Français", img: Frenchflag },
    { code: "es", label: "Español", img: SpanishFlag },
    { code: "ar", label: "العربية", img: Arabicflag },
    { code: "tr", label: "Türkçe", img: Turkishflag },
    { code: "it", label: "Italiano", img: Italianflag },
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
    <div ref={containerRef} className="position-relative d-inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-transparent border-0 p-0"
        aria-label="Sélecteur de langue"
      >
        <motion.img
          src={GlobeIcon}
          alt="Sélecteur de langue"
          className="d-block img-fluid"
          style={{ width: "50px", height: "50px" }}
          whileHover={{ scale: 1.1 }}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="position-absolute bg-dark text-white p-3 rounded shadow-sm"
            style={{
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              minWidth: "150px",
              zIndex: 1000,
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="btn btn-link text-white text-decoration-none d-block py-2 w-100 text-center"
                aria-label={`Change language to ${lang.label}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={lang.img}
                  alt={`${lang.label} flag`}
                  style={{ width: "20px", height: "15px", marginRight: "10px" }}
                />
                {lang.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

LanguageSelector.propTypes = {
  onLanguageChange: PropTypes.func,
};

export default LanguageSelector;
