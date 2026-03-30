import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X, ArrowUpRight, Home, Info, Calendar, Mail, Rocket } from "lucide-react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [tractorPos, setTractorPos] = useState(0);
    const [tractorVisible, setTractorVisible] = useState(false);

    const location = useLocation();
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);

        // Prevent scroll when mobile menu is open
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    const scrollTo = (id) => {
        setIsOpen(false);
        if (location.pathname !== "/") {
            window.location.href = `/#${id}`;
            return;
        }
        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const elementPosition = el.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
        }
    };

    const handleMouseMove = (e) => {
        if (navRef.current) {
            const rect = navRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setTractorPos(x);
        }
    };

    const links = [
        { label: "Home", id: "home", icon: <Home size={24} /> },
        { label: "About", id: "about", icon: <Info size={24} /> },
        { label: "Events", id: "events", icon: <Calendar size={24} /> },
        { label: "Contact", id: "contact", icon: <Mail size={24} /> },
    ];

    return (
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isOpen ? "menu-open" : ""}`}>
                <div className="container nav-inner">
                    {/* Sun Rising decoration */}
                    <div className="nav-sun-bg"></div>

                    {/* LOGO */}
                    <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
                        <div className="logo-icon">
                            <Leaf size={22} />
                        </div>
                        <span className="logo-text">ZENZORA 2K26</span>
                    </Link>

                    {/* DESKTOP NAV */}
                    <div
                        className="nav-links desktop-only"
                        ref={navRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setTractorVisible(true)}
                        onMouseLeave={() => setTractorVisible(false)}
                    >
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(link.id);
                                }}
                                className="nav-link"
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="nav-path-line"></div>

                        {tractorVisible && (
                            <div className="nav-tractor" style={{ left: `${tractorPos}px` }}>
                                🚜
                            </div>
                        )}

                        <button
                            onClick={() => scrollTo("register")}
                            className="register-btn"
                            style={{ textDecoration: 'none' }}
                        >
                            Register <ArrowUpRight size={16} />
                        </button>
                    </div>

                    {/* MOBILE TOGGLE (Top Right) */}
                    <button
                        className="mobile-menu-trigger"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* FULLSCREEN MOBILE MENU */}
            <div className={`mobile-overlay ${isOpen ? "active" : ""}`}>
                <div className="mobile-menu-content">
                    <div className="mobile-links-container">
                        {links.map((link, i) => (
                            <button
                                key={link.id}
                                className="mobile-nav-item"
                                onClick={() => scrollTo(link.id)}
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <span className="item-icon">{link.icon}</span>
                                <span className="item-text">{link.label}</span>
                                <div className="item-arrow"><ArrowUpRight size={20} /></div>
                            </button>
                        ))}

                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeDhRMwjGfE1VF7HsMeHB3ERRvEUVvbJ-oZZdPhjAHNbUt13w/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mobile-nav-item register-highlight"
                            style={{ transitionDelay: `${links.length * 0.1}s`, textDecoration: 'none' }}
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="item-icon"><Rocket size={24} /></span>
                            <span className="item-text">Register Now</span>
                            <div className="item-arrow"><ArrowUpRight size={20} /></div>
                        </a>
                    </div>

                    <div className="mobile-menu-footer">
                        <p>© 2026 ZENZORA SYMPOSIUM</p>
                        <div className="footer-dots">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                /* NAVBAR CORE */
                .navbar {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 2000;
                    padding: 1.2rem 0;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .navbar.scrolled {
                    background: rgba(10, 20, 15, 0.85);
                    backdrop-filter: blur(20px);
                    padding: 0.8rem 0;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
                    border-bottom: 1px solid rgba(74, 222, 128, 0.1);
                }

                .nav-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                }

                .nav-sun-bg {
                    position: absolute;
                    top: -40px;
                    left: 20px;
                    width: 70px;
                    height: 70px;
                    background: radial-gradient(circle, #fbbf24 30%, transparent 70%);
                    border-radius: 50%;
                    filter: blur(15px);
                    opacity: 0.3;
                    z-index: -1;
                    animation: sunRiseNavbar 3s ease-out forwards;
                }

                @keyframes sunRiseNavbar {
                    0% { transform: translateY(30px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 0.3; }
                }

                .nav-logo {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                    z-index: 2001;
                }

                .logo-icon {
                    background: #4ade80;
                    color: #050f0a;
                    padding: 6px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 15px rgba(74, 222, 128, 0.3);
                }

                .logo-text {
                    font-size: 1.4rem;
                    font-weight: 900;
                    color: #4ade80;
                    letter-spacing: -1px;
                }

                /* DESKTOP NAV */
                .nav-links.desktop-only {
                    display: flex;
                    align-items: center;
                    position: relative;
                }

                .nav-link {
                    margin: 0 1.5rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.8);
                    text-decoration: none;
                    transition: 0.3s;
                    font-size: 0.95rem;
                }

                .nav-link:hover {
                    color: #4ade80;
                }

                .nav-path-line {
                    position: absolute;
                    bottom: -8px;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(to right, transparent, #4ade80, transparent);
                    opacity: 0.2;
                }

                .nav-tractor {
                    position: absolute;
                    bottom: -18px;
                    font-size: 20px;
                    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    pointer-events: none;
                }

                .register-btn {
                    margin-left: 2rem;
                    background: #4ade80;
                    color: #050f0a;
                    border: none;
                    padding: 10px 22px;
                    border-radius: 12px;
                    font-weight: 800;
                    cursor: pointer;
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    transition: 0.3s;
                }

                .register-btn:hover {
                    transform: translateY(-2px) scale(1.05);
                    box-shadow: 0 10px 20px rgba(74, 222, 128, 0.4);
                }

                /* MOBILE MENU TRIGGER */
                .mobile-menu-trigger {
                    display: none;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    cursor: pointer;
                    z-index: 2001;
                    align-items: center;
                    justify-content: center;
                    transition: 0.3s;
                }

                .mobile-menu-trigger:hover {
                    background: rgba(74, 222, 128, 0.2);
                    border-color: #4ade80;
                }

                /* MOBILE OVERLAY */
                .mobile-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #050f0a;
                    z-index: 1500;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 2rem;
                }

                .mobile-overlay::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at top right, rgba(74, 222, 128, 0.15), transparent);
                    pointer-events: none;
                }

                .mobile-overlay.active {
                    opacity: 1;
                    visibility: visible;
                }

                .mobile-menu-content {
                    position: relative;
                    z-index: 1;
                }

                .mobile-links-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .mobile-nav-item {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 1.5rem;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    gap: 1.2rem;
                    color: white;
                    text-decoration: none;
                    font-size: 1.3rem;
                    font-weight: 800;
                    text-align: left;
                    cursor: pointer;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .mobile-overlay.active .mobile-nav-item {
                    opacity: 1;
                    transform: translateY(0);
                }

                .mobile-nav-item:active {
                    background: rgba(74, 222, 128, 0.1);
                    border-color: #4ade80;
                    transform: scale(0.98);
                }

                .item-icon {
                    color: #4ade80;
                    background: rgba(74, 222, 128, 0.1);
                    padding: 10px;
                    border-radius: 12px;
                }

                .item-arrow {
                    margin-left: auto;
                    opacity: 0.3;
                    transition: 0.3s;
                }

                .mobile-nav-item:active .item-arrow {
                    opacity: 1;
                    transform: translateX(5px) translateY(-5px);
                }

                .register-highlight {
                    background: linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(74, 222, 128, 0.05));
                    border: 1px solid rgba(74, 222, 128, 0.3);
                }

                .register-highlight .item-icon {
                    background: #4ade80;
                    color: #050f0a;
                }

                .mobile-menu-footer {
                    margin-top: 3rem;
                    text-align: center;
                    opacity: 0.5;
                    font-size: 0.8rem;
                    letter-spacing: 1px;
                }

                .footer-dots {
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    margin-top: 10px;
                }

                .footer-dots span {
                    width: 6px;
                    height: 6px;
                    background: #4ade80;
                    border-radius: 50%;
                    animation: pulseDot 1.5s infinite ease-in-out;
                }

                .footer-dots span:nth-child(2) { animation-delay: 0.2s; }
                .footer-dots span:nth-child(3) { animation-delay: 0.4s; }

                @keyframes pulseDot {
                    0%, 100% { transform: scale(1); opacity: 0.3; }
                    50% { transform: scale(1.5); opacity: 1; }
                }

                /* RESPONSIVE */
                @media (max-width: 992px) {
                    .desktop-only { display: none !important; }
                    .mobile-menu-trigger { display: flex; }
                }

                @media (max-width: 480px) {
                    .mobile-nav-item {
                        padding: 1.2rem;
                        font-size: 1.1rem;
                    }
                    .logo-text { font-size: 1.2rem; }
                }
            `}</style>
        </>
    );
};

export default Navbar;