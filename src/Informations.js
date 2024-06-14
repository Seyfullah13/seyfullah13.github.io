import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import devImage from './images/dev.png';

function Informations() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 56px)',
        marginTop: '-50px',
        textAlign: 'center',
        background: `url(${devImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        '@media (min-width: 768px) and (max-width: 1024px)': {
          backgroundSize: '150%'
        }
      }}
      id='home'
    >
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#fff',
        width: '90%',
        zIndex: 1
      }}>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '3em', marginBottom: '0.5em' }}
        >
          {t("greeting")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '2em', marginTop: 0 }}
        >
          {t("profession")}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Informations;
