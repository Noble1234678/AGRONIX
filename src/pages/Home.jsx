import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Music, ShieldCheck, Plane, Mail, MapPin, Phone, Leaf, Droplet, Navigation, Smartphone, Globe, Cpu, Zap, Recycle } from 'lucide-react';
import PlantGrowth from '../components/PlantGrowth';

// Assets
import backgroundHero from '../assets/background.jpg';
import bgAbout from '../assets/bg2.jpg';
import bgEvents from '../assets/bg3.jpg';
import bgRegister from '../assets/bg4.jpg';
import bgContact from '../assets/bg5.png';
import tech from "../assets/tech.png"
import topics from "../assets/bg6.png"
import collegeLogo from "../assets/college-logo.png"

const presentationTopics = [
    { title: "Climate Smart Agriculture Technologies", icon: <Leaf size={24} /> },
    { title: "IoT Based Smart Irrigation System", icon: <Droplet size={24} /> },
    { title: "Drone Applications in Agriculture", icon: <Navigation size={24} /> },
    { title: "Mobile Apps for Farmers", icon: <Smartphone size={24} /> },
    { title: "GIS and Remote Sensing for Climate Monitoring", icon: <Globe size={24} /> },
    { title: "Agricultural Robotics", icon: <Cpu size={24} /> },
    { title: "Renewable Energy Powered Farm Equipment", icon: <Zap size={24} /> },
    { title: "Waste to Energy Technologies", icon: <Recycle size={24} /> }
];

