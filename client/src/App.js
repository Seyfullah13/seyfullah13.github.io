import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrollbar from 'smooth-scrollbar';
import LangagesdeProgrammation from './Langages de programmation';
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projet from "./Projet";
import "./index.css";
import Avatar from "./Avatar";
import Rdv from "./Rdv"; // Import the Rdv component

function App() {
  useEffect(() => {
    const scrollbarElement = document.querySelector("#my-scrollbar");
    if (scrollbarElement) {
      Scrollbar.init(scrollbarElement, {
        damping: 0.1,
        thumbMinSize: 20,
        renderByPixels: true,
        alwaysShowTracks: false,
        continuousScrolling: true,
      });
    }
  }, []);

  return (
    <Router>
      <div className="background-container">
        <Header />
        <div id="my-scrollbar" className="scrollbar-container content-container">
          <main>
            <Routes>
              <Route path="/" element={<Avatar />} />
              <Route path="/Langages-de-Programmation" element={<LangagesdeProgrammation />} />
              <Route path="/projet" element={<Projet />} />
              <Route path="/prise-de-rendez-vous" element={<Rdv />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
