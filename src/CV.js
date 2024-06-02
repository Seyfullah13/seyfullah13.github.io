import 'animate.css'; // Importez animate.css
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez le fichier CSS de Bootstrap
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import de useTranslation depuis react-i18next
import CVImageEN from './CV/CV Seyf2.png'; // Importez l'image anglaise
import CVPDFEN from './CV/CVSO2.pdf'; // Importez le fichier PDF anglais
import CVImageFR from './CV/CVSeyf.jpg'; // Importez l'image française
import CVPDFFR from './CV/CVSeyf.pdf'; // Importez le fichier PDF français
import fondcv from './images/background.jpg'; // Importez l'image de fond
import './index.css'; // Importez votre fichier CSS

function CV() {
    const { t, i18n } = useTranslation(); // Utilisation de useTranslation pour obtenir la fonction t et i18n

    // Déterminez les fichiers à utiliser en fonction de la langue actuelle
    const isEnglish = i18n.language === 'en';
    const CVImage = isEnglish ? CVImageEN : CVImageFR;
    const CVPDF = isEnglish ? CVPDFEN : CVPDFFR;

    const backgroundStyle = {
        backgroundImage: `url(${fondcv})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ajustez selon vos besoins
    };

    return (
        <div className="cv-container text-center" style={backgroundStyle} id="CV">
            <h1 className="cv-title animate__animated animate__rotateInDownLeft">{t("titre")}</h1> {/* Utilisation de t("titre") pour traduire le titre */}
            <div className="cv-content">
                <img
                    src={CVImage}
                    alt="CV"
                    className="cv-image animate__animated animate__rotateInDownLeft" // Ajout de l'animation rotateInDownLeft
                    style={{
                        width: '90%',
                        maxWidth: '700px',
                        height: 'auto',
                        margin: '0 auto',
                    }}
                />
            </div>
            <a
                href={CVPDF}
                download={isEnglish ? "SeyfullahResume.pdf" : "CVSeyf.pdf"}
                className="animate__animated animate__rotateInDownLeft" // Ajout de l'animation rotateInDownLeft
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
            >
                {t("button1")}
            </a>
        </div>
    );
}

export default CV;
