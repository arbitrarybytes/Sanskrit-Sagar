/**
 * Om symbol component — the iconic Sanskrit symbol.
 * Optionally animated with a pulsing glow.
 */
const Om = ({ size = 80, color = '#E8C547', anim = true }) => (
    <span
        className={anim ? 'om-pulse' : ''}
        style={{
            fontSize: size,
            color,
            fontFamily: 'var(--font-sk)',
            lineHeight: 1,
            display: 'inline-block',
            userSelect: 'none',
        }}
    >
        ॐ
    </span>
);

export default Om;
