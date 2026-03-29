import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, BookOpen, Mic, ArrowLeft, Lightbulb } from 'lucide-react';
import EventCard from '../components/EventCard';

import bgEvents from '../assets/bg3.jpg';
import posterPresentation from '../assets/posters/poster_presentation.png';
import paperPresentation from '../assets/posters/paper_presentation.png';
import techTalk from '../assets/posters/tech_talk.png';
import wisdomWar from '../assets/posters/wisdomwar.png'

const TechnicalEvents = () => {
    const events = [
        {
            title: "E-Poster Presentation",
            icon: <Monitor size={24} />,
            desc: "Participants prepare and present an attractive e-poster based on the given topic. The e-poster should clearly explain the idea using images, charts, and short points. This event tests creativity, clarity, and presentation skills.",
            poster: posterPresentation,
            color: "#4ade80"
        },
        {
            title: "Paper Presentation",
            icon: <BookOpen size={24} />,
            desc: "Participants present their ideas, research, or innovative concepts related to the given topic in front of the judges. It is a great opportunity to share knowledge, improve presentation skills, and show creativity in explaining the subject.",
            poster: paperPresentation,
            color: "#22c55e"
        },
        {
            title: "Tech Talk",
            icon: <Mic size={24} />,
            desc: "Participants deliver a short and interesting speech on a technical or informative topic. This event helps students express their ideas confidently, improve communication skills, and share useful knowledge with the audience.",
            poster: techTalk,
            color: "#86efac"
        },
        {
            title: "Wisdom War",
            icon: <Lightbulb size={24} />,
            desc: "A fun and exciting quiz competition that tests participants’ knowledge, thinking speed, and teamwork. Questions may be based on academics, current affairs, general knowledge, and technical topics.",
            poster: wisdomWar,
            color: "#34d399"
        }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--dark-bg)', position: 'relative', overflow: 'hidden' }}>
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
