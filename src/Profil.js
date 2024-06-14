import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import PhotoSeyf from "./images/PhotoSeyf.jpg";
import profileImage from "./images/dev.png";
import styles from './index.css';

function Profil() {
  const { t } = useTranslation();
  const { line1, line2, line3 } = t("description");

  const textAnimation = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "backInOut" }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      id="profil"
      className={styles.profilContainer}
      style={{ backgroundImage: `url(${profileImage})`, minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <NavLink to="/profil" style={{ textDecoration: "none", width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div id="profil-content" className={styles.profilContent}>
          <div className={styles.profileImageContainer}>
            <img src={PhotoSeyf} alt="Profil" className={styles.profileImage} />
          </div>
          <motion.p
            className={styles.paragraph}
            style={{ fontSize: '16px', maxHeight: '200px', overflow: 'auto' }}
            {...textAnimation}
          >
            {line1}
          </motion.p>
          <motion.p
            className={styles.paragraph}
            style={{ fontSize: '16px', maxHeight: '200px', overflow: 'auto' }}
            {...textAnimation}
          >
            {line2}
          </motion.p>
          <motion.p
            className={styles.paragraph}
            style={{ fontSize: '16px', maxHeight: '200px', overflow: 'auto' }}
            {...textAnimation}
          >
            {line3}
          </motion.p>
        </div>
      </NavLink>
    </motion.div>
  );
}

export default Profil;
