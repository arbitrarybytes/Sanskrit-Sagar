import { useState } from 'react';
import { MANTRAS } from '../../data/constants.js';
import { speak, ttsSupported } from '../../utils/tts.js';
import { IconVolume, IconChevronRight } from '../ui/Icons.jsx';
import XPPill from '../ui/XPPill.jsx';

/**
 * Mantras — immersive full-card mantra exploration.
 * Each mantra opens to show Sanskrit, romanization, meaning, benefit, source + TTS.
 */
const Mantras = ({ lang, th, addXP, dm, fs }) => {
    const isHi = lang === 'hi';
    const [open, setOpen] = useState(null);
    const [learned, setLearned] = useState(new Set());

    const toggle = (m) => {
        if (!learned.has(m.id)) {
            setLearned(prev => new Set([...prev, m.id]));
            addXP(m.xp);
        }
        setOpen(o => o === m.id ? null : m.id);
    };

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
                <h1 style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-hd)', fontSize: `calc(clamp(1.6rem,3.5vw,2.5rem) * ${fs})`, margin: '0 0 8px' }}>
                    <span className="gradient-text">{isHi ? 'मन्त्र मन्दिर' : 'Mantra Mandira'}</span>
                </h1>
                <p style={{
                    fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)',
                    fontSize: `calc(0.95rem * ${fs})`, color: th.textMuted,
                    fontStyle: isHi ? 'normal' : 'italic', lineHeight: 1.7, maxWidth: 580, margin: '0 auto',
                }}>
                    {isHi
                        ? '"मननात् त्रायते इति मन्त्रः" — जो मन को ध्यान से सुरक्षित रखे, वही मन्त्र है।'
                        : '"mananāt trāyate iti mantraḥ" — That which protects the mind through contemplation is a mantra.'}
                </p>
            </div>

            {MANTRAS.map(m => {
                const isOpen = open === m.id;
                const done = learned.has(m.id);
                return (
                    <div key={m.id} style={{
                        marginBottom: 16,
                        border: `1px solid ${isOpen ? th.gold : th.border}`,
                        borderRadius: 22,
                        overflow: 'hidden',
                        transition: 'all 0.35s ease',
                        boxShadow: isOpen ? `0 8px 36px ${th.gold}15` : 'none',
                    }}>
                        {/* Header */}
                        <button
                            id={`mantra-${m.id}`}
                            onClick={() => toggle(m)}
                            aria-expanded={isOpen}
                            className="card-hover"
                            style={{
                                width: '100%', padding: '20px 24px', cursor: 'pointer',
                                background: done ? (dm ? th.goldLow : `${th.gold}06`) : th.surface,
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                border: 'none', textAlign: 'left',
                            }}
                        >
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                                    <span style={{ fontFamily: 'var(--font-hd)', fontSize: `calc(1rem * ${fs})`, color: done ? th.gold : th.text }}>{m.name}</span>
                                    {done && <span style={{ color: th.gold, fontSize: '0.8rem' }}>✓</span>}
                                </div>
                                <div style={{ fontFamily: 'var(--font-sk)', fontSize: `calc(0.95rem * ${fs})`, color: th.textMuted, marginBottom: 3 }}>{m.nameSk}</div>
                                <div style={{ fontFamily: 'var(--font-ui)', fontSize: `calc(0.76rem * ${fs})`, color: th.textFaint }}>
                                    {isHi ? m.deityHi : m.deity}
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                                <XPPill amount={m.xp} th={th} />
                                <IconChevronRight size={16} color={th.textMuted} style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s' }} />
                            </div>
                        </button>

                        {/* Expanded content */}
                        {isOpen && (
                            <div className="fade-in" style={{ padding: '0 24px 24px', background: th.surface, borderTop: `1px solid ${th.border}` }}>
                                {/* Sanskrit text */}
                                <div style={{
                                    fontFamily: 'var(--font-sk)', fontSize: `calc(clamp(1.2rem,2.5vw,1.6rem) * ${fs})`,
                                    color: th.gold, lineHeight: 2.6, textAlign: 'center',
                                    padding: '24px 18px', background: dm ? th.goldLow : `${th.gold}06`,
                                    borderRadius: 16, margin: '18px 0', border: `1px solid ${th.border}`,
                                    whiteSpace: 'pre-line', letterSpacing: '0.03em',
                                }}>
                                    {m.text}
                                </div>

                                {/* TTS button */}
                                {ttsSupported() && (
                                    <div style={{ textAlign: 'center', marginBottom: 16 }}>
                                        <button onClick={() => speak(m.text.replace(/\n/g, ' '), { rate: 0.6 })} className="btn-press"
                                            style={{
                                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                                padding: '8px 20px', background: `${th.gold}12`, border: `1px solid ${th.gold}30`,
                                                borderRadius: 50, cursor: 'pointer', color: th.gold,
                                                fontFamily: 'var(--font-ui)', fontSize: `calc(0.8rem * ${fs})`,
                                            }}
                                        >
                                            <IconVolume size={15} /> {isHi ? 'मन्त्र सुनें' : 'Listen to Mantra'}
                                        </button>
                                    </div>
                                )}

                                {/* Romanization */}
                                <div style={{
                                    fontFamily: 'var(--font-bd)', fontStyle: 'italic',
                                    color: th.textMuted, textAlign: 'center',
                                    fontSize: `calc(0.92rem * ${fs})`, lineHeight: 1.9, marginBottom: 20,
                                    whiteSpace: 'pre-line',
                                }}>{m.roman}</div>

                                {/* Meaning */}
                                <div style={{ background: th.surfaceAlt, borderRadius: 14, padding: '16px 18px', marginBottom: 14 }}>
                                    <div style={{ fontFamily: 'var(--font-hd)', fontSize: '0.68rem', color: th.saffron, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
                                        {isHi ? 'अर्थ' : 'Meaning'}
                                    </div>
                                    <div style={{
                                        fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)',
                                        fontSize: `calc(clamp(0.95rem,1.5vw,1.1rem) * ${fs})`,
                                        color: th.text, lineHeight: 1.85,
                                    }}>
                                        {isHi ? m.hi : m.en}
                                    </div>
                                </div>

                                {/* Benefit */}
                                <div style={{
                                    display: 'flex', gap: 10, padding: '12px 16px',
                                    background: th.okBg, borderRadius: 12, marginBottom: 14,
                                    border: `1px solid ${th.ok}20`,
                                }}>
                                    <span>🌟</span>
                                    <span style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)', fontSize: `calc(0.88rem * ${fs})`, color: th.ok, lineHeight: 1.5 }}>
                                        {isHi ? m.benefitHi : m.benefit}
                                    </span>
                                </div>

                                {/* Source */}
                                <div style={{ textAlign: 'center', fontSize: '0.72rem' }}>
                                    <a href={m.url} target="_blank" rel="noopener noreferrer"
                                        style={{ color: th.textFaint, textDecoration: 'underline', fontFamily: 'var(--font-ui)' }}>
                                        📖 {m.source}
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Mantras;
