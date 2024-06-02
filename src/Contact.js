import emailjs from '@emailjs/browser';
import 'animate.css';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import ContactBackground from './images/Contact.jpg';
import { useTranslation } from 'react-i18next';

function Contact() {
  const{t} =useTranslation()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oa2dlp2', 'template_j8ib7sm', form.current, 'cX9kDL9nRV9ha0Krg')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );

    e.target.reset();
  };

  const buttonHover = {
    scale: 1.1,
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div
      className="container-fluid animate__animated animate__bounceIn"
      style={{
        backgroundImage: `url(${ContactBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
          <div className="text-center animate__animated animate__headShake">
            <h1 id="Contact" style={{ color: 'black', marginBottom: '20px' }}>Contact</h1>
          </div>
          <div className="text-center">
            <Form
              ref={form}
              onSubmit={sendEmail}
              style={{ padding: '40px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            >
              <div className="row mb-3">
                <div className="col-4 offset-2 col-md-2 offset-md-4">
                  <Form.Group controlId="firstName">
                    <Form.Control type="text" name="firstName" placeholder={t("surname")} />
                  </Form.Group>
                </div>
                <div className="col-4 col-md-2">
                  <Form.Group controlId="lastName">
                    <Form.Control type="text" name="lastName" placeholder={t("name")} />
                  </Form.Group>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-8 offset-2 col-md-4 offset-md-4">
                  <Form.Group controlId="email">
                    <Form.Control type="email" name="email" placeholder={t("mail")} />
                  </Form.Group>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-8 offset-2 col-md-4 offset-md-4">
                  <Form.Group controlId="subject">
                    <Form.Control type="text" name="subject" placeholder={t("object")}  />
                  </Form.Group>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-8 offset-2 col-md-4 offset-md-4">
                  <Form.Group controlId="message">
                    <Form.Control as="textarea" rows={4} name="message" placeholder={t("message")} />
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-8 offset-2 col-md-4 offset-md-4 text-center">
                  <motion.button
                    type="submit"
                    className="btn btn-warning me-2"
                    whileHover={buttonHover}
                  >
                   {t("button3")}
                  </motion.button>
                  <motion.button
                    type="reset"
                    className="btn btn-warning"
                    whileHover={buttonHover}
                  >
                    {t("button4")}
                  </motion.button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center mt-3">
        <div className="col-md-6">
          <div className="text-center">
            <p><strong>   {t("contact")}</strong></p>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="mb-3">
                <a
                  href="https://www.linkedin.com/in/seyfullah13"
                  target="_blank"
                  rel="noopener noreferrer"
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
              <div>
                <p><strong><FaPhone size={24} /> <a href="tel:+33698674726" style={{ color: 'black' }}>+33 6 98 67 47 26</a></strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
