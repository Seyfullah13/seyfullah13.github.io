import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cv from "./CV";
import Competences from "./Compétences";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Informations from "./Informations";
import Portfolio from "./Portfolio";
import Profil from "./Profil";

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

