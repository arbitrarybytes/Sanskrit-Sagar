/**
 * Inline badge / pill tag with configurable color and background.
 */
const Tag = ({ children, color, bg }) => (
    <span
        style={{
            padding: '3px 12px',
            borderRadius: 50,
            background: bg || `${color}18`,
            color: color,
            fontSize: '0.78rem',
            fontFamily: 'var(--font-bd)',
        }}
    >
        {children}
    </span>
);

export default Tag;
