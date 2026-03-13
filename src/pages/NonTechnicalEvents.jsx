import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Video, Camera, ArrowLeft, Gamepad2, Stars } from 'lucide-react';
import EventCard from '../components/EventCard';

import bgEvents from '../assets/bg3.jpg';
import dancingPoster from '../assets/posters/dancing.png';
import musicPoster from '../assets/posters/start_music.png';
import esportsPoster from '../assets/posters/esports.png';
import reelsPoster from '../assets/posters/reels_making.png';
import bioscopePoster from '../assets/posters/bioscope.png';

const NonTechnicalEvents = () => {
    const events = [
        {
            title: "Dancing (Solo / Group)",
            icon: <Stars size={24} />,
            desc: "The Dancing event gives participants an opportunity to showcase their talent, creativity, and passion for dance. Participants can perform individually or as a group in any dance style. This event adds energy and entertainment to the symposium while encouraging artistic expression.",
            poster: dancingPoster,
            color: "#fbbf24"
        },
        {
            title: "Start Music",
            icon: <Music size={24} />,
            desc: "Start Music is a fun musical event where participants showcase their singing or musical talent. Individuals or teams can perform songs or musical pieces in their preferred style. The event celebrates creativity, rhythm, and musical expression.",
            poster: musicPoster,
            color: "#f59e0b"
        },
        {
            title: "E-Sports (Free Fire)",
            icon: <Gamepad2 size={24} />,
            desc: "The E-Sports event features the popular mobile game Garena Free Fire. Participants will compete in exciting matches that test their strategy, teamwork, and gaming skills. The event provides a thrilling competitive gaming experience for players and spectators.",
            poster: esportsPoster,
            color: "#d97706"
        },
        {
            title: "Reels Making",
            icon: <Video size={24} />,
            desc: "The Reels Making event challenges participants to create short, creative, and engaging video reels. Participants can showcase storytelling, editing skills, humor, or creative ideas through short videos. The best reels will be judged based on creativity, originality, and presentation.",
            poster: reelsPoster,
            color: "#fbbf24"
        },
        {
            title: "Bioscope",
            icon: <Camera size={24} />,
            desc: "Bioscope is an entertaining event where participants present short films, visual stories, or creative video content. Teams can showcase their storytelling skills through creative videos, documentaries, or mini films. The event highlights creativity, imagination, and visual communication.",
            poster: bioscopePoster,
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
