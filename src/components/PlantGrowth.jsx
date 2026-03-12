import React, { useState, useEffect } from 'react';

const PlantGrowth = () => {
    return (
        <div className="neural-plant-container">
            <div className="scanner-line"></div>
            <svg viewBox="0 0 100 120" style={{ width: '100%', height: '100%' }}>
                {/* Digital Base */}
                <rect x="25" y="100" width="50" height="5" fill="#14532d" rx="2" />
                <rect x="35" y="105" width="30" height="3" fill="#065f46" rx="1" />

                {/* Neural Core */}
                <circle cx="50" cy="100" r="3" fill="#4ade80" className="core-pulse" />

                {/* Digital Stem */}
                <path
                    d="M50 100 L50 30"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    className="digital-path"
                />

                {/* Geometric Leaves */}
                <g className="leaf-geo-1">
                    <polygon points="50,80 30,70 20,85 50,80" fill="rgba(74, 222, 128, 0.4)" stroke="#4ade80" strokeWidth="0.5" />
                    <polygon points="50,80 70,70 80,85 50,80" fill="rgba(74, 222, 128, 0.4)" stroke="#4ade80" strokeWidth="0.5" />
                </g>

                <g className="leaf-geo-2">
                    <polygon points="50,55 35,40 25,55 50,55" fill="rgba(74, 222, 128, 0.6)" stroke="#4ade80" strokeWidth="0.5" />
                    <polygon points="50,55 65,40 75,55 50,55" fill="rgba(74, 222, 128, 0.6)" stroke="#4ade80" strokeWidth="0.5" />
                </g>

                <g className="leaf-geo-top">
                    <polygon points="50,30 40,10 50,0 60,10 50,30" fill="#4ade80" />
                </g>

                {/* Data Points */}
                <circle cx="40" cy="70" r="1.5" fill="#fff" className="data-dot" />
                <circle cx="60" cy="45" r="1.5" fill="#fff" className="data-dot" style={{ animationDelay: '0.5s' }} />
                <circle cx="50" cy="15" r="1.5" fill="#fff" className="data-dot" style={{ animationDelay: '1s' }} />
            </svg>

            <div className="stat-floater">STABILITY: 98.4%</div>

            <style>{`
                .neural-plant-container {
                    position: relative;
                    height: 200px;
                    width: 160px;
                    background: rgba(0,0,0,0.2);
                    border-radius: 20px;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 1px solid rgba(74, 222, 128, 0.1);
                    overflow: hidden;
                }

                .scanner-line {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(to right, transparent, #4ade80, transparent);
                    box-shadow: 0 0 15px #4ade80;
                    animation: scanMove 3s linear infinite;
                    z-index: 5;
                }

                @keyframes scanMove {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }

                .core-pulse {
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { r: 3; opacity: 1; }
                    50% { r: 5; opacity: 0.5; }
                }

                .digital-path {
                    stroke-dashoffset: 60;
                    animation: pathFlow 2s linear infinite;
                }

                @keyframes pathFlow {
                    to { stroke-dashoffset: 0; }
                }

                .leaf-geo-1, .leaf-geo-2, .leaf-geo-top {
                    transform-origin: center bottom;
                    animation: geoGrow 6s ease-in-out infinite;
                }

                @keyframes geoGrow {
                    0%, 100% { transform: scale(0.8) translateY(5px); opacity: 0.3; }
                    50% { transform: scale(1) translateY(0); opacity: 1; }
                }

                .data-dot {
                    animation: blink 1.5s infinite;
                }

                @keyframes blink {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 1; transform: scale(1.5); }
                }

                .stat-floater {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    font-size: 0.5rem;
                    font-family: monospace;
                    color: #4ade80;
                    background: rgba(0,0,0,0.5);
                    padding: 2px 5px;
                    border-radius: 4px;
                    letter-spacing: 1px;
                }
            `}</style>
        </div>
    );
};

export default PlantGrowth;
