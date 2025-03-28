import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import CalendarBackground from "./images/tech.png";
import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, Spinner, Alert } from 'react-bootstrap';

function Rdv() {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    startTime: '',
    raison: ''
  });
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch('/api/rendezvous')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error("Erreur lors du chargement des rendez-vous:", error));
  }, []);

  const handleDateClick = (info) => {
    setEventData({
      firstName: '',
      lastName: '',
      date: info.dateStr,
      startTime: '',
      raison: ''
    });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!eventData.firstName || !eventData.lastName || !eventData.startTime || !eventData.raison) {
      setErrorMessage(t("remplirTousChamps"));
      return false;
    }
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timePattern.test(eventData.startTime)) {
      setErrorMessage(t("formatHeureInvalide"));
      return false;
    }
    setErrorMessage(null);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    fetch('/api/rendezvous/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        if (data.success) {
          setEvents(prevEvents => [...prevEvents, {
            title: `${eventData.firstName} ${eventData.lastName} - ${eventData.raison}`,
            start: `${eventData.date}T${eventData.startTime}`
          }]);
          setShowModal(false);
        } else {
          setErrorMessage(t("erreurEnregistrement"));
        }
      })
      .catch(error => {
        setLoading(false);
        setErrorMessage(t("erreurReseau"));
      });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div style={{
        background: `url(${CalendarBackground}) no-repeat center center`,
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }} />

      <div style={{ position: 'relative', zIndex: 2, padding: '20px' }}>
        <h1 className="text-center mx-auto mb-5 p-3 text-white rounded mt-5"
          style={{ backgroundColor: "#1E3A8A", maxWidth: "300px" }}>
          {t("titre")}
        </h1>

        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px' }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{ start: "today prev,next", center: "title", end: "dayGridMonth,timeGridWeek,timeGridDay" }}
            height="calc(100vh - 120px)"
            dateClick={handleDateClick}
            events={events}
          />
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{t("rendezVous")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>{t("name")}</Form.Label>
              <Form.Control type="text" name="firstName" value={eventData.firstName} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>{t("surname")}</Form.Label>
              <Form.Control type="text" name="lastName" value={eventData.lastName} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>{t("heureDebut")}</Form.Label>
              <Form.Control type="time" name="startTime" value={eventData.startTime} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>{t("raison")}</Form.Label>
              <Form.Control as="textarea" name="raison" value={eventData.raison} onChange={handleInputChange} required />
            </Form.Group>
            <Button type="submit" disabled={loading} style={{ backgroundColor: '#06B6D4', color: '#333333' }}>
              {loading ? <Spinner animation="border" size="sm" /> : t("enregistrer")}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Rdv;
