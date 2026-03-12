import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, BookOpen, Mic, ArrowLeft } from 'lucide-react';
import EventCard from '../components/EventCard';

import bgEvents from '../assets/bg3.jpg';

const TechnicalEvents = () => {
    const events = [
        {
            title: "Poster Presentation",
            icon: <Monitor size={24} />,
            desc: "The Poster Presentation event allows participants to present innovative ideas, research findings, or technical solutions related to agriculture and technology through creative posters. Teams will visually explain their concepts, methodology, and outcomes to judges and participants. The event encourages creativity, research thinking, and effective communication of technical knowledge",
            poster: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
            color: "#4ade80"
        },
        {
            title: "Paper Presentation",
            icon: <BookOpen size={24} />,
            desc: "The Paper Presentation event provides a platform for students to present research papers on emerging topics in agriculture, technology, and innovation. Participants will explain their research, findings, and solutions to real-world agricultural challenges. The event helps students develop research skills, analytical thinking, and professional presentation abilities.",
            poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
            color: "#22c55e"
        },
        {
            title: "Tech Talk",
            icon: <Mic size={24} />,
            desc: "Tech Talk is an interactive session where participants share knowledge, ideas, or innovations related to modern technology and agriculture. Students can present emerging technologies, future trends, or innovative solutions in a short and engaging talk. This event encourages knowledge sharing, confidence, and communication skills",
            poster: "https://images.unsplash.com/photo-1558444479-c86e4e65d96c?auto=format&fit=crop&q=80&w=1200",
            color: "#86efac"
        }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--dark-bg)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Lines Animation */}
            <div className="moving-line" style={{ top: '20%', opacity: 0.1 }}></div>
            <div className="moving-line" style={{ top: '60%', opacity: 0.1, animationDelay: '-3s' }}></div>

            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 0 }}>
                <img src={bgEvents} alt="Background" className="parallax-bg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-green)', textDecoration: 'none', fontWeight: 800, marginBottom: '3rem', fontSize: '0.9rem', position: 'relative', zIndex: 10 }}>
                    <ArrowLeft size={18} /> BACK TO FIELD
                </Link>

                <div className="reveal active" style={{ marginBottom: '5rem', position: 'relative', zIndex: 10 }}>
                    <span className="badge">Engineering Excellence</span>
                    <h2 style={{ margin: '1rem 0' }}>Technical Track</h2>
                    <p className="desc-lg" style={{ maxWidth: '800px', color: 'var(--text-dim)' }}>
                        Deep-dive into the core of agricultural engineering. Show us your research,
                        prototypes, and visionary technical solutions.
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

export default TechnicalEvents;
