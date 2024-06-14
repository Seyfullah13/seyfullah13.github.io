import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CVPDFEN from "./CV/CV English.pdf.pdf";
import CVImageEN from "./CV/CVSOen.png";
import CVPDFFR from './CV/CVSeyf.pdf.pdf';
import CVImageFR from './CV/cvsofr.png';
import fondcv from './images/dev.png';
import './index.css';

function CV() {
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language === 'en';
  const CVImage = isEnglish ? CVImageEN : CVImageFR;
  const CVPDF = isEnglish ? CVPDFEN : CVPDFFR;

  const backgroundStyle = {
    backgroundImage: `url(${fondcv})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const buttonVariants = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: 'backInOut' },
    hover: { scale: 1.1, backgroundColor: '#ffc700', color: '#fff', transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      className="cv-container text-center"
      style={backgroundStyle}
      id="CV"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <motion.h1
        className="cv-title text-white"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'backInOut' }}
      >
        {t("titre")}
      </motion.h1>
      <div className="cv-content">
        <img
          src={CVImage}
          alt="CV"
          className="cv-image"
        />
      </div>
      <motion.a
        href={CVPDF}
        download={isEnglish ? "SeyfullahResume.pdf" : "CVSeyf.pdf"}
        style={{
          marginTop: '20px',
          display: 'inline-block',
          backgroundColor: '#ffcc00',
          border: '1px solid #ffcc00',
          borderRadius: '5px',
          padding: '10px 20px',
          textDecoration: 'none',
          color: '#000',
        }}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        {t("button1")}
      </motion.a>
    </motion.div>
  );
}

export default CV;
