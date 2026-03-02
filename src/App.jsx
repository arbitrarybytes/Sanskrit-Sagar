import { useState } from 'react';
import { THEME } from './theme.js';
import Sidebar from './components/layout/Sidebar.jsx';
import MobileNav from './components/layout/MobileNav.jsx';
import Onboarding from './components/screens/Onboarding.jsx';
import Timeline from './components/screens/Timeline.jsx';
import Varnamala from './components/learn/Varnamala.jsx';
import Mantras from './components/learn/Mantras.jsx';
import Shabdakosh from './components/learn/Shabdakosh.jsx';
import Kavya from './components/learn/Kavya.jsx';
import Abhyas from './components/learn/Abhyas.jsx';
import XPToast from './components/ui/XPToast.jsx';

/**
 * Root — Sanskrit Sāgar.
 *
 * Global state:
 *  - dm       : dark mode
 *  - screen   : current section id
 *  - lang     : 'en' | 'hi'
 *  - mode     : 'kids' | 'scholar'
 *  - xp       : total XP
 *  - level    : current level
 *  - fontSize : accessibility scaling factor (0.85 – 1.35)
 */
function App() {
    const [dm, setDm] = useState(true);
    const [screen, setScreen] = useState('home');
    const [lang, setLang] = useState('en');
    const [mode, setMode] = useState('scholar');
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const [fontSize, setFontSize] = useState(1.0);
    const [toastAmt, setToastAmt] = useState(null);
    const [toastKey, setToastKey] = useState(0);

    const th = THEME[dm ? 'dark' : 'light'];
    const toggleDm = () => setDm(d => !d);
    const toggleLang = () => setLang(l => l === 'en' ? 'hi' : 'en');
    const toggleMode = () => setMode(m => m === 'kids' ? 'scholar' : 'kids');

    const addXP = (n) => {
        setXp(prev => {
            const next = prev + n;
            setLevel(Math.floor(next / 100) + 1);
            return next;
        });
        setToastAmt(n);
        setToastKey(k => k + 1);
    };

    const fs = fontSize; // shorthand for passing

    const commonProps = { lang, th, dm, addXP, mode, fs };

    const renderScreen = () => {
        switch (screen) {
            case 'home': return <Onboarding onNav={setScreen} {...commonProps} />;
            case 'timeline': return <Timeline {...commonProps} />;
            case 'varnamala': return <Varnamala {...commonProps} />;
            case 'mantras': return <Mantras {...commonProps} />;
            case 'shabdakosh': return <Shabdakosh {...commonProps} />;
            case 'kavya': return <Kavya {...commonProps} />;
            case 'abhyas': return <Abhyas {...commonProps} />;
            default: return <Onboarding onNav={setScreen} {...commonProps} />;
        }
    };

    const isHome = screen === 'home';

    return (
        <div style={{ background: th.bg, color: th.text, minHeight: '100vh', fontFamily: 'var(--font-bd)' }}>
            {/* Sidebar — desktop */}
            <Sidebar
                active={screen}
                onNav={setScreen}
                dm={dm}
                toggleDm={toggleDm}
                lang={lang}
                toggleLang={toggleLang}
                mode={mode}
                toggleMode={toggleMode}
                fontSize={fontSize}
                setFontSize={setFontSize}
                xp={xp}
                level={level}
                th={th}
            />

            {/* Mobile nav — bottom */}
            <MobileNav active={screen} onNav={setScreen} lang={lang} th={th} dm={dm} />

            {/* Main content — offset for sidebar on desktop */}
            <main
                style={{
                    marginLeft: 'var(--sidebar-w, 0px)',
                    paddingBottom: 80, // space for mobile nav
                    minHeight: '100vh',
                    transition: 'margin-left 0.3s ease',
                }}
            >
                {/* Mobile header for non-home screens */}
                {!isHome && (
                    <div className="hide-desktop" style={{
                        position: 'sticky', top: 0, zIndex: 40,
                        padding: '10px 16px',
                        background: dm ? 'rgba(7,3,15,0.92)' : 'rgba(255,248,238,0.94)',
                        backdropFilter: 'blur(20px)',
                        borderBottom: `1px solid ${th.border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                        <div style={{ fontFamily: 'var(--font-sk)', fontSize: '0.95rem', color: th.gold }}>संस्कृत सागर</div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: th.gold }}>{xp} XP</span>
                            <button onClick={toggleLang} className="btn-press" style={{ background: th.surfaceAlt, border: `1px solid ${th.border}`, borderRadius: 6, padding: '4px 10px', cursor: 'pointer', color: th.text, fontFamily: 'var(--font-ui)', fontSize: '0.72rem' }}>
                                {lang === 'hi' ? 'EN' : 'हि'}
                            </button>
                            <button onClick={toggleDm} className="btn-press" style={{ background: 'transparent', border: `1px solid ${th.border}`, borderRadius: '50%', width: 28, height: 28, cursor: 'pointer', color: th.text, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>
                                {dm ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </div>
                )}

                {/* Screen content */}
                <div style={isHome ? {} : { maxWidth: 860, margin: '0 auto', padding: '32px 20px' }}>
                    {renderScreen()}
                </div>
            </main>

            {/* XP Toast */}
            {toastAmt && <XPToast key={toastKey} amount={toastAmt} onDone={() => setToastAmt(null)} th={th} />}

            {/* CSS variable for sidebar width on desktop */}
            <style>{`
        @media (min-width: 769px) {
          :root { --sidebar-w: 240px; }
        }
        @media (max-width: 768px) {
          :root { --sidebar-w: 0px; }
        }
      `}</style>
        </div>
    );
}

export default App;
