import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-animate" style={{ padding: '4rem 0 2rem', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                    <Leaf size={28} color="var(--primary-green)" />
                    <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px' }}>AGRONIX 2K26</span>
                </div>

                <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '2rem' }}>
                    <Link to="/" className="footer-link" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Home</Link>
                    <Link to="/technical" className="footer-link" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Technical</Link>
                    <Link to="/non-technical" className="footer-link" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Non-Technical</Link>
                </div>

                <div style={{ textAlign: 'center', color: 'var(--text-dim)', opacity: 0.9, fontSize: '0.95rem', marginBottom: '2rem' }}>
                    <p style={{ marginBottom: '0.3rem' }}>Organised by Department of Agriculture Engineering</p>
                    <p style={{ fontWeight: 800, color: '#fff' }}>Suguna College of Engineering</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> info@agronix2k26.org</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> Coimbatore, Tamil Nadu</span>
                </div>

                <div style={{ width: '100px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--primary-green), transparent)', margin: '2rem auto 1.5rem' }}></div>
                <p style={{ color: 'var(--text-muted)', opacity: 0.6, fontSize: '0.85rem', textAlign: 'center' }}>© 2026 AGRONIX. Powering Knowledge & Innovation.</p>
            </div>
        </footer>
    );
};

export default Footer;
