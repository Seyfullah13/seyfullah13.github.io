import 'animate.css/animate.min.css';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SkillsBackground from './images/tech.png';

function LangageDeProgrammation() {
  const { t } = useTranslation();

  return (
    <motion.div className="container-fluid"
      style={{ backgroundImage: `url(${SkillsBackground})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "linear" }} // Aligné avec Portfolio
        className="text-center bg-white p-2 d-inline-block mx-auto mb-3"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
        {t("skills")}
      </motion.h1>
    </motion.div>
  );
}

export default LangageDeProgrammation;
