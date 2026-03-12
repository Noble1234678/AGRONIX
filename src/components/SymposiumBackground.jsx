import React from 'react';
import FloatingLeaves from './FloatingLeaves';

const SymposiumBackground = () => {
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'var(--dark-bg)' }}>
            {/* Global Floating Leaves */}
            <FloatingLeaves />

            {/* Dark Ambient Gradient */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 50% -20%, #0d2818 0%, rgba(5,15,10,0) 70%)',
                opacity: 0.6
            }} />
        </div>
    );
};

export default SymposiumBackground;
