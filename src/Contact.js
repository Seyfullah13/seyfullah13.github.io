import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactBackground from './images/tech.png';

function Contact() {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Simulating email sending
    console.log('Sending email...');
    setTimeout(() => {
      console.log('Email sent successfully!');
      e.target.reset();
    }, 1000);
  };

  const textAnimation = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "linear" }
  };

  const buttonAnimation = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "linear" } }
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${ContactBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <motion.div className="row justify-content-center align-items-center" initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="col-12 col-md-8 col-lg-6">
          <motion.div className="text-center" {...textAnimation}>
        <h1 id="Contact" style={{
          color: 'white',
          marginBottom: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '10px',
          display: 'inline-block',
          padding: '10px 20px'
        }}>Contact</h1>
          </motion.div>
          <motion.div className="text-center" {...textAnimation}>
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

              <div className="row">
                <div className="col-12 text-center">
                  <motion.button
                    type="submit"
                    className="btn btn-warning me-2"
                    {...buttonAnimation}
                  >
                    {t("button3")}
                  </motion.button>
                  <motion.button
                    type="reset"
                    className="btn btn-warning"
                    {...buttonAnimation}
                  >
                    {t("button4")}
                  </motion.button>
                </div>
              </div>
            </Form>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="row justify-content-center align-items-center mt-3" initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="col-md-6">
          <motion.div className="text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }} {...textAnimation}>
            <p><strong>{t("contact")}</strong></p>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="mb-3">
              <a
  href="https://fr.linkedin.com/in/seyfullah-ozdal2"
  target="_blank"
  rel="noopener   noreferrer"
  className="me-2"
  style={{ color: 'black' }}
>
  <FaLinkedin size={24} /> LinkedIn
</a>

                <a
                  href="https://github.com/Seyfullah13"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'black' }}
                >
                  <FaGithub size={24} /> GitHub
                </a>
              </div>
           
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
