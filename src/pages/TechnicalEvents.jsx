import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, BookOpen, Mic, ArrowLeft } from 'lucide-react';
import bgEvents from '../assets/bg3.jpg';
import techPoster from '../assets/tech_poster.png';

const TechnicalEvents = () => {
    const events = [
        { title: "Poster Presentation", icon: <Monitor size={32} />, desc: "Showcase your technical innovation on a visual canvas." },
        { title: "Paper Presentation", icon: <BookOpen size={32} />, desc: "Present your research papers to our expert jury." },
        { title: "Tech Talk", icon: <Mic size={32} />, desc: "A platform to share your insights on emerging technologies." }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--dark-bg)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 0 }}>
                <img src={bgEvents} alt="Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-green)', textDecoration: 'none', fontWeight: 700, marginBottom: '3rem' }}>
                    <ArrowLeft size={18} /> Back to Home
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
                    <div className="reveal">
                        <span className="badge">Categories</span>
                        <h2 className="grad-text" style={{ fontSize: '3.5rem', marginTop: '1rem' }}>Technical Events</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem 0' }}>
                            Push the boundaries of agriculture engineering with these core technical challenges. Present your findings,
                            innovative designs, and tech visions to a national audience.
                        </p>
                    </div>
                    <div className="reveal" style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--glass-border)', height: '300px' }}>
                        <img src={techPoster} alt="Technical Poster" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {events.map((event, i) => (
                        <div key={i} className="glass reveal" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
                            <div style={{ color: 'var(--primary-green)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                {event.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{event.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{event.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnicalEvents;
