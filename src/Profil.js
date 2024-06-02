import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import profileImage from "./images/Profile.jpg";
import PhotoSeyf from "./images/PhotoSeyf.jpg";
import styles from './index.css';
import 'animate.css/animate.min.css';
import { useTranslation } from 'react-i18next'; // Import de useTranslation

function Profil() {
  const { t } = useTranslation(); // Utilisation de useTranslation pour obtenir la fonction t
  const { line1, line2, line3 } = t("description"); // Obtention des lignes de description à partir des clés de traduction
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "linear" }}
      id="profil"
      className={styles.profilContainer}
      style={{ backgroundImage: `url(${profileImage})` }}
    >
      <NavLink to="/profil" style={{ textDecoration: "none", width: "100%", height: "100%" }}>
        <div id="profil-content" className={styles.profilContent}>
          <div className={styles.profileImageContainer}>
            <img src={PhotoSeyf} alt="Profil" className={styles.profileImage} />
          </div>
          <p className={`${styles.paragraph} animate__animated animate__bounceInLeft`} style={{ fontSize: '16px', maxHeight: '200px', overflow: 'auto' }}>
            {line1}
          </p>
          <p className={`${styles.paragraph} animate__animated animate__bounceInLeft`} style={{ fontSize: '16px', maxHeight: '200px', overflow: 'auto' }}>
            {line2}
          </p>
          <p className={`${styles.paragraph} animate__animated animate__bounceInLeft`} style={{ fontSize: '16px', maxHeight: '200px', overflow: 'auto' }}>
            {line3}
          </p>
        </div>
      </NavLink>
    </motion.div>
  );
}

export default Profil;
