import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Video, Camera, ArrowLeft, Gamepad2, Stars } from 'lucide-react';
import EventCard from '../components/EventCard';

import bgEvents from '../assets/bg3.jpg';

const NonTechnicalEvents = () => {
    const events = [
        {
            title: "Dancing (Solo / Group)",
            icon: <Stars size={24} />,
            desc: "The Dancing event gives participants an opportunity to showcase their talent, creativity, and passion for dance. Participants can perform individually or as a group in any dance style. This event adds energy and entertainment to the symposium while encouraging artistic expression.",
            poster: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&q=80&w=1200",
            color: "#fbbf24"
        },
        {
            title: "Start Music",
            icon: <Music size={24} />,
            desc: "Start Music is a fun musical event where participants showcase their singing or musical talent. Individuals or teams can perform songs or musical pieces in their preferred style. The event celebrates creativity, rhythm, and musical expression.",
            poster: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200",
            color: "#f59e0b"
        },
        {
            title: "E-Sports (Free Fire)",
            icon: <Gamepad2 size={24} />,
            desc: "The E-Sports event features the popular mobile game Garena Free Fire. Participants will compete in exciting matches that test their strategy, teamwork, and gaming skills. The event provides a thrilling competitive gaming experience for players and spectators.",
            poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200",
            color: "#d97706"
        },
        {
            title: "Reels Making",
            icon: <Video size={24} />,
            desc: "The Reels Making event challenges participants to create short, creative, and engaging video reels. Participants can showcase storytelling, editing skills, humor, or creative ideas through short videos. The best reels will be judged based on creativity, originality, and presentation.",
            poster: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
            color: "#fbbf24"
        },
        {
            title: "Bioscope",
            icon: <Camera size={24} />,
            desc: "Bioscope is an entertaining event where participants present short films, visual stories, or creative video content. Teams can showcase their storytelling skills through creative videos, documentaries, or mini films. The event highlights creativity, imagination, and visual communication.",
            poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
            color: "#fde68a"
        }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--dark-bg)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Lines Animation */}
            <div className="moving-line" style={{ top: '30%', opacity: 0.1, background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)' }}></div>
            <div className="moving-line" style={{ top: '70%', opacity: 0.1, background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)', animationDelay: '-4s' }}></div>

            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 0 }}>
                <img src={bgEvents} alt="Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', textDecoration: 'none', fontWeight: 800, marginBottom: '3rem', fontSize: '0.9rem', position: 'relative', zIndex: 10 }}>
                    <ArrowLeft size={18} /> BACK TO FIELD
                </Link>

                <div className="reveal active" style={{ marginBottom: '5rem', position: 'relative', zIndex: 10 }}>
                    <span className="badge" style={{ color: '#fbbf24', background: 'rgba(251, 191, 36, 0.1)' }}>Talent Unleashed</span>
                    <h2 style={{ margin: '1rem 0', color: '#fbbf24' }}>Non-Technical Arena</h2>
                    <p className="desc-lg" style={{ maxWidth: '800px', color: 'var(--text-dim)' }}>
                        Step out of the lab and onto the stage. The Non-Technical category celebrates art, rhythm,
                        and digital creativity.
                    </p>
                </div>

                <div className="events-list">
                    {events.map((event, i) => (
                        <EventCard key={i} {...event} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NonTechnicalEvents;
