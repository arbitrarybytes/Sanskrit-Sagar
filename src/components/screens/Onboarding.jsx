import { useState, useEffect } from 'react';
import Om from '../ui/Om.jsx';
import Mandala from '../ui/Mandala.jsx';
import Sparkle from '../ui/Sparkle.jsx';
import { IconChevronRight, IconVolume } from '../ui/Icons.jsx';
import { speak, ttsSupported } from '../../utils/tts.js';

const STATS = [
    { value: '3,500+', label: 'Years of History', labelHi: 'वर्षों का इतिहास', sk: 'वर्षाणि' },
    { value: '1.5 B', label: 'Language Descendants', labelHi: 'भाषा वंशज', sk: 'भाषा-वंशजाः' },
    { value: '3,959', label: 'Grammar Rules by Pāṇini', labelHi: 'पाणिनि के व्याकरण सूत्र', sk: 'व्याकरण-सूत्राणि' },
    { value: '96', label: 'Words for "Love"', labelHi: '"प्रेम" के शब्द', sk: 'प्रेम-शब्दाः' },
];

const FEATURES = [
    { emoji: '🔤', title: 'Varṇamālā', titleHi: 'वर्णमाला', desc: 'Learn the perfect phonetic alphabet with sound', descHi: 'ध्वनि के साथ सम्पूर्ण वर्णमाला सीखें', nav: 'varnamala' },
    { emoji: '📿', title: 'Mantras', titleHi: 'मन्त्र', desc: 'Sacred verses with layered meaning', descHi: 'पवित्र मन्त्र — अर्थ की परतें', nav: 'mantras' },
    { emoji: '📖', title: 'Shabdakosh', titleHi: 'शब्दकोश', desc: 'Build your vocabulary word by word', descHi: 'शब्द-शब्द से शब्दकोश बनाएँ', nav: 'shabdakosh' },
    { emoji: '🪷', title: 'Kāvya', titleHi: 'काव्य', desc: 'Timeless poetry and subhāṣitas', descHi: 'कालजयी काव्य और सुभाषित', nav: 'kavya' },
];

/**
 * Onboarding / Home screen — cinematic hero with stats, feature cards, and CTA.
 */
