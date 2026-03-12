import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SymposiumBackground from './components/SymposiumBackground';
import Home from './pages/Home';
import TechnicalEvents from './pages/TechnicalEvents';
import NonTechnicalEvents from './pages/NonTechnicalEvents';
import './styles/main.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    const reveal = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    setTimeout(reveal, 500);

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
