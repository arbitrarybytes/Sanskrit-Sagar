import { useMemo } from 'react';

/**
 * Floating particle sparkles — decorative ambient animation.
 * Uses randomized positions, delays, and sizes (stable across re-renders via useMemo).
 */
const Sparkle = ({ th }) => {
    const dots = useMemo(
        () =>
            Array.from({ length: 16 }, (_, i) => ({
                id: i,
                left: `${5 + Math.random() * 90}%`,
                delay: `${Math.random() * 6}s`,
                dur: `${5 + Math.random() * 5}s`,
                size: 2 + Math.random() * 5,
                color: i % 3 === 0 ? th.saffron : th.gold,
            })),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {dots.map((d) => (
                <div
                    key={d.id}
                    style={{
                        position: 'absolute',
                        bottom: '-10px',
                        left: d.left,
                        width: d.size,
                        height: d.size,
                        borderRadius: '50%',
                        background: d.color,
                        opacity: 0.7,
                        animation: `particleFloat ${d.dur} ${d.delay} ease-in infinite`,
                    }}
                />
            ))}
        </div>
    );
};

export default Sparkle;
