/**
 * Decorative horizontal gradient divider line.
 */
const Divider = ({ color }) => (
    <div
        style={{
            width: 100,
            height: 2,
            margin: '0 auto',
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
    />
);

export default Divider;
