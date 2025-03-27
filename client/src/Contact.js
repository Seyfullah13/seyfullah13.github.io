import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Control type="text" name="firstName" placeholder={t("surname")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Control type="text" name="lastName" placeholder={t("name")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" name="email" placeholder={t("mail")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="subject">
                <Form.Control type="text" name="subject" placeholder={t("object")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Control as="textarea" rows={6} name="message" placeholder={t("message")} />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" variant="info" className="me-2">
                  {t("button3")}
                </Button>
                <Button type="reset" variant="info">
                  {t("button4")}
                </Button>
              </div>
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
            <div className="d-flex justify-content-center align-items-center gap-2">
              <Button variant="info" onClick={() => openLink("https://fr.linkedin.com/in/seyfullah-ozdal2")}> 
                <FaLinkedin size={24} /> LinkedIn
              </Button>
              <Button variant="info" onClick={() => openLink("https://github.com/Seyfullah13")}> 
                <FaGithub size={24} /> GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
