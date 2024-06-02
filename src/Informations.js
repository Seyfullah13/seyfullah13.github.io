import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion library
import devImage from './images/dev.png'; // Importez le fichier image
import 'animate.css'; // Importez animate.css
import { useTranslation } from 'react-i18next';

function Informations() {
    const{t} =useTranslation()
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            style={{ position: 'relative', minHeight: 'calc(100vh - 56px)', marginTop: '-50px', textAlign: 'center', background: `url(${devImage}) no-repeat center center fixed`, backgroundSize: 'cover' }} // Apply motion styles here
            id='home'
        >
            <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', color: '#fff', width: '90%', zIndex: 1 }}>
                {/* Ajoutez le texte d'information */}
                <motion.p className="animate__animated animate__swing" style={{ fontSize: '3em', marginBottom: '0.5em' }}> {t("greeting")}</motion.p>
                <motion.p className="animate__animated animate__swing" style={{ fontSize: '2em', marginTop: 0 }}>{t("profession")}</motion.p>
               
    
            </div>
        </motion.div>
    );
}

export default Informations;
