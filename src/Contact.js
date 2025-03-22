import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ContactBackground from './images/tech.png';

function Contact() {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Sending email...');
    setTimeout(() => {
      console.log('Email sent successfully!');
      e.target.reset();
    }, 1000);
  };

  return (
    <motion.div
      className="container-fluid"
      style={{
        backgroundImage: `url(${ContactBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="row justify-content-center align-items-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="col-12 col-md-8 col-lg-6">
          <div className="text-center">
            <motion.h1
              id="Contact"
              style={{
                color: 'white',
                marginBottom: '20px',
                backgroundColor: '#1E3A8A',
                borderRadius: '10px',
                display: 'inline-block',
                padding: '10px 20px',
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              Contact
            </motion.h1>
          </div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Form
              ref={form}
              onSubmit={sendEmail}
              style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            >
              <div className="row mb-3">
                <div className="col-12 col-md-6 mb-2 mb-md-0">
                  <Form.Group controlId="firstName">
                    <Form.Control type="text" name="firstName" placeholder={t("surname")} />
                  </Form.Group>
                </div>
                <div className="col-12 col-md-6">
                  <Form.Group controlId="lastName">
                    <Form.Control type="text" name="lastName" placeholder={t("name")} />
                  </Form.Group>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <Form.Group controlId="email">
                    <Form.Control type="email" name="email" placeholder={t("mail")} />
                  </Form.Group>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <Form.Group controlId="subject">
                    <Form.Control type="text" name="subject" placeholder={t("object")} />
                  </Form.Group>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <Form.Group controlId="message">
                    <Form.Control as="textarea" rows={6} name="message" placeholder={t("message")} />
                  </Form.Group>
                </div>
              </div>

              <motion.div className="row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <div className="col-12 text-center">
                  <button type="submit" className="btn me-2" style={{ backgroundColor: '#06B6D4', color: '#333333' }}>
                    {t("button3")}
                  </button>
                  <button type="reset" className="btn" style={{ backgroundColor: '#06B6D4', color: '#333333' }}>
                    {t("button4")}
                  </button>
                </div>
              </motion.div>
            </Form>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="row justify-content-center align-items-center mt-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="col-md-6">
          <motion.div
            className="text-center"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p><strong>{t("contact")}</strong></p>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="mb-3">
                <a href="https://fr.linkedin.com/in/seyfullah-ozdal2" target="_blank" rel="noopener noreferrer" className="me-2" style={{ color: 'black' }}>
                  <FaLinkedin size={24} /> LinkedIn
                </a>
                <a href="https://github.com/Seyfullah13" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                  <FaGithub size={24} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
