import React from 'react';
import 'animate.css/animate.min.css'; // Import d'Animate.css
import { useTranslation } from 'react-i18next'; 
import styles from './index.css'; // Import du fichier de styles CSS

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className={`footer py-3 animate__animated animate__flipInX text-white ${styles.footer}`} style={{ backgroundColor: '#38605d' }}>
            <div className="container text-center">
                <span className="animate__animated animate__flipInX text-white">{t("copyrigths")}</span>
                <span className="animate__animated animate__flipInX text-white"> {t("rights")}</span>
            </div>
        </footer>
    );
}

export default Footer;
