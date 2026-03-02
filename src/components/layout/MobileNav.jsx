import { NAV_ITEMS } from '../../data/constants.js';

/**
 * Mobile bottom navigation — pill-shaped, frosted glass.
 * Shows on screens < 768px. Only icons + short label.
 */
const MobileNav = ({ active, onNav, lang, th, dm }) => {
    return (
        <nav
            className="glass-panel hide-desktop"
            aria-label="Main navigation"
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                background: dm ? 'rgba(7,3,15,0.94)' : 'rgba(255,248,238,0.96)',
                borderTop: `1px solid ${th.border}`,
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                padding: '6px 4px 10px',
                display: 'flex',
            }}
        >
            {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => onNav(item.id)}
                        className="btn-press"
                        aria-current={isActive ? 'page' : undefined}
                        aria-label={item.label}
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 2,
                            padding: '6px 2px',
                            background: isActive ? `${th.gold}12` : 'transparent',
                            border: 'none',
                            borderRadius: 12,
                            cursor: 'pointer',
                            color: isActive ? th.gold : th.textMuted,
                            position: 'relative',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        {isActive && (
                            <div style={{
                                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                                width: 24, height: 2.5, borderRadius: '0 0 4px 4px',
                                background: `linear-gradient(90deg, ${th.saffron}, ${th.gold})`,
                            }} />
                        )}
                        <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{item.emoji}</span>
                        <span style={{
                            fontFamily: lang === 'hi' ? 'var(--font-sk)' : 'var(--font-ui)',
                            fontSize: lang === 'hi' ? '0.62rem' : '0.58rem',
                            fontWeight: isActive ? 600 : 400,
                            lineHeight: 1,
                            whiteSpace: 'nowrap',
                        }}>
                            {lang === 'hi' ? item.labelHi : item.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
};

export default MobileNav;
