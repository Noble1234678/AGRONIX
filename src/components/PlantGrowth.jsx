import React, { useState, useEffect } from 'react';
import { Sprout } from 'lucide-react';

const PlantGrowth = () => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const t1 = setTimeout(() => setStage(1), 600);
        const t2 = setTimeout(() => setStage(2), 2000);
        const t3 = setTimeout(() => setStage(3), 3500);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    const sizes = [0, 36, 64, 96];
    const colors = ['transparent', '#bbf7d0', '#4ade80', '#22c55e'];
    const labels = ['Preparing soil...', '🌱 Seed planted', '🌿 Sprouting...', '🌳 Innovation blooms!'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1rem' }}>
            <div style={{ width: '140px', height: '140px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                {stage >= 1 && (
                    <div className="plant-grow">
                        <Sprout size={sizes[stage]} color={colors[stage]} />
                    </div>
                )}
            </div>
            <p style={{ marginTop: '1rem', color: '#bbf7d0', fontWeight: 600, fontSize: '0.9rem', textAlign: 'center' }}>
                {labels[stage]}
            </p>
        </div>
    );
};

export default PlantGrowth;
