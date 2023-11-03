import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      
      {/* Add your portfolio and other components here as needed */}
      {/* Your custom content will go here */}

      <Footer />
    </Router>
  );
}

export default App;


