import { useEffect } from 'react';

/**
 * Floating XP toast notification that animates upward then disappears.
 * Auto-dismisses after 1.6 seconds via onDone callback.
 */
const XPToast = ({ amount, onDone, th }) => {
    useEffect(() => {
        const t = setTimeout(onDone, 1600);
        return () => clearTimeout(t);
    }, [onDone]);

    return (
        <div
            className="xp-rise"
            style={{
                position: 'fixed',
                top: '18%',
                left: '50%',
                zIndex: 9999,
                pointerEvents: 'none',
                background: `linear-gradient(135deg, ${th.saffron}, ${th.gold})`,
                color: '#000',
                padding: '11px 28px',
                borderRadius: 50,
                fontFamily: 'var(--font-hd)',
                fontSize: '1.05rem',
                fontWeight: 700,
                boxShadow: `0 8px 32px ${th.saffron}60`,
            }}
        >
            +{amount} XP ✨
        </div>
    );
};

export default XPToast;
