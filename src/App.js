import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Scrollbar from 'smooth-scrollbar';
import Cv from "./CV";
import Competences from "./Compétences";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Informations from "./Informations";
import Portfolio from "./Portfolio";
import Profil from "./Profil";
import './index.css';

function App() {
  useEffect(() => {
    Scrollbar.init(document.querySelector('#my-scrollbar'), {
      damping: 0.1,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: false,
      continuousScrolling: true,
    });
  }, []);

  return (
    <Router>
      <div className="background-container">
        <Header />
        <div id="my-scrollbar" className="scrollbar-container content-container">
          <main>
            <Routes>
              <Route path="/" element={<Informations />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/cv" element={<Cv />} />
              <Route path="/competences" element={<Competences />} />
              <Route path="/portfolio" element={<Portfolio />} />
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
