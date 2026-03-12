import React, { useRef, useState } from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const EventCard = ({ title, icon, desc, poster, color = '#4ade80' }) => {
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });

        // Tilt effect
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (e.clientY - rect.top - centerY) / 20;
        const rotateY = (centerX - (e.clientX - rect.left)) / 20;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    };

    const handleRegister = () => {
        window.location.href = '/#register';
    };

    return (
        <div
            ref={cardRef}
            className="event-card-v3"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                '--glow-x': `${mousePos.x}%`,
                '--glow-y': `${mousePos.y}%`,
                '--accent-color': color
            }}
        >
            <div className="card-glass-glow"></div>

            <div className="card-grid">
                <div className="card-image-panel">
                    <img src={poster} alt={title} className="card-image" />
                    <div className="image-overlay"></div>
                    <div className="floating-tag">
                        <ShieldCheck size={14} /> CERTIFIED
                    </div>
                </div>

                <div className="card-content-panel">
                    <div className="card-header">
                        <div className="icon-container">
                            {icon}
                        </div>
                        <h3 className="card-title">{title}</h3>
                    </div>

                    <p className="card-description">{desc}</p>

                    <div className="card-footer">
                        <button onClick={handleRegister} className="register-btn-modern">
                            <span>REGISTER NOW</span>
                            <div className="btn-icon">
                                <ArrowUpRight size={18} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .event-card-v3 {
                    position: relative;
                    background: rgba(10, 31, 20, 0.6);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 24px;
                    overflow: hidden;
                    transition: transform 0.2s ease-out;
                    margin-bottom: 2rem;
                    z-index: 1;
                }

                .card-glass-glow {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(
                        circle at var(--glow-x) var(--glow-y),
                        rgba(var(--accent-rgb), 0.15) 0%,
                        transparent 50%
                    );
                    pointer-events: none;
                    z-index: 0;
                }

                .card-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 1.8fr;
                    height: 400px;
                }

                .card-image-panel {
                    position: relative;
                    overflow: hidden;
                }

                .card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
                }

                .event-card-v3:hover .card-image {
                    transform: scale(1.1);
                }

                .image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, transparent, rgba(10, 31, 20, 0.8));
                }

                .floating-tag {
                    position: absolute;
                    top: 1.5rem;
                    left: 1.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(5px);
                    padding: 0.4rem 0.8rem;
                    border-radius: 8px;
                    font-size: 0.7rem;
                    font-weight: 800;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    color: #fff;
                    letter-spacing: 1px;
                }

                .card-content-panel {
                    padding: 3rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1.2rem;
                    margin-bottom: 1.5rem;
                }

                .icon-container {
                    width: 50px;
                    height: 50px;
                    background: rgba(var(--accent-rgb), 0.1);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--accent-color);
                    border: 1px solid rgba(var(--accent-rgb), 0.2);
                }

                .card-title {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: #fff;
                    margin: 0;
                    letter-spacing: -0.5px;
                }

                .card-description {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 1rem;
                    line-height: 1.7;
                    margin-bottom: 2.5rem;
                }

                .register-btn-modern {
                    background: var(--accent-color);
                    color: #000;
                    border: none;
                    padding: 0.8rem 1.8rem;
                    border-radius: 12px;
                    font-weight: 900;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    cursor: pointer;
                    transition: all 0.4s;
                    width: fit-content;
                    letter-spacing: 1px;
                }

                .register-btn-modern:hover {
                    box-shadow: 0 10px 30px rgba(var(--accent-rgb), 0.4);
                    transform: translateY(-2px);
                    padding-right: 2.2rem;
                }

                @media (max-width: 900px) {
                    .card-grid {
                        grid-template-columns: 1fr;
                        height: auto;
                    }
                    .card-image-panel {
                        height: 250px;
                    }
                    .image-overlay {
                        background: linear-gradient(to top, rgba(10, 31, 20, 0.8), transparent);
                    }
                    .card-content-panel {
                        padding: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default EventCard;
