import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
    <Route path="/" element={<AboutMe />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/resume" element={<Resume />} />
</Routes>


      {/* The following section can be removed later, 
      it's just the original content for reference */}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
      {/* End of the original content */}

      <Footer />
    </Router>
  );
}

export default App;

