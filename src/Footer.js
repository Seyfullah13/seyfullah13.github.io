import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.css';

function Footer() {
    const { t } = useTranslation();

    const footerAnimation = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 1, type: 'spring', stiffness: 120 }
    };

    return (
        <motion.div
            className={`footer py-3 text-white ${styles.footer}`}
            style={{ backgroundColor: '#38605d', textAlign: 'center' }}
            initial="initial"
            animate="animate"
            variants={footerAnimation}
        >
            <div className="container">
                <motion.span className="text-white">{t("copyrigths")}</motion.span>
                <motion.span className="text-white"> {t("rights")}</motion.span>
            </div>
        </motion.div>
    );
}

export default Footer;
