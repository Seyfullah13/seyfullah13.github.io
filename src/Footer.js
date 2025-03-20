import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.css';

function Footer() {
    const { t } = useTranslation();



    return (
        <motion.div
            className={`footer py-3 text-white ${styles.footer}`}
            style={{ backgroundColor: '#1e3a8a', textAlign: 'center' }}
            initial="initial"
            animate="animate"
        
        >
            <div className="container">
                <motion.span className="text-white">{t("copyrigths")}</motion.span>
                <motion.span className="text-white"> {t("rights")}</motion.span>
            </div>
        </motion.div>
    );
}

export default Footer;
