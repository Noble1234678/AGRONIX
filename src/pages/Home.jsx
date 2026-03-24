import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Music, ShieldCheck, Plane, Mail, MapPin, Phone } from 'lucide-react';
import PlantGrowth from '../components/PlantGrowth';

// Assets
import backgroundHero from '../assets/background.jpg';
import bgAbout from '../assets/bg2.jpg';
import bgEvents from '../assets/bg3.jpg';
import bgRegister from '../assets/bg4.jpg';
import bgContact from '../assets/bg5.png';
import tech from "../assets/tech.png"

const Home = () => {
    return (
        <div>
            {/* 1. HOME SECTION - background.jpg */}
            <section id="home" className="section hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', width: '100%' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
                    <img src={backgroundHero} alt="Hero Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="bg-img-overlay"></div>
                </div>

                <div className="container" style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="badge animate-arise" style={{ marginBottom: '1.5rem', display: 'inline-block', fontSize: '0.9rem', letterSpacing: '2px', boxShadow: '0 0 15px rgba(74, 222, 128, 0.3)' }}>
                        DEPARTMENT OF Agricultural Engineering
                    </span>
                    <h3 className="animate-arise delay-1" style={{ color: 'var(--text-dim)', fontSize: '1.2rem', marginBottom: '0.5rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
                        - Proudly Presents -
                    </h3>
                    <h1 className="zenzora-animated zenzora-title" style={{ margin: '1rem 0' }}>
                        ZENZORA
                    </h1>
                    <h2 className="hero-subtitle-animated" style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', marginBottom: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        A NATIONAL LEVEL INTER-COLLEGE SYMPOSIUM
                    </h2>
                    <p className="animate-arise delay-4 desc-lg" style={{ color: 'var(--text-main)', maxWidth: '800px', margin: '0 auto 2.5rem', fontSize: '1.1rem', letterSpacing: '1px' }}>
                        <strong className="glow-date" style={{ fontSize: '1.3rem' }}>April 08, 2K26</strong><br />
                        <span style={{ color: 'var(--text-dim)', marginTop: '0.5rem', display: 'block' }}>VENUE: SUGUNA COLLEGE OF ENGINEERING, COIMBATORE</span>
                    </p>
                    <div className="animate-arise delay-5" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#events" className="btn btn-primary" style={{ background: 'var(--primary-green)', color: 'var(--dark-bg)', padding: '0.8rem 2.5rem', borderRadius: '12px', fontWeight: 800, textDecoration: 'none', fontSize: '0.9rem', transition: 'var(--transition)' }}>DISCOVER EVENTS</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDhRMwjGfE1VF7HsMeHB3ERRvEUVvbJ-oZZdPhjAHNbUt13w/viewform?usp=dialog" target="_blank" rel="noopener noreferrer"  className="btn" style={{ border: '2px solid var(--primary-green)', color: 'var(--primary-green)', padding: '0.8rem 2.5rem', borderRadius: '12px', fontWeight: 800, textDecoration: 'none', fontSize: '0.9rem', transition: 'var(--transition)' }}>GET REGISTERED</a>
                    </div>
                </div>
            </section>

            {/* 2. ABOUT SECTION - bg2.jpg */}
            <section id="about" className="section">
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15 }}>
                    <img src={bgAbout} alt="About Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', minHeight: '60vh' }}>
                        <div className="reveal">
                            <span className="badge">Our Vision</span>
                            <h2 className="grad-text" style={{ margin: '1rem 0' }}>Farming the Future</h2>
                            <p className="desc-lg" style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>
                                ZENZORA 2K26 is where traditional farming meets modern engineering.
                                We explore AI crop monitoring, smart irrigation, and robotic harvesting
                                to build a sustainable world.
                            </p>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ color: 'var(--primary-green)', fontSize: '2rem' }}>200+</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 700 }}>EXPECTING PARTICIPANTS</p>
                                </div>
                                <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
                                <div>
                                    <h4 style={{ color: 'var(--primary-green)', fontSize: '2rem' }}>10+</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 700 }}>INSTITUTIONS</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass reveal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                            <PlantGrowth />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. EVENTS SECTION - bg3.jpg */}
            <section id="events" className="section" style={{ background: 'var(--dark-surface)' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.1 }}>
                    <img src={bgEvents} alt="Events Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
                        <span className="badge">Main Arena</span>
                        <h2 style={{ margin: '1rem 0' }}>Symposium Tracks</h2>
                        <p className="desc-lg" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Choose your path and showcase your engineering prowess.</p>
                    </div>

                    <div className="grid-2" style={{ gap: '2rem' }}>
                        {/* Technical Card */}
                        <Link to="/technical" className="reveal event-card" style={{ textDecoration: 'none', padding: '1rem' }}>
                            <div style={{ height: '350px', borderRadius: '15px', overflow: 'hidden', position: 'relative' }}>
                                <img src={tech} alt="Technical" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,15,10,0.9), transparent)' }}></div>
                                <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem' }}>
                                    <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.1rem' }}>Technical Events</h3>
                                    <p style={{ color: 'var(--primary-green)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px' }}>CORE ENGINEERING</p>
                                </div>
                            </div>
                        </Link>

                        {/* Non-Technical Card */}
                        <Link to="/non-technical" className="reveal event-card" style={{ textDecoration: 'none', padding: '1rem' }}>
                            <div style={{ height: '350px', borderRadius: '15px', overflow: 'hidden', position: 'relative' }}>
                                <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200" alt="Non-Technical" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,15,10,0.9), transparent)' }}></div>
                                <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem' }}>
                                    <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.1rem' }}>Non-Technical</h3>
                                    <p style={{ color: '#fbbf24', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px' }}>CREATIVE TALENT</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. REGISTER SECTION - bg4.jpg */}
            <section id="register" className="section">
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15 }}>
                    <img src={bgRegister} alt="Register Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }} className="reveal">
                        <span className="badge">Registration Hub</span>
                        <h2 className="grad-text" style={{ margin: '1rem 0' }}>Seed Your Success</h2>
                        <p className="desc-lg" style={{ color: 'var(--text-dim)', marginBottom: '3rem' }}>
                            Ready to join the agricultural revolution? Group registrations and
                            individual entries are now open for all technical and non-technical tracks.
                        </p>

                        <div className="glass" style={{ border: '1px solid var(--primary-green)', padding: '3rem 2rem' }}>
                            <div className="grid-3" style={{ textAlign: 'left', marginBottom: '3rem', width: '100%' }}>
                                <div>
                                    <label style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>Schedule</label>
                                    <h4 style={{ fontSize: '1.4rem' }}>APRIL 8, 2026</h4>
                                </div>
                                <div>
                                    <label style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>Entry Fee</label>
                                    <h4 style={{ fontSize: '1.4rem' }}>₹200 / Participant</h4>
                                </div>
                                <div>
                                    <label style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>Prizes</label>
                                    <h4 style={{ fontSize: '1.4rem' }}>Win Exciting Prizes</h4>
                                </div>
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDhRMwjGfE1VF7HsMeHB3ERRvEUVvbJ-oZZdPhjAHNbUt13w/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-block', textDecoration: 'none', background: 'var(--primary-green)', color: 'var(--dark-bg)', padding: '1rem 4rem', borderRadius: '12px', fontWeight: 800, border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                                REGISTER NOW
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CONTACT SECTION - bg5.png */}
            <section id="contact" className="section" style={{ background: 'var(--dark-surface)' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.1 }}>
                    <img src={bgContact} alt="Contact Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="container">
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="badge">Direct Help</span>
                        <h2 style={{ margin: '1rem 0' }}>Contact Our Team</h2>
                    </div>

                    <div className="grid-3">
                        <div className="glass reveal" style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ background: 'rgba(74, 222, 128, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-green)' }}>
                                <Mail size={24} />
                            </div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Inquiries</h4>
                            <p style={{ fontSize: '0.9rem' }}>zenzora2k26@gmail.com</p>
                        </div>
                        <div className="glass reveal" style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ background: 'rgba(74, 222, 128, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-green)' }}>
                                <Phone size={24} />
                            </div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Helpline</h4>
                            <p style={{ fontSize: '0.9rem' }}>+91 98765 43210</p>
                        </div>
                        <div className="glass reveal" style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ background: 'rgba(74, 222, 128, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-green)' }}>
                                <MapPin size={24} />
                            </div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Location</h4>
                            <p style={{ fontSize: '0.9rem' }}>SCE, Coimbatore, TN</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
