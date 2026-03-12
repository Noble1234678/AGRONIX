import React from 'react';
import { Link } from 'react-router-dom';
import { Music, PlayCircle, Trophy, Video, Camera, ArrowLeft, Gamepad2, Stars } from 'lucide-react';
import bgEvents from '../assets/bg3.jpg';
import nonTechPoster from '../assets/non_tech_poster.png';

const NonTechnicalEvents = () => {
    const events = [
        { title: "Dancing (Solo / Group)", icon: <Stars size={32} />, desc: "Groove to the rhythm and set the stage on fire." },
        { title: "Start Music", icon: <Music size={32} />, desc: "Recognize the beats and win the musical clash." },
        { title: "E-Sports (Free Fire)", icon: <Gamepad2 size={32} />, desc: "Clash in the virtual arena for the ultimate booyah." },
        { title: "Reels Making", icon: <Video size={32} />, desc: "Unleash your creativity in the world of short-form video." },
        { title: "Bioscope", icon: <Camera size={32} />, desc: "Capture the essence through your photography lens." }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--dark-bg)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 0 }}>
                <img src={bgEvents} alt="Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', textDecoration: 'none', fontWeight: 700, marginBottom: '3rem' }}>
                    <ArrowLeft size={18} /> Back to Home
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
                    <div className="reveal">
                        <span className="badge" style={{ color: '#fbbf24', background: 'rgba(251, 191, 36, 0.1)' }}>Fun & Talent</span>
                        <h2 style={{ fontSize: '3.5rem', marginTop: '1rem', color: '#fbbf24' }}>Non-Technical Events</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem 0' }}>
                            Unleash your artistic flair and competitive spirit. From music and dance to gaming and filmmaking,
                            showcase your talents beyond the technical world.
                        </p>
                    </div>
                    <div className="reveal" style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(251, 191, 36, 0.2)', height: '300px' }}>
                        <img src={nonTechPoster} alt="Non-Technical Poster" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {events.map((event, i) => (
                        <div key={i} className="glass reveal" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                            <div style={{ color: '#fbbf24', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
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

export default NonTechnicalEvents;
