import React from 'react';
import { animated, useSpring } from 'react-spring';
import { motion } from 'framer-motion';
import 'animate.css/animate.min.css';
import macosLogo from './images/Apple.jpg';
import bootstrapLogo from './images/Bootstrap.png';
import jsLogo from './images/JS.png';
import nodeLogo from './images/Node js.png';
import SkillsBackground from './images/Skills.jpg';
import windowsLogo from './images/Windows.png';
import cssLogo from './images/logo css.png';
import htmlLogo from './images/logo html.jpg';
import reactLogo from './images/react.png';
import { useTranslation } from 'react-i18next'; 

function Compétences() {
    const { t } = useTranslation();
    const compétences = [
        { nom: "HTML", niveau: "intermediaire", logo: htmlLogo },
        { nom: "CSS", niveau: "intermediaire", logo: cssLogo },
        { nom: "Bootstrap", niveau: "intermediaire", logo: bootstrapLogo },
        { nom: "JavaScript", niveau: "debutant", logo: jsLogo },
        { nom: "React", niveau: "debutant", logo: reactLogo },
        { nom: "Node.js", niveau: "debutant", logo: nodeLogo }
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

    const backgroundSpring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 },
    });

    return (
        <animated.div className="container-fluid" style={{ ...backgroundSpring, backgroundImage: `url(${SkillsBackground})`, backgroundSize: 'cover', minHeight: 'calc(100vh - 56px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="container compétences-container" id='skill'>
                                    <h1 className="text-center bg-white p-2 d-inline-block mx-auto animate__animated animate__swing mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                                        {t("skills")}
                                    </h1>
                                    {compétences.map(comp => (
                                        <motion.button
                                            key={comp.nom}
                                            className={`compétence ${comp.niveau} mb-4 d-flex flex-column flex-lg-row align-items-center animate__animated animate__swing`}
                                            style={{ cursor: 'pointer', border: 'none', background: 'white', padding: 0 }}
                                            whileHover={{ scale: 1.05 }} // Effet hover de Framer Motion
                                        >
                                            <img src={comp.logo} className="img-fluid mr-3" alt={comp.nom} style={{ width: '100px', height: '100px', maxWidth: '100px', maxHeight: '100px' }} />
                                            <div className="d-flex flex-column align-items-center">
                                                <div className="progress mb-2" style={{ height: '20px', width: '200px' }}>
                                                    <div className="progress-bar" style={{ width: getProgressWidth(comp.niveau) }}></div>
                                                </div>
                                                <p className="text-center">{comp.nom}</p>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="container" id='os'>
                                    <h1 className="text-center bg-white p-2 d-inline-block mx-auto animate__animated animate__swing mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                                        {t("operatingSystems")}
                                    </h1>
                                    {operatingSystems.map(os => (
                                        <motion.button
                                            key={os.nom}
                                            className={`os mb-4 d-flex flex-column flex-lg-row align-items-center card animate__animated animate__swing`}
                                            style={{ width: '200px', cursor: 'pointer', border: 'none', background: 'white', padding: 0 }}
                                            whileHover={{ scale: 1.05 }} // Effet hover de Framer Motion
                                        >
                                            <img src={os.logo} className="card-img-top" alt={os.nom} style={{ width: '80px', height: '80px', maxWidth: '80px', maxHeight: '80px' }} />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{os.nom}</h5>
                                                <div className="progress" style={{ height: '20px' }}>
                                                    <div className="progress-bar" style={{ width: getProgressWidth(os.niveau) }}></div>
                                                </div>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default Compétences;
