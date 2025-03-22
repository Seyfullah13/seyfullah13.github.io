import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './index.css';

function Footer() {
  const { t } = useTranslation();

  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      className={`footer py-3 text-white ${styles.footer}`}
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      style={{
        background: 'linear-gradient(45deg, #1e3a8a)',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          {t("copyrigths")} {t("rights")}
        </p>
      </div>
    </motion.div>
  );
}

export default Footer;
