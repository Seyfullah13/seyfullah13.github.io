import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Informations from "./Informations";
import Profil from "./Profil";
import Cv from "./CV";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Competences from "./Compétences";

function App() {
  return (
    <Router>
      <div className="background-container">
        <Header />
        <div className="content-container">
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
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
