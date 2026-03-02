/**
 * Decorative rotating mandala ring layers.
 * Renders as absolutely-positioned concentric circles that slowly rotate,
 * alternating direction, creating a subtle meditative background effect.
 */
const RINGS = [
    { s: 280, speed: '22s', op: 0.08, rev: false },
    { s: 480, speed: '34s', op: 0.055, rev: true },
    { s: 680, speed: '50s', op: 0.035, rev: false },
    { s: 900, speed: '70s', op: 0.022, rev: true },
];

const Mandala = () => (
    <div
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 0,
            height: 0,
            pointerEvents: 'none',
        }}
    >
        {RINGS.map((r, i) => (
            <div
                key={i}
                style={{
                    position: 'absolute',
                    width: r.s,
                    height: r.s,
                    top: 0,
                    left: 0,
                    borderRadius: '50%',
                    border: `1px solid rgba(232,197,71,${r.op})`,
                    animation: `${r.rev ? 'mandalaRev' : 'mandala'} ${r.speed} linear infinite`,
                }}
            />
        ))}
    </div>
);

export default Mandala;