const Home = () => {
    return (
        <div style={{ overflowX: 'hidden', width: '100%' }}>
            {/* 1. HOME SECTION - background.jpg */}
            <section id="home" className="section hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', width: '100%' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
                    <img src={backgroundHero} alt="Hero Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="bg-img-overlay"></div>
                </div>

                <div className="container" style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="animate-arise" style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                        <a href="https://sugunace.com" target="_blank" rel="noopener noreferrer">
                            <img 
                                src={collegeLogo} 
                                alt="Suguna College of Engineering" 
                                style={{ 
                                    height: 'auto', 
                                    maxHeight: '120px', 
                                    objectFit: 'contain', 
                                    filter: 'brightness(0.8) drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))', 
                                    transition: 'all 0.3s ease' 
                                }} 
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.filter = 'brightness(0.95) drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))';
                                }} 
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.filter = 'brightness(0.8) drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))';
                                }} 
                            />
                        </a>
                    </div>
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
                        A SYMPOSIUM EVENT
                    </h2>
                    <p className="animate-arise delay-4 desc-lg" style={{ color: 'var(--text-main)', maxWidth: '800px', margin: '0 auto 2.5rem', fontSize: '1.1rem', letterSpacing: '1px' }}>
                        <strong className="glow-date" style={{ fontSize: '1.3rem' }}>April 08, 2026</strong><br />
                        <span style={{ color: 'var(--text-dim)', marginTop: '0.5rem', display: 'block' }}>VENUE: SUGUNA COLLEGE OF ENGINEERING, COIMBATORE</span>
                    </p>
                    <div className="animate-arise delay-5" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#events" className="btn btn-primary" style={{ background: 'var(--primary-green)', color: 'var(--dark-bg)', padding: '0.8rem 2.5rem', borderRadius: '12px', fontWeight: 800, textDecoration: 'none', fontSize: '0.9rem', transition: 'var(--transition)' }}>DISCOVER EVENTS</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDhRMwjGfE1VF7HsMeHB3ERRvEUVvbJ-oZZdPhjAHNbUt13w/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn" style={{ border: '2px solid var(--primary-green)', color: 'var(--primary-green)', padding: '0.8rem 2.5rem', borderRadius: '12px', fontWeight: 800, textDecoration: 'none', fontSize: '0.9rem', transition: 'var(--transition)' }}>GET REGISTERED</a>
                    </div>
                </div>
            </section>

            {/* 2. ABOUT SECTION - bg2.jpg */}
            <section id="about" className="section">
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15, overflow: 'hidden' }}>
                    <img src={bgAbout} alt="About Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', minHeight: '60vh' }}>
                        <div className="reveal">
                            <span className="badge">Our Vision</span>
                            <h2 className="grad-text" style={{ margin: '1rem 0' }}>Farming the Future</h2>
                            <p className="desc-lg" style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>
                                ZENZORA 2026 is an innovative symposium by the Agriculture Department where Agriculture meets modern technology 🌱🤖.
                                It highlights AI-based crop monitoring, smart irrigation, and advanced agricultural solutions.
                                The event encourages students to explore new ideas that improve productivity and sustainability.
                                ZENZORA 2026 aims to inspire future innovators to build smarter agriculture for tomorrow. 🚜✨
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
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.1, overflow: 'hidden' }}>
                    <img src={bgEvents} alt="Events Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
                        <span className="badge">Main Arena</span>
                        <h2 style={{ margin: '1rem 0' }}>Symposium Tracks</h2>
                        <p className="desc-lg" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Choose your path and showcase your engineering powers.</p>
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

            {/* TOPICS SECTION */}
            <section id="topics" className="section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--dark-surface)' }}>
                {/* Responsive Background image suitable for above section */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15, overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at top, rgba(74, 222, 128, 0.2) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
                    <img src={topics} alt="Topics Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="badge">Knowledge Hub</span>
                        <h2 className="grad-text" style={{ margin: '1rem 0' }}>Presentation Topics</h2>
                        <p className="desc-lg" style={{ color: 'var(--text-dim)', maxWidth: '700px', margin: '0 auto' }}>
                            Explore our curated list of topics for your presentations and papers. Choose a domain that sparks your innovation.
                        </p>
                    </div>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                        gap: '2rem' 
                    }}>
                        {presentationTopics.map((topic, index) => (
                            <div key={index} className="reveal product-card" style={{ 
                                padding: '2.5rem 1.5rem', 
                                display: 'flex', 
                                flexDirection: 'column',
                                alignItems: 'center', 
                                textAlign: 'center',
                                gap: '1.2rem', 
                                borderRadius: '20px',
                                background: 'linear-gradient(145deg, rgba(15, 30, 20, 0.8), rgba(5, 10, 5, 0.9))',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                                border: '1px solid rgba(74, 222, 128, 0.05)',
                                borderTop: '2px solid rgba(74, 222, 128, 0.4)',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'default'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(74, 222, 128, 0.15)';
                                e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.2)';
                                e.currentTarget.style.borderTopColor = 'var(--primary-green)';
                                const iconWrap = e.currentTarget.querySelector('.icon-wrapper');
                                if (iconWrap) {
                                    iconWrap.style.transform = 'scale(1.1) rotate(5deg)';
                                    iconWrap.style.background = 'var(--primary-green)';
                                    iconWrap.style.color = '#050f0a';
                                    iconWrap.style.boxShadow = '0 0 20px rgba(74, 222, 128, 0.4)';
                                }
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                                e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.05)';
                                e.currentTarget.style.borderTopColor = 'rgba(74, 222, 128, 0.4)';
                                const iconWrap = e.currentTarget.querySelector('.icon-wrapper');
                                if (iconWrap) {
                                    iconWrap.style.transform = 'scale(1) rotate(0deg)';
                                    iconWrap.style.background = 'rgba(74, 222, 128, 0.1)';
                                    iconWrap.style.color = 'var(--primary-green)';
                                    iconWrap.style.boxShadow = 'inset 0 0 20px rgba(74, 222, 128, 0.1)';
                                }
                            }}>
                                <div className="icon-wrapper" style={{ 
                                    background: 'rgba(74, 222, 128, 0.1)', 
                                    color: 'var(--primary-green)', 
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.4s ease',
                                    boxShadow: 'inset 0 0 20px rgba(74, 222, 128, 0.1)',
                                    marginBottom: '0.5rem'
                                }}>
                                    {topic.icon}
                                </div>
                                <div style={{ width: '100%' }}>
                                    <h4 style={{ 
                                        fontSize: '1.2rem', 
                                        margin: '0 0 1rem 0', 
                                        lineHeight: 1.4, 
                                        color: '#ffffff',
                                        fontWeight: 700
                                    }}>
                                        {topic.title}
                                    </h4>
                                    <div style={{ width: '40px', height: '3px', background: 'var(--primary-green)', margin: '0 auto', borderRadius: '2px', opacity: 0.5 }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. REGISTER SECTION - bg4.jpg */}
            <section id="register" className="section">
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15, overflow: 'hidden' }}>
                    <img src={bgRegister} alt="Register Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }} className="reveal">
                        <span className="badge">Registration Hub</span>
                        <h2 className="grad-text" style={{ margin: '1rem 0' }}>Seed Your Success</h2>
                        <p className="desc-lg" style={{ color: 'var(--text-dim)', marginBottom: '3rem' }}>
                            Ready to join the agricultural revolution?
                            Individual entries are now open for all technical and non-technical tracks.
                        </p>

                        <div className="glass" style={{ border: '1px solid rgba(74, 222, 128, 0.2)', padding: '3.5rem', background: 'rgba(10, 31, 20, 0.6)', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden' }}>
                            {/* Decorative Glow */}
                            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '200px', background: 'radial-gradient(ellipse, rgba(74,222,128,0.15) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

                            <div className="grid-3" style={{ textAlign: 'center', marginBottom: '2.5rem', width: '100%', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <label style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Schedule</label>
                                    <h4 style={{ fontSize: '1.5rem', marginTop: '0.5rem', fontWeight: 900 }}>APRIL 8, 2026</h4>
                                </div>
                                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <label style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Entry Fee</label>
                                    <h4 style={{ fontSize: '1.5rem', marginTop: '0.5rem', fontWeight: 900 }}>₹200 <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ Per Person</span></h4>
                                </div>
                                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <label style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Rewards</label>
                                    <h4 style={{ fontSize: '1.5rem', marginTop: '0.5rem', fontWeight: 900 }}>Exciting Prizes</h4>
                                </div>
                            </div>

                            <div style={{ background: 'rgba(74, 222, 128, 0.1)', borderLeft: '4px solid var(--primary-green)', padding: '1.8rem', textAlign: 'left', marginBottom: '3rem', borderRadius: '0 12px 12px 0', position: 'relative', zIndex: 1 }}>
                                <h5 style={{ color: 'var(--primary-green)', marginBottom: '0.8rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                    <ShieldCheck size={20} /> Important Guidelines
                                </h5>
                                <ul style={{ color: 'var(--text-main)', fontSize: '1rem', margin: 0, paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                                    <li>Participants can register for a maximum of <strong>two events</strong> per entry fee.</li>

                                </ul>
                            </div>

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDhRMwjGfE1VF7HsMeHB3ERRvEUVvbJ-oZZdPhjAHNbUt13w/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-hover-glow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', background: 'var(--primary-green)', color: '#050f0a', padding: '1.2rem 4rem', borderRadius: '14px', fontWeight: 900, border: 'none', cursor: 'pointer', fontSize: '1.1rem', transition: 'all 0.3s', boxShadow: '0 10px 30px rgba(74, 222, 128, 0.3)', position: 'relative', zIndex: 1 }}>
                                PROCEED TO REGISTER <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CONTACT SECTION - bg5.png */}
            <section id="contact" className="section" style={{ background: 'var(--dark-surface)' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.1, overflow: 'hidden' }}>
                    <img src={bgContact} alt="Contact Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="container">
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="badge">Direct Help</span>
                        <h2 style={{ margin: '1rem 0' }}>Contact Our Team</h2>
                    </div>

                    <div className="grid-3">
                        <div className="glass reveal" style={{ textAlign: 'center', padding: '2rem', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'} onClick={() => window.location.href = 'mailto:zenzora2k26@gmail.com'}>
                            <div style={{ background: 'rgba(74, 222, 128, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-green)' }}>
                                <Mail size={24} />
                            </div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Inquiries</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-green)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-main)'}>zenzora2k26@gmail.com</p>
                        </div>
                        <div className="glass reveal" style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ background: 'rgba(74, 222, 128, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-green)' }}>
                                <Phone size={24} />
                            </div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Coordinators</h4>
                            <a href="tel:+916380325475" style={{ textDecoration: 'none', color: 'var(--text-main)', display: 'block', margin: '0 0 0.3rem 0', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-green)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-main)'}>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>MONISH KUMAR M : +91 6380325475</p>
                            </a>
                            <a href="tel:+919043757931" style={{ textDecoration: 'none', color: 'var(--text-main)', display: 'block', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-green)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-main)'}>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>PRAMILA R :  +91 9043757931</p>
                            </a>
                        </div>
                        <div className="glass reveal" style={{ textAlign: 'center', padding: '2rem', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'} onClick={() => window.open('https://maps.google.com/?q=Suguna+College+of+Engineering,+Coimbatore', '_blank')}>
                            <div style={{ background: 'rgba(74, 222, 128, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-green)' }}>
                                <MapPin size={24} />
                            </div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Location</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-green)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-main)'}>Suguna College of Engineering, Coimbatore, Tamil Nadu</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
