import { useState } from 'react';
import { VOWELS, CONSONANT_GROUPS } from '../../data/constants.js';
import { speak, ttsSupported } from '../../utils/tts.js';
import { IconVolume, IconX } from '../ui/Icons.jsx';
import ProgressBar from '../ui/ProgressBar.jsx';
import Tag from '../ui/Tag.jsx';

/**
 * Varṇamālā — Alphabet learning with TTS.
 * Shows phonetic grouping, body-part articulation labels, and a detail panel with sound.
 */
const Varnamala = ({ lang, th, addXP, dm, mode, fs }) => {
    const isHi = lang === 'hi';
    const [section, setSection] = useState('vowels');
    const [sel, setSel] = useState(null);
    const [learned, setLearned] = useState(new Set());

    const allLetters = [...VOWELS, ...CONSONANT_GROUPS.flatMap(g => g.letters)];

    const handleClick = (letter) => {
        setSel(letter);
        if (ttsSupported()) speak(letter.tts || letter.deva, { rate: 0.7 });
        if (!learned.has(letter.deva)) {
            setLearned(prev => new Set([...prev, letter.deva]));
            addXP(5);
        }
    };

    const pct = allLetters.length ? Math.round((learned.size / allLetters.length) * 100) : 0;

    return (
        <div>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <h1 style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-hd)', fontSize: `calc(clamp(1.6rem,3.5vw,2.5rem) * ${fs})`, margin: '0 0 6px' }}>
                    <span className="gradient-text">{isHi ? 'वर्णमाला' : 'Varṇamālā'}</span>
                </h1>
                <p style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)', fontSize: `calc(0.95rem * ${fs})`, color: th.textMuted, fontStyle: isHi ? 'normal' : 'italic', lineHeight: 1.6, maxWidth: 600, margin: '0 auto' }}>
                    {isHi
                        ? 'संस्कृत वर्णमाला — वह अक्षरमाला जिसमें प्रत्येक ध्वनि को मुख के सटीक स्थान से उच्चारित किया जाता है। टैप करें, सुनें और सीखें!'
                        : 'The Sanskrit alphabet — where every sound is mapped to the exact point of articulation in the vocal tract. Tap, listen, and learn!'}
                </p>
            </div>

            {/* Section toggle */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                    { id: 'vowels', label: isHi ? '🔤 स्वर · Svara' : '🔤 Vowels · Svara' },
                    { id: 'consonants', label: isHi ? '🔡 व्यञ्जन · Vyañjana' : '🔡 Consonants · Vyañjana' },
                ].map(s => (
                    <button key={s.id} onClick={() => setSection(s.id)} className="btn-press"
                        style={{
                            padding: '9px 22px',
                            background: section === s.id ? `linear-gradient(135deg, ${th.saffron}, ${th.gold})` : th.surfaceAlt,
                            color: section === s.id ? '#000' : th.textMuted,
                            border: 'none', borderRadius: 50, cursor: 'pointer',
                            fontFamily: 'var(--font-ui)', fontSize: `calc(0.85rem * ${fs})`, fontWeight: section === s.id ? 700 : 400,
                        }}
                    >{s.label}</button>
                ))}
            </div>

            {/* Progress */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22, padding: '10px 16px', background: th.surfaceAlt, borderRadius: 12, border: `1px solid ${th.border}` }}>
                <span style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-ui)', fontSize: `calc(0.82rem * ${fs})`, color: th.gold }}>
                    📊 {learned.size} / {allLetters.length} {isHi ? 'अक्षर' : 'letters'}
                </span>
                <div style={{ flex: 1 }}><ProgressBar value={learned.size} max={allLetters.length} th={th} /></div>
                {pct > 0 && <Tag color={th.gold} bg={th.goldLow}>{pct}%</Tag>}
            </div>

            {/* ── Vowels grid ── */}
            {section === 'vowels' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(95px, 1fr))', gap: 10 }}>
                    {VOWELS.map(v => {
                        const done = learned.has(v.deva);
                        return (
                            <button key={v.deva} className="letter-card btn-press" onClick={() => handleClick(v)}
                                aria-label={`${v.deva} — ${v.roman}`}
                                style={{
                                    padding: '18px 6px', textAlign: 'center', borderRadius: 18,
                                    background: done ? th.goldLow : th.surface,
                                    border: `2px solid ${done ? th.gold : th.border}`,
                                    cursor: 'pointer', position: 'relative',
                                }}
                            >
                                <div style={{ fontFamily: 'var(--font-sk)', fontSize: `calc(clamp(2rem,4vw,2.8rem) * ${fs})`, color: done ? th.gold : th.text, lineHeight: 1.1, marginBottom: 4 }}>
                                    {v.deva}
                                </div>
                                <div style={{ fontFamily: 'var(--font-bd)', fontSize: `calc(0.72rem * ${fs})`, color: th.textMuted }}>{v.roman}</div>
                                {done && <div style={{ color: th.gold, fontSize: '0.6rem', marginTop: 2 }}>✓</div>}
                                {ttsSupported() && <IconVolume size={10} color={th.textFaint} style={{ position: 'absolute', top: 6, right: 6 }} />}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* ── Consonants ── */}
            {section === 'consonants' && (
                <div>
                    {CONSONANT_GROUPS.map(g => (
                        <div key={g.name} style={{ marginBottom: 30 }}>
                            {/* Group header */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
                                <div style={{ width: 10, height: 10, borderRadius: '50%', background: g.color, flexShrink: 0 }} />
                                <span style={{ fontFamily: 'var(--font-sk)', fontSize: `calc(1rem * ${fs})`, color: g.color, fontWeight: 600 }}>
                                    {isHi ? g.nameHi : g.name}
                                </span>
                                <span style={{ fontFamily: 'var(--font-ui)', fontSize: `calc(0.72rem * ${fs})`, color: th.textFaint, padding: '2px 10px', background: `${g.color}12`, borderRadius: 50 }}>
                                    {g.bodyPart}
                                </span>
                                <span style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)', fontSize: `calc(0.82rem * ${fs})`, color: th.textMuted, fontStyle: isHi ? 'normal' : 'italic' }}>
                                    — {isHi ? g.descHi : g.desc}
                                </span>
                            </div>

                            {/* Letters */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))', gap: 9 }}>
                                {g.letters.map(l => {
                                    const done = learned.has(l.deva);
                                    return (
                                        <button key={l.deva} className="letter-card btn-press" onClick={() => handleClick(l)}
                                            aria-label={`${l.deva} — ${l.roman}`}
                                            style={{
                                                padding: '14px 6px', textAlign: 'center', borderRadius: 14,
                                                background: done ? `${g.color}12` : th.surface,
                                                border: `2px solid ${done ? g.color : th.border}`,
                                                cursor: 'pointer', position: 'relative',
                                            }}
                                        >
                                            <div style={{ fontFamily: 'var(--font-sk)', fontSize: `calc(clamp(1.6rem,3vw,2.2rem) * ${fs})`, color: done ? g.color : th.text, lineHeight: 1.1, marginBottom: 4 }}>
                                                {l.deva}
                                            </div>
                                            <div style={{ fontFamily: 'var(--font-bd)', fontSize: `calc(0.68rem * ${fs})`, color: th.textMuted }}>{l.roman}</div>
                                            {ttsSupported() && <IconVolume size={10} color={th.textFaint} style={{ position: 'absolute', top: 5, right: 5 }} />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* ── Detail panel ── */}
            {sel && (
                <div className="bounce-in" role="dialog" aria-label="Letter detail"
                    style={{
                        position: 'fixed', bottom: 80, left: '50%', transform: 'translateX(-50%)',
                        background: dm ? th.surfaceAlt : th.surface,
                        border: `2px solid ${th.gold}`, borderRadius: 24, padding: '24px 28px',
                        zIndex: 200, maxWidth: 400, width: '92%',
                        boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${th.gold}20`,
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <div style={{ fontFamily: 'var(--font-sk)', fontSize: `calc(clamp(3rem,8vw,4.5rem) * ${fs})`, color: th.gold, lineHeight: 1, marginBottom: 8 }}>
                                {sel.deva}
                            </div>
                            <div style={{ fontFamily: 'var(--font-hd)', fontSize: `calc(1.2rem * ${fs})`, color: th.saffron, marginBottom: 6 }}>
                                {sel.roman}
                            </div>

                            {/* Pronunciation hint */}
                            <div style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)', fontSize: `calc(1.05rem * ${fs})`, color: th.text, marginBottom: 4, lineHeight: 1.5 }}>
                                {isHi ? (sel.hintHi || sel.hint) : sel.hint}
                            </div>

                            {/* Note */}
                            {sel.note && (
                                <div style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)', fontSize: `calc(0.88rem * ${fs})`, color: th.textMuted, fontStyle: isHi ? 'normal' : 'italic', lineHeight: 1.5 }}>
                                    💡 {isHi ? (sel.noteHi || sel.note) : sel.note}
                                </div>
                            )}

                            {/* TTS button */}
                            {ttsSupported() && (
                                <button onClick={() => speak(sel.tts || sel.deva, { rate: 0.6 })} className="btn-press"
                                    aria-label="Listen to pronunciation"
                                    style={{
                                        marginTop: 12, display: 'flex', alignItems: 'center', gap: 6,
                                        padding: '8px 16px', background: `${th.gold}14`, border: `1px solid ${th.gold}40`,
                                        borderRadius: 50, cursor: 'pointer', color: th.gold,
                                        fontFamily: 'var(--font-ui)', fontSize: '0.78rem',
                                    }}
                                >
                                    <IconVolume size={14} /> {isHi ? 'सुनें' : 'Listen'}
                                </button>
                            )}
                        </div>
                        <button onClick={() => setSel(null)} className="btn-press" aria-label="Close"
                            style={{ background: 'transparent', border: 'none', color: th.textMuted, cursor: 'pointer', padding: '4px', flexShrink: 0, marginTop: -4 }}>
                            <IconX size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Varnamala;
