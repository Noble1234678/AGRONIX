import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SymposiumBackground from './components/SymposiumBackground';
import Home from './pages/Home';
import TechnicalEvents from './pages/TechnicalEvents';
import NonTechnicalEvents from './pages/NonTechnicalEvents';

// Styling
import './styles/globals.css';
import './styles/animations.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  useEffect(() => {
    const reveal = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    // Trigger once on load
    setTimeout(reveal, 800);

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <SymposiumBackground />
        <Navbar />
        <main style={{ position: 'relative', zIndex: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technical" element={<TechnicalEvents />} />
            <Route path="/non-technical" element={<NonTechnicalEvents />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
