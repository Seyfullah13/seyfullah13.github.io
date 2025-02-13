import 'animate.css/animate.min.css';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import macosLogo from './images/Apple.jpg';
import bootstrapLogo from './images/Bootstrap.png';
import jsLogo from './images/JS.png';
import nodeLogo from './images/Node js.png';
import windowsLogo from './images/Windows.png';
import SkillsBackground from './images/tech.png';
import cssLogo from './images/logo css.png';
import htmlLogo from './images/logo html.jpg';
import mysqlLogo from './images/logo mySQL.webp';
import phpLogo from './images/logo php.webp';
import reactLogo from './images/react.png';

function Compétences() {
  const { t } = useTranslation();
  
  const frontEndSkills = [
    { nom: "HTML", niveau: "intermediaire", logo: htmlLogo },
    { nom: "CSS", niveau: "intermediaire", logo: cssLogo },
    { nom: "Bootstrap", niveau: "intermediaire", logo: bootstrapLogo },
    { nom: "JavaScript", niveau: "debutant", logo: jsLogo },
    { nom: "React", niveau: "debutant", logo: reactLogo }
  ];

  const backEndSkills = [
    { nom: "Node.js", niveau: "debutant", logo: nodeLogo },
    { nom: "MYSQL", niveau: "debutant", logo: mysqlLogo },
    { nom: "PHP", niveau: "debutant", logo: phpLogo }
  ];

  const operatingSystems = [
    { nom: "Windows", niveau: "intermediaire", logo: windowsLogo },
    { nom: "macOS", niveau: "intermediaire", logo: macosLogo },
  ];

  const getProgressWidth = (niveau) => {
    switch (niveau) {
      case "debutant":
        return "25%";
      case "intermediaire":
        return "50%";
      case "confirmé":
        return "100%";
      default:
        return "0%";
    }
  };

  const textAnimation = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeInOut" } // Utilisation de "easeInOut" pour une transition plus douce
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeInOut" } // Réduction de la durée de transition pour une sensation plus fluide
  };

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
      <div className="row">
        <div className="col-lg-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={buttonVariants.transition} // Utilisation des variants définis pour les boutons
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}
          >
            <h3 className="text-center">{t("Front End")}</h3>
            <div className="container compétences-container" id='frontend'>
              {frontEndSkills.map(comp => (
                <motion.button
                  key={comp.nom}
                  className={`compétence ${comp.niveau} mb-4 d-flex flex-column flex-lg-row align-items-center`}
                  style={{ cursor: 'pointer', border: 'none', background: 'white', padding: 0, width: '100%' }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={buttonVariants.transition}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={comp.logo} className="img-fluid mr-3" alt={comp.nom} style={{ width: '100px', height: '100px', maxWidth: '100px', maxHeight: '100px' }} />
                  <motion.div className="d-flex flex-column align-items-center" {...textAnimation}>
                    <div className="progress mb-2" style={{ height: '20px', width: '200px' }}>
                      <div className="progress-bar" style={{ width: getProgressWidth(comp.niveau) }}></div>
                    </div>
                    <p className="text-center">{comp.nom}</p>
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="col-lg-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={buttonVariants.transition} // Utilisation des variants définis pour les boutons
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}
          >
            <h3 className="text-center">{t("Back End")}</h3>
            <div className="container compétences-container" id='backend'>
              {backEndSkills.map(comp => (
                <motion.button
                  key={comp.nom}
                  className={`compétence ${comp.niveau} mb-4 d-flex flex-column flex-lg-row align-items-center`}
                  style={{ cursor: 'pointer', border: 'none', background: 'white', padding: 0, width: '100%' }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={buttonVariants.transition}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={comp.logo} className="img-fluid mr-3" alt={comp.nom} style={{ width: '100px', height: '100px', maxWidth: '100px', maxHeight: '100px' }} />
                  <motion.div className="d-flex flex-column align-items-center" {...textAnimation}>
                    <div className="progress mb-2" style={{ height: '20px', width: '200px' }}>
                      <div className="progress-bar" style={{ width: getProgressWidth(comp.niveau) }}></div>
                    </div>
                    <p className="text-center">{comp.nom}</p>
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="col-lg-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={buttonVariants.transition} // Utilisation des variants définis pour les boutons
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}
          >
            <h4 className="text-center">{t("Operating Systems")}</h4>
            <div className="container compétences-container" id='os'>
              {operatingSystems.map(os => (
                <motion.button
                  key={os.nom}
                  className={`os mb-4 d-flex flex-column flex-lg-row align-items-center`}
                  style={{ width: '100%', cursor: 'pointer', border: 'none', background: 'white', padding: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={buttonVariants.transition}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={os.logo} className="img-fluid mr-3" alt={os.nom} style={{ width: '100px', height: '100px', maxWidth: '100px', maxHeight: '100px' }} />
                  <motion.div className="d-flex flex-column align-items-center" {...textAnimation}>
                    <h5 className="card-title text-center">{os.nom}</h5>
                    <div className="progress" style={{ height: '20px', width: '200px' }}>
                      <div className="progress-bar" style={{ width: getProgressWidth(os.niveau) }}></div>
                    </div>
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Compétences;