const Onboarding = ({ onNav, lang, th, dm, mode, fs }) => {
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVis(true), 60);
        return () => clearTimeout(t);
    }, []);

    const isHi = lang === 'hi';

    return (
        <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
            {/* Background gradient */}
            <div style={{
                position: 'absolute', inset: 0,
                background: dm
                    ? 'radial-gradient(ellipse at 50% 35%, #1C0A44 0%, #07030F 65%)'
                    : 'radial-gradient(ellipse at 50% 35%, #FFF0D4 0%, #FFF8EE 65%)',
            }} />
            <Mandala />
            <Sparkle th={th} />

            {/* ── Hero section ─────────────────────────────────────────────────── */}
            <section style={{ position: 'relative', textAlign: 'center', padding: '80px 24px 40px' }}>
                {/* Om symbol */}
                <div className="float-anim" style={{
                    marginBottom: 32,
                    opacity: vis ? 1 : 0,
                    transform: vis ? 'scale(1)' : 'scale(0.5)',
                    transition: 'all 1s var(--ease-spring)',
                }}>
                    <Om size={120} color={th.gold} anim />
                </div>

                {/* Sanskrit title */}
                <div style={{
                    opacity: vis ? 1 : 0,
                    transform: vis ? 'translateY(0)' : 'translateY(28px)',
                    transition: 'all 0.9s var(--ease-out-expo) 0.15s',
                }}>
                    <h1 style={{
                        fontFamily: 'var(--font-sk)',
                        fontSize: `calc(clamp(2.4rem,7vw,4.8rem) * ${fs})`,
                        color: th.gold,
                        textShadow: `0 0 60px ${th.gold}40`,
                        lineHeight: 1.2,
                        margin: '0 0 6px',
                    }}>
                        संस्कृत सागर
                    </h1>
                    <div style={{
                        fontFamily: 'var(--font-hd)',
                        fontSize: `calc(clamp(0.7rem,1.5vw,0.95rem) * ${fs})`,
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                        color: th.saffron,
                        marginBottom: 8,
                    }}>
                        Sanskrit Sāgar
                    </div>

                    {/* Listen button */}
                    {ttsSupported() && (
                        <button
                            onClick={() => speak('संस्कृत सागर — भाषाणां जननी', { rate: 0.7 })}
                            className="btn-press"
                            aria-label="Listen to title pronunciation"
                            style={{
                                background: 'transparent',
                                border: `1px solid ${th.border}`,
                                borderRadius: 50,
                                padding: '6px 16px',
                                cursor: 'pointer',
                                color: th.textMuted,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                fontFamily: 'var(--font-ui)',
                                fontSize: '0.72rem',
                                marginBottom: 24,
                            }}
                        >
                            <IconVolume size={14} /> {isHi ? 'सुनें' : 'Listen'}
                        </button>
                    )}
                </div>

                {/* Tagline */}
                <p style={{
                    maxWidth: 600,
                    margin: '0 auto 40px',
                    fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)',
                    fontStyle: isHi ? 'normal' : 'italic',
                    fontSize: `calc(clamp(1rem,2vw,1.25rem) * ${fs})`,
                    color: th.textMuted,
                    lineHeight: 1.85,
                    opacity: vis ? 1 : 0,
                    transform: vis ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.9s ease 0.3s',
                }}>
                    {isHi
                        ? 'ब्रह्माण्ड की भाषा में एक अद्भुत यात्रा — वेदों, गीता और शाश्वत ज्ञान की भाषा संस्कृत का अन्वेषण करें।'
                        : 'Embark on a journey into the world\'s most perfectly constructed language — the sacred tongue of the Vedas, the Gītā, and the cosmos itself.'}
                </p>

                {/* Mode badge */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 20px',
                    background: mode === 'kids' ? 'linear-gradient(135deg, #F0629220, #AB47BC20)' : `${th.gold}12`,
                    border: `1px solid ${mode === 'kids' ? '#F0629240' : th.border}`,
                    borderRadius: 50,
                    marginBottom: 40,
                    opacity: vis ? 1 : 0,
                    transition: 'opacity 0.6s ease 0.5s',
                }}>
                    <span style={{ fontSize: '1rem' }}>{mode === 'kids' ? '🧒' : '🎓'}</span>
                    <span style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: `calc(0.78rem * ${fs})`,
                        color: th.text,
                        fontWeight: 500,
                    }}>
                        {mode === 'kids'
                            ? (isHi ? 'बालक मोड — त्वरित एवं रोचक' : 'Kids Mode — Quick & Fun')
                            : (isHi ? 'विद्वान् मोड — गहन अध्ययन' : 'Scholar Mode — Deep Exploration')}
                    </span>
                </div>
            </section>

            {/* ── Statistics ────────────────────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: 14,
                maxWidth: 720,
                margin: '0 auto 60px',
                padding: '0 24px',
            }}>
                {STATS.map((s, i) => (
                    <div
                        key={s.value}
                        className="glow-pulse"
                        style={{
                            padding: '22px 14px',
                            background: dm ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                            border: `1px solid ${th.border}`,
                            borderRadius: 20,
                            textAlign: 'center',
                            opacity: vis ? 1 : 0,
                            transform: vis ? 'translateY(0)' : 'translateY(20px)',
                            transition: `all 0.7s ease ${0.4 + i * 0.1}s`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    >
                        <div style={{ fontFamily: 'var(--font-hd)', fontSize: `calc(clamp(1.5rem,3.5vw,2.2rem) * ${fs})`, color: th.gold, lineHeight: 1, marginBottom: 8 }}>
                            {s.value}
                        </div>
                        <div style={{ fontFamily: 'var(--font-sk)', fontSize: `calc(0.88rem * ${fs})`, color: th.saffron, marginBottom: 4 }}>
                            {s.sk}
                        </div>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: `calc(0.68rem * ${fs})`, color: th.textFaint }}>
                            {isHi ? s.labelHi : s.label}
                        </div>
                    </div>
                ))}
            </section>

            {/* ── Feature cards ─────────────────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                maxWidth: 800,
                margin: '0 auto 60px',
                padding: '0 24px',
            }}>
                <h2 style={{
                    fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-hd)',
                    fontSize: `calc(clamp(1rem,2vw,1.3rem) * ${fs})`,
                    color: th.text,
                    textAlign: 'center',
                    marginBottom: 24,
                    letterSpacing: isHi ? 0 : '0.1em',
                }}>
                    {isHi ? 'अन्वेषण करें' : 'EXPLORE'}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14 }}>
                    {FEATURES.map((f, i) => (
                        <button
                            key={f.nav}
                            onClick={() => onNav(f.nav)}
                            className="card-hover btn-press"
                            style={{
                                padding: '24px 18px',
                                background: th.surface,
                                border: `1px solid ${th.border}`,
                                borderRadius: 20,
                                cursor: 'pointer',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 8,
                                transition: 'all 0.3s ease',
                                opacity: vis ? 1 : 0,
                                transform: vis ? 'translateY(0)' : 'translateY(16px)',
                                transitionDelay: `${0.5 + i * 0.08}s`,
                            }}
                        >
                            <span style={{ fontSize: '1.8rem' }}>{f.emoji}</span>
                            <span style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-hd)', fontSize: `calc(0.9rem * ${fs})`, color: th.text, fontWeight: 600 }}>
                                {isHi ? f.titleHi : f.title}
                            </span>
                            <span style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)', fontSize: `calc(0.82rem * ${fs})`, color: th.textMuted, lineHeight: 1.5, fontStyle: isHi ? 'normal' : 'italic' }}>
                                {isHi ? f.descHi : f.desc}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: th.gold, marginTop: 'auto', fontFamily: 'var(--font-ui)', fontSize: '0.72rem' }}>
                                {isHi ? 'आरम्भ' : 'Begin'} <IconChevronRight size={14} />
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* ── CTA footer ────────────────────────────────────────────────────── */}
            <section style={{ position: 'relative', textAlign: 'center', padding: '0 24px 60px' }}>
                <button
                    onClick={() => onNav('timeline')}
                    className="btn-press card-hover"
                    style={{
                        padding: '16px 44px',
                        background: `linear-gradient(135deg, ${th.saffron}, ${th.gold})`,
                        color: '#000',
                        border: 'none',
                        borderRadius: 50,
                        fontSize: `calc(1rem * ${fs})`,
                        fontFamily: 'var(--font-hd)',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        cursor: 'pointer',
                        boxShadow: `0 8px 40px ${th.saffron}50`,
                    }}
                >
                    {isHi ? '⏳ कालरेखा देखें' : '⏳ Explore the Timeline'}
                </button>
                <div style={{
                    marginTop: 28,
                    fontFamily: 'var(--font-bd)',
                    fontSize: '0.68rem',
                    color: th.textFaint,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                }}>
                    The Language of the Vedas · Since 1500 BCE · संस्कृतं देववाणी
                </div>
            </section>
        </div>
    );
};

export default Onboarding;
