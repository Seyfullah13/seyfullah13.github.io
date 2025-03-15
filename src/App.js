import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrollbar from 'smooth-scrollbar';
import Competences from "./Compétences";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Portfolio from "./Portfolio";
import "./index.css";
import Avatar from "./Avatar";

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
