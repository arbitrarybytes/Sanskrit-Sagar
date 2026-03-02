import { useState } from 'react';
import { KAVYA } from '../../data/constants.js';
import { speak, ttsSupported } from '../../utils/tts.js';
import { IconVolume, IconChevronRight } from '../ui/Icons.jsx';

/**
 * Kāvya Vāṭikā — Poetry garden.
 * Each subhāṣita is a full-width calligraphic card with scroll-reveal.
 * Unique design: stacked vertical cards, not a uniform grid.
 */
const Kavya = ({ lang, th, dm, addXP, fs }) => {
    const isHi = lang === 'hi';
    const [expanded, setExpanded] = useState(null);
    const [read, setRead] = useState(new Set());

    const toggle = (id) => {
        if (!read.has(id)) {
            setRead(prev => new Set([...prev, id]));
            addXP(15);
        }
        setExpanded(e => e === id ? null : id);
    };

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
                <h1 style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-hd)', fontSize: `calc(clamp(1.6rem,3.5vw,2.5rem) * ${fs})`, margin: '0 0 8px' }}>
                    <span className="gradient-text">{isHi ? 'काव्य वाटिका' : 'Kāvya Vāṭikā'}</span>
                </h1>
                <p style={{
                    fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)',
                    fontSize: `calc(0.95rem * ${fs})`, color: th.textMuted,
                    fontStyle: isHi ? 'normal' : 'italic', lineHeight: 1.7,
                    maxWidth: 560, margin: '0 auto',
                }}>
                    {isHi
                        ? 'शाश्वत काव्य एवं सुभाषित — ज्ञान, सत्य, प्रेम और कर्म की कालजयी पंक्तियाँ'
                        : 'Timeless verses and subhāṣitas — eternal lines on knowledge, truth, love, and action'}
                </p>
            </div>

            {KAVYA.map((k, i) => {
                const isOpen = expanded === k.id;
                const isDone = read.has(k.id);
                return (
                    <div
                        key={k.id}
                        className="fade-up"
                        style={{
                            marginBottom: 24,
                            borderRadius: 28,
                            overflow: 'hidden',
                            border: `1px solid ${isOpen ? k.color : th.border}`,
                            background: th.surface,
                            position: 'relative',
                            transition: 'all 0.35s ease',
                            boxShadow: isOpen ? `0 8px 40px ${k.color}15` : 'none',
                            animationDelay: `${i * 0.08}s`,
                        }}
                    >
                        {/* Accent bar */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: k.color, borderRadius: '4px 0 0 4px' }} />

                        {/* Header */}
                        <button
                            onClick={() => toggle(k.id)}
                            aria-expanded={isOpen}
                            className="card-hover"
                            style={{
                                width: '100%', padding: '24px 28px 24px 32px', cursor: 'pointer',
                                background: 'transparent', border: 'none', textAlign: 'left',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            }}
                        >
                            <div>
                                <div style={{ fontFamily: 'var(--font-sk)', fontSize: `calc(clamp(1.1rem,2vw,1.4rem) * ${fs})`, color: k.color, marginBottom: 4 }}>
                                    {k.titleSk}
                                </div>
                                <div style={{
                                    fontFamily: 'var(--font-hd)', fontSize: `calc(0.85rem * ${fs})`,
                                    color: isDone ? th.gold : th.text, display: 'flex', alignItems: 'center', gap: 8,
                                }}>
                                    {k.titleEn} {isDone && <span style={{ color: th.gold, fontSize: '0.75rem' }}>✓ +15 XP</span>}
                                </div>
                                <div style={{ fontFamily: 'var(--font-ui)', fontSize: `calc(0.68rem * ${fs})`, color: th.textFaint, marginTop: 4 }}>
                                    {k.source}
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <span style={{
                                    padding: '4px 10px', background: `${k.color}14`, borderRadius: 50,
                                    fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: k.color, textTransform: 'uppercase',
                                }}>
                                    {k.theme}
                                </span>
                                <IconChevronRight size={16} color={th.textMuted} style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s' }} />
                            </div>
                        </button>

                        {/* Expanded content */}
                        {isOpen && (
                            <div className="fade-in" style={{ padding: '0 28px 28px 32px', borderTop: `1px solid ${th.border}` }}>
                                {/* Shloka */}
                                <div style={{
                                    fontFamily: 'var(--font-sk)',
                                    fontSize: `calc(clamp(1.3rem,2.5vw,1.8rem) * ${fs})`,
                                    color: k.color,
                                    lineHeight: 2.6,
                                    textAlign: 'center',
                                    padding: '28px 20px',
                                    background: dm ? `${k.color}0A` : `${k.color}06`,
                                    borderRadius: 18,
                                    margin: '20px 0',
                                    border: `1px solid ${k.color}20`,
                                    whiteSpace: 'pre-line',
                                    letterSpacing: '0.04em',
                                    textShadow: `0 0 30px ${k.color}15`,
                                }}>
                                    {k.shloka}
                                </div>

                                {/* TTS */}
                                {ttsSupported() && (
                                    <div style={{ textAlign: 'center', marginBottom: 18 }}>
                                        <button onClick={() => speak(k.shloka.replace(/\n/g, ' '), { rate: 0.55 })} className="btn-press"
                                            style={{
                                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                                padding: '9px 22px', background: `${k.color}12`, border: `1px solid ${k.color}30`,
                                                borderRadius: 50, cursor: 'pointer', color: k.color,
                                                fontFamily: 'var(--font-ui)', fontSize: `calc(0.8rem * ${fs})`,
                                            }}
                                        >
                                            <IconVolume size={15} /> {isHi ? 'श्लोक सुनें' : 'Listen to Verse'}
                                        </button>
                                    </div>
                                )}

                                {/* Romanization */}
                                <div style={{
                                    fontFamily: 'var(--font-bd)', fontStyle: 'italic',
                                    color: th.textMuted, textAlign: 'center',
                                    fontSize: `calc(0.92rem * ${fs})`, lineHeight: 1.9,
                                    marginBottom: 22, whiteSpace: 'pre-line',
                                }}>
                                    {k.roman}
                                </div>

                                {/* Meaning */}
                                <div style={{
                                    background: th.surfaceAlt, borderRadius: 14, padding: '18px 20px',
                                    borderLeft: `3px solid ${k.color}`,
                                }}>
                                    <div style={{ fontFamily: 'var(--font-hd)', fontSize: '0.65rem', color: k.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
                                        {isHi ? 'अर्थ' : 'Meaning'}
                                    </div>
                                    <div style={{
                                        fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)',
                                        fontSize: `calc(clamp(0.95rem,1.5vw,1.1rem) * ${fs})`,
                                        color: th.text, lineHeight: 1.9,
                                    }}>
                                        {isHi ? k.hi : k.en}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Kavya;
