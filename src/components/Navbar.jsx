import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            window.location.href = `/#${id}`;
            return;
        }
        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const links = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Events', id: 'events' },
        { label: 'Register', id: 'register' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, color: 'var(--primary-green)', textDecoration: 'none' }}>
                    <Leaf size={24} />
                    <span>AGRONIX 2K26</span>
                </Link>

                {/* Desktop Nav */}
                <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                            className="nav-link"
                            style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="mobile-nav" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--dark-surface)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                            style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
