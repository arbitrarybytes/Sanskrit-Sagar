import { useState } from 'react';
import { WORDS } from '../../data/constants.js';
import { speak, ttsSupported } from '../../utils/tts.js';
import { IconVolume } from '../ui/Icons.jsx';
import ProgressBar from '../ui/ProgressBar.jsx';

const CAT_IDS = ['all', 'family', 'nature', 'greetings', 'values'];
const CAT_LABELS = { all: 'All', family: 'Family', nature: 'Nature', greetings: 'Greetings', values: 'Values' };
const CAT_LABELS_HI = { all: 'सभी', family: 'परिवार', nature: 'प्रकृति', greetings: 'अभिवादन', values: 'मूल्य' };
const CAT_EMOJI = { all: '✨', family: '👨‍👩‍👧‍👦', nature: '🌿', greetings: '🙏', values: '⚖️' };

/**
 * Shabdakosh — Vocabulary builder with TTS, sentences, and flip cards.
 */
const Shabdakosh = ({ lang, th, addXP, dm, fs }) => {
    const isHi = lang === 'hi';
    const [cat, setCat] = useState('all');
    const [flipped, setFlipped] = useState(new Set());
    const [learned, setLearned] = useState(new Set());

    const shown = cat === 'all' ? WORDS : WORDS.filter(w => w.cat === cat);

    const flip = (w) => {
        const nf = new Set(flipped);
        nf.has(w.deva) ? nf.delete(w.deva) : nf.add(w.deva);
        setFlipped(nf);
        if (!learned.has(w.deva)) {
            setLearned(prev => new Set([...prev, w.deva]));
            addXP(5);
        }
    };

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <h1 style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-hd)', fontSize: `calc(clamp(1.6rem,3.5vw,2.5rem) * ${fs})`, margin: '0 0 8px' }}>
                    <span className="gradient-text">{isHi ? 'शब्दकोश' : 'Shabdakosh'}</span>
                </h1>
                <p style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)', fontSize: `calc(0.95rem * ${fs})`, color: th.textMuted, fontStyle: isHi ? 'normal' : 'italic', maxWidth: 550, margin: '0 auto', lineHeight: 1.6 }}>
                    {isHi
                        ? 'शब्दों को टैप करें — अर्थ, वाक्य और ध्वनि के साथ सीखें। +5 XP प्रत्येक नए शब्द पर!'
                        : 'Tap a word to reveal meaning, sentence, and sound. +5 XP per new word!'}
                </p>
            </div>

            {/* Category filter */}
            <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 18 }}>
                {CAT_IDS.map(c => (
                    <button key={c} onClick={() => setCat(c)} className="btn-press"
                        style={{
                            padding: '7px 16px',
                            background: cat === c ? `linear-gradient(135deg, ${th.saffron}, ${th.gold})` : th.surfaceAlt,
                            color: cat === c ? '#000' : th.textMuted,
                            border: `1px solid ${cat === c ? 'transparent' : th.border}`,
                            borderRadius: 50, cursor: 'pointer',
                            fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-ui)',
                            fontSize: `calc(0.82rem * ${fs})`,
                            display: 'flex', alignItems: 'center', gap: 5,
                        }}
                    >
                        <span>{CAT_EMOJI[c]}</span>
                        {isHi ? CAT_LABELS_HI[c] : CAT_LABELS[c]}
                    </button>
                ))}
            </div>

            {/* Progress */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <span style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-ui)', fontSize: `calc(0.8rem * ${fs})`, color: th.textMuted }}>
                    {learned.size}/{WORDS.length} {isHi ? 'शब्द' : 'words'}
                </span>
                <div style={{ flex: 1 }}><ProgressBar value={learned.size} max={WORDS.length} th={th} /></div>
            </div>

            {/* Word cards grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 14 }}>
                {shown.map(w => {
                    const isFlipped = flipped.has(w.deva);
                    const isDone = learned.has(w.deva);
                    return (
                        <div
                            key={w.deva}
                            onClick={() => flip(w)}
                            className="card-hover btn-press"
                            role="button"
                            aria-label={`${w.deva} — ${isHi ? 'अर्थ देखें' : 'tap to reveal'}`}
                            style={{
                                padding: '22px 14px',
                                textAlign: 'center',
                                borderRadius: 20,
                                cursor: 'pointer',
                                minHeight: 180,
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                background: isFlipped ? th.goldLow : th.surface,
                                border: `2px solid ${isDone ? th.gold : th.border}`,
                                position: 'relative',
                            }}
                        >
                            {isDone && <div style={{ position: 'absolute', top: 8, right: 10, color: th.gold, fontSize: '0.7rem' }}>✓</div>}
                            <span style={{ fontSize: '2rem', marginBottom: 8 }}>{w.emoji}</span>

                            {!isFlipped ? (
                                <>
                                    <div style={{ fontFamily: 'var(--font-sk)', fontSize: `calc(clamp(1.4rem,3vw,1.9rem) * ${fs})`, color: th.text, marginBottom: 4, lineHeight: 1.2 }}>
                                        {w.deva}
                                    </div>
                                    <div style={{ fontFamily: 'var(--font-bd)', fontSize: `calc(0.72rem * ${fs})`, color: th.textFaint, fontStyle: 'italic', marginBottom: 8 }}>{w.roman}</div>
                                    <div style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-ui)', fontSize: `calc(0.7rem * ${fs})`, color: th.textFaint }}>
                                        {isHi ? 'अर्थ देखें ▾' : 'tap to reveal ▾'}
                                    </div>
                                </>
                            ) : (
                                <div className="bounce-in">
                                    <div style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-hd)', fontSize: `calc(1.1rem * ${fs})`, color: th.gold, marginBottom: 6 }}>
                                        {isHi ? w.hi : w.en}
                                    </div>
                                    <div style={{ fontFamily: 'var(--font-sk)', fontSize: `calc(0.88rem * ${fs})`, color: th.textMuted, marginBottom: 10 }}>{w.deva}</div>
                                    {/* Sentence */}
                                    <div style={{
                                        padding: '8px 12px', background: dm ? th.surfaceAlt : `${th.gold}06`,
                                        borderRadius: 10, marginBottom: 8, border: `1px solid ${th.border}`,
                                    }}>
                                        <div style={{ fontFamily: 'var(--font-sk)', fontSize: `calc(0.85rem * ${fs})`, color: th.text, marginBottom: 2 }}>{w.sentence}</div>
                                        <div style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)', fontSize: `calc(0.75rem * ${fs})`, color: th.textMuted, fontStyle: isHi ? 'normal' : 'italic' }}>
                                            {isHi ? w.sentenceHi : w.sentenceEn}
                                        </div>
                                    </div>
                                    {/* TTS */}
                                    {ttsSupported() && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); speak(w.sentence, { rate: 0.7 }); }}
                                            className="btn-press"
                                            aria-label="Listen"
                                            style={{
                                                display: 'inline-flex', alignItems: 'center', gap: 4,
                                                padding: '5px 12px', background: `${th.gold}12`, border: `1px solid ${th.gold}30`,
                                                borderRadius: 50, cursor: 'pointer', color: th.gold,
                                                fontFamily: 'var(--font-ui)', fontSize: '0.68rem',
                                            }}
                                        >
                                            <IconVolume size={12} /> {isHi ? 'सुनें' : 'Listen'}
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Shabdakosh;
