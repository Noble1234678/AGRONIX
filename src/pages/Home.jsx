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
import techPoster from '../assets/tech_poster.png';
import nonTechPoster from '../assets/non_tech_poster.png';

const Home = () => {
    return (
        <div>
            {/* 1. HOME SECTION - background.jpg */}
            <section id="home" className="section hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <img src={backgroundHero} alt="Hero Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="bg-img-overlay"></div>
                </div>

                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="badge animate-fade">National Level Symposium</span>
                    <h1 className="animate-fade delay-1 animate-warp" style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', margin: '1rem 0' }}>
                        AGRONIX <span className="grad-text">2K26</span>
                    </h1>
                    <p className="animate-fade delay-2" style={{ fontSize: '1.2rem', color: 'var(--text-dim)', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                        Exploring Innovation in Agriculture Engineering <br />
                        <strong>Suguna College of Engineering</strong>
                    </p>
                    <div className="animate-fade delay-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#events" className="btn btn-primary" style={{ background: 'var(--primary-green)', color: 'var(--dark-bg)', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 800, textDecoration: 'none' }}>Explore Events</a>
                        <a href="#register" className="btn" style={{ border: '1px solid var(--primary-green)', color: 'var(--primary-green)', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 800, textDecoration: 'none' }}>Register Now</a>
                    </div>
                </div>
            </section>

            {/* 2. ABOUT SECTION - bg2.jpg */}
            <section id="about" className="section">
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15 }}>
                    <img src={bgAbout} alt="About Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div className="reveal">
                            <span className="badge">About the Event</span>
                            <h2 className="grad-text" style={{ fontSize: '3rem', margin: '1rem 0' }}>Symposium Description</h2>
                            <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                                AGRONIX 2K26 is a premier platform designed to ignite the spark of innovation among budding agriculture engineers.
                                We bring together researchers, enthusiasts, and industry experts to discuss sustainable technologies, AI integration,
                                and revolutionary farming practices.
                            </p>
                            <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                                This symposium hosts a series of technical and non-technical challenges carefully curated to test your skills,
                                creativity, and knowledge in the diverse fields of modern agriculture.
                            </p>

                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ color: 'var(--primary-green)', fontSize: '2rem' }}>500+</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Students Expected</p>
                                </div>
                                <div style={{ width: '2px', background: 'var(--glass-border)' }}></div>
                                <div>
                                    <h4 style={{ color: 'var(--primary-green)', fontSize: '2rem' }}>20+</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Events Planned</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass reveal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
                        <span className="badge">The Main Stage</span>
                        <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>Our Major Categories</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Select a category to view the list of events and competitions.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '3rem' }}>
                        {/* Technical Poster */}
                        <Link to="/technical" className="reveal" style={{ textDecoration: 'none' }}>
                            <div className="glass" style={{ padding: '1rem', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '400px', overflow: 'hidden', borderRadius: '15px', position: 'relative' }}>
                                    <img src={techPoster} alt="Technical Events Poster" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                                        <div style={{ background: 'var(--primary-green)', color: 'var(--dark-bg)', padding: '0.5rem 1rem', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                                            <Monitor size={18} /> Technical
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem', flex: 1 }}>
                                    <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Technical Events</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Paper presentation, Poster presentation, and Technical talks.</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-green)', fontWeight: 700 }}>
                                        View Details <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Non-Technical Poster */}
                        <Link to="/non-technical" className="reveal" style={{ textDecoration: 'none' }}>
                            <div className="glass" style={{ padding: '1rem', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '400px', overflow: 'hidden', borderRadius: '15px', position: 'relative' }}>
                                    <img src={nonTechPoster} alt="Non-Technical Events Poster" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                                        <div style={{ background: '#fbbf24', color: 'var(--dark-bg)', padding: '0.5rem 1rem', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                                            <Music size={18} /> Non-Technical
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem', flex: 1 }}>
                                    <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Non-Technical</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Dance, Music, E-Sports, Reels, and Bioscope.</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', fontWeight: 700 }}>
                                        View Details <ArrowRight size={18} />
                                    </div>
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
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} className="reveal">
                        <span className="badge">Registration Details</span>
                        <h2 className="grad-text" style={{ fontSize: '3rem', margin: '1rem 0' }}>Join the Innovation</h2>
                        <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                            Participation in AGRONIX 2K26 offers students a chance to network with peers, showcase their projects, and win exciting prizes.
                            Registration covers access to all events, symposium kits, lunch, and participation certificates for all registered candidates.
                            <br /><br />
                            <strong>Registration Closing: March 30, 2026.</strong>
                        </p>

                        <div className="glass" style={{ padding: '3rem', border: '1px solid var(--primary-green)' }}>
                            <h3 style={{ marginBottom: '2rem' }}>Symposium Registration</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'left', marginBottom: '3rem' }}>
                                <div>
                                    <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Event Dates</label>
                                    <p style={{ fontWeight: 700 }}>June 15 - 18, 2026</p>
                                </div>
                                <div>
                                    <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Registration Fee</label>
                                    <p style={{ fontWeight: 700 }}>₹250 per Head</p>
                                </div>
                                <div>
                                    <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Overall Prize Pool</label>
                                    <p style={{ fontWeight: 700 }}>₹50,000+</p>
                                </div>
                            </div>
                            <button className="btn btn-primary" style={{ background: 'var(--primary-green)', color: 'var(--dark-bg)', padding: '1rem 3.5rem', borderRadius: '50px', fontWeight: 800, border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                                Register for AGRONIX
                            </button>
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
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
                        <span className="badge">Get in Touch</span>
                        <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>Contact Us</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>If you have any questions, feel free to contact our coordinators.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="glass reveal" style={{ textAlign: 'center' }}>
                            <div style={{ background: 'rgba(74, 222, 128, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-green)' }}>
                                <Mail size={28} />
                            </div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Email Us</h4>
                            <p style={{ color: 'var(--text-dim)' }}>info@agronix2k26.org</p>
                        </div>
                        <div className="glass reveal" style={{ textAlign: 'center' }}>
                            <div style={{ background: 'rgba(74, 222, 128, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-green)' }}>
                                <Phone size={28} />
                            </div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Call Us</h4>
                            <p style={{ color: 'var(--text-dim)' }}>+91 98765 43210</p>
                        </div>
                        <div className="glass reveal" style={{ textAlign: 'center' }}>
                            <div style={{ background: 'rgba(74, 222, 128, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-green)' }}>
                                <MapPin size={28} />
                            </div>
                            <h4 style={{ marginBottom: '0.5rem' }}>Visit Us</h4>
                            <p style={{ color: 'var(--text-dim)' }}>SCE, Coimbatore, TN</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
