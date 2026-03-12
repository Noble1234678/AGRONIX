import React from 'react';
import { Leaf } from 'lucide-react';

const FloatingLeaves = () => {
    const leaves = Array.from({ length: 14 });
    return (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            {leaves.map((_, i) => {
                const size = 16 + Math.random() * 18;
                const colors = ['#4ade80', '#bbf7d0', '#059669', '#86efac'];
                return (
                    <div
                        key={i}
                        className="leaf"
                        style={{
                            left: `${Math.random() * 100}vw`,
                            animationName: 'floatLeaf',
                            animationTimingFunction: 'linear',
                            animationIterationCount: 'infinite',
                            animationDelay: `${Math.random() * 14}s`,
                            animationDuration: `${14 + Math.random() * 12}s`,
                            color: colors[i % colors.length],
                            opacity: 0.12 + Math.random() * 0.15,
                        }}
                    >
                        <Leaf size={size} />
                    </div>
                );
            })}
        </div>
    );
};

export default FloatingLeaves;
