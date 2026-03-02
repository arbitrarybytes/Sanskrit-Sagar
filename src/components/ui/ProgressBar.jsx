/**
 * Animated horizontal progress bar.
 * Uses the CSS class `progress-bar` for animation.
 */
const ProgressBar = ({ value, max, th }) => {
    const pct = Math.min((value / max) * 100, 100);
    return (
        <div style={{ height: 7, background: th.border, borderRadius: 4, overflow: 'hidden' }}>
            <div
                className="progress-bar"
                style={{
                    height: '100%',
                    width: `${pct}%`,
                    background: `linear-gradient(90deg, ${th.saffron}, ${th.gold})`,
                    borderRadius: 4,
                }}
            />
        </div>
    );
};

export default ProgressBar;
