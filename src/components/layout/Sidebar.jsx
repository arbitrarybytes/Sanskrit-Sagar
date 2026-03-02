import { NAV_ITEMS } from '../../data/constants.js';
import { IconHome, IconTimeline, IconAlphabet, IconMantra, IconBook, IconPoetry, IconTarget, IconSun, IconMoon, IconPlus, IconMinus, IconGlobe } from '../ui/Icons.jsx';
import Om from '../ui/Om.jsx';

const ICON_MAP = {
    home: IconHome, timeline: IconTimeline, varnamala: IconAlphabet,
    mantras: IconMantra, shabdakosh: IconBook, kavya: IconPoetry, abhyas: IconTarget,
};

/**
 * Desktop sidebar — frosted glass, premium feel.
 * Shows navigation, mode toggle, theme toggle, font size, and language toggle.
 */
const Sidebar = ({ active, onNav, dm, toggleDm, lang, toggleLang, mode, toggleMode, fontSize, setFontSize, xp, level, th }) => {
    return (
        <aside
            className="glass-panel hide-mobile"
            aria-label="Main navigation"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                width: 240,
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                background: dm ? 'rgba(7,3,15,0.88)' : 'rgba(255,248,238,0.92)',
                borderRight: `1px solid ${th.border}`,
                padding: '20px 0',
                backdropFilter: 'blur(28px) saturate(1.3)',
                WebkitBackdropFilter: 'blur(28px) saturate(1.3)',
            }}
        >
            {/* Brand */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 20px', marginBottom: 28 }}>
                <Om size={32} color={th.gold} anim={false} />
                <div>
                    <div style={{ fontFamily: 'var(--font-sk)', fontSize: '1.15rem', color: th.gold, lineHeight: 1.2 }}>
                        संस्कृत सागर
                    </div>
                    <div style={{ fontFamily: 'var(--font-hd)', fontSize: '0.58rem', color: th.textMuted, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                        Sanskrit Sāgar
                    </div>
                </div>
            </div>

            {/* XP / Level pill */}
            <div style={{ margin: '0 16px 22px', padding: '10px 14px', background: th.surfaceAlt, borderRadius: 14, border: `1px solid ${th.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: th.textMuted, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        {lang === 'hi' ? 'स्तर' : 'Level'} {level}
                    </span>
                    <span style={{ fontFamily: 'var(--font-hd)', fontSize: '0.78rem', color: th.gold }}>
                        {xp} XP
                    </span>
                </div>
                <div style={{ height: 4, borderRadius: 2, background: th.border, overflow: 'hidden' }}>
                    <div className="progress-bar" style={{ height: '100%', borderRadius: 2, width: `${xp % 100}%`, background: `linear-gradient(90deg, ${th.saffron}, ${th.gold})` }} />
                </div>
            </div>

            {/* Mode toggle: Kids / Scholar */}
            <div style={{ margin: '0 16px 18px' }}>
                <button
                    onClick={toggleMode}
                    className="btn-press"
                    aria-label={`Switch to ${mode === 'kids' ? 'Scholar' : 'Kids'} mode`}
                    style={{
                        width: '100%',
                        padding: '9px 14px',
                        background: mode === 'kids' ? `linear-gradient(135deg, #F06292, #AB47BC)` : `linear-gradient(135deg, ${th.saffron}, ${th.gold})`,
                        color: '#000',
                        border: 'none',
                        borderRadius: 10,
                        cursor: 'pointer',
                        fontFamily: 'var(--font-ui)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                    }}
                >
                    {mode === 'kids' ? '🧒 Bālaka Mode' : '🎓 Vidvān Mode'}
                </button>
            </div>

            {/* Nav items */}
            <nav style={{ flex: 1, overflow: 'auto', padding: '0 10px' }}>
                {NAV_ITEMS.map((item) => {
                    const isActive = active === item.id;
                    const Ic = ICON_MAP[item.id];
                    return (
                        <button
                            key={item.id}
                            id={`nav-${item.id}`}
                            onClick={() => onNav(item.id)}
                            className="btn-press"
                            aria-current={isActive ? 'page' : undefined}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                padding: '11px 14px',
                                marginBottom: 3,
                                background: isActive ? `${th.gold}14` : 'transparent',
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
                                    position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                                    width: 3, height: 22, borderRadius: '0 3px 3px 0',
                                    background: `linear-gradient(180deg, ${th.saffron}, ${th.gold})`,
                                }} />
                            )}
                            {Ic && <Ic size={18} color={isActive ? th.gold : th.textMuted} />}
                            <span style={{
                                fontFamily: lang === 'hi' ? 'var(--font-sk)' : 'var(--font-ui)',
                                fontSize: lang === 'hi' ? '0.95rem' : '0.82rem',
                                fontWeight: isActive ? 600 : 400,
                            }}>
                                {lang === 'hi' ? item.labelHi : item.label}
                            </span>
                        </button>
                    );
                })}
            </nav>

            {/* Bottom controls — accessibility */}
            <div style={{ padding: '12px 16px', borderTop: `1px solid ${th.border}` }}>
                {/* Font size */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', color: th.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {lang === 'hi' ? 'अक्षर' : 'Font'}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <button onClick={() => setFontSize(Math.max(0.85, fontSize - 0.05))} className="btn-press" aria-label="Decrease font size"
                            style={{ background: th.surfaceAlt, border: `1px solid ${th.border}`, borderRadius: 6, width: 26, height: 26, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: th.textMuted }}>
                            <IconMinus size={12} />
                        </button>
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: th.text, minWidth: 36, textAlign: 'center' }}>
                            {Math.round(fontSize * 100)}%
                        </span>
                        <button onClick={() => setFontSize(Math.min(1.35, fontSize + 0.05))} className="btn-press" aria-label="Increase font size"
                            style={{ background: th.surfaceAlt, border: `1px solid ${th.border}`, borderRadius: 6, width: 26, height: 26, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: th.textMuted }}>
                            <IconPlus size={12} />
                        </button>
                    </div>
                </div>

                {/* Language + Theme row */}
                <div style={{ display: 'flex', gap: 6 }}>
                    <button onClick={toggleLang} className="btn-press" aria-label="Toggle language"
                        style={{ flex: 1, padding: '7px 0', background: th.surfaceAlt, border: `1px solid ${th.border}`, borderRadius: 8, cursor: 'pointer', fontFamily: lang === 'hi' ? 'var(--font-ui)' : 'var(--font-sk)', fontSize: '0.82rem', color: th.text, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                        <IconGlobe size={14} color={th.textMuted} />
                        {lang === 'hi' ? 'EN' : 'हि'}
                    </button>
                    <button onClick={toggleDm} className="btn-press" aria-label={dm ? 'Light mode' : 'Dark mode'}
                        style={{ flex: 1, padding: '7px 0', background: th.surfaceAlt, border: `1px solid ${th.border}`, borderRadius: 8, cursor: 'pointer', color: th.text, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, fontSize: '0.82rem', fontFamily: 'var(--font-ui)' }}>
                        {dm ? <IconSun size={14} /> : <IconMoon size={14} />}
                        {dm ? (lang === 'hi' ? 'प्रकाश' : 'Light') : (lang === 'hi' ? 'अंधकार' : 'Dark')}
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
