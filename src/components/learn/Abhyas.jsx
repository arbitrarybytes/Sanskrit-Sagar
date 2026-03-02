import { useState, useCallback } from 'react';
import { QUIZ } from '../../data/constants.js';
import { IconStar, IconCheck, IconX } from '../ui/Icons.jsx';
import ProgressBar from '../ui/ProgressBar.jsx';

/**
 * Abhyāsa — Practice / Quiz with gamified UI.
 * Adaptive: kids mode shows hints immediately, scholar mode lets you think.
 */
const Abhyas = ({ lang, th, addXP, dm, mode, fs }) => {
    const isHi = lang === 'hi';
    const [cur, setCur] = useState(0);
    const [score, setScore] = useState(0);
    const [sel, setSel] = useState(null);
    const [shown, setShown] = useState(false);
    const [done, setDone] = useState(false);
    const [streak, setStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);

    const total = QUIZ.length;
    const q = QUIZ[cur];

    const pick = useCallback((opt) => {
        if (sel) return;
        setSel(opt);
        setShown(true);
        if (opt === q.ans) {
            setScore(s => s + 1);
            const newStreak = streak + 1;
            setStreak(newStreak);
            if (newStreak > maxStreak) setMaxStreak(newStreak);
            addXP(q.xp);
        } else {
            setStreak(0);
        }
    }, [sel, q, addXP, streak, maxStreak]);

    const next = () => {
        if (cur < total - 1) { setCur(c => c + 1); setSel(null); setShown(false); }
        else setDone(true);
    };

    const reset = () => { setCur(0); setScore(0); setSel(null); setShown(false); setDone(false); setStreak(0); setMaxStreak(0); };

    // ── Results ──
    if (done) {
        const pct = Math.round((score / total) * 100);
        const grade = pct >= 85
            ? { icon: '🏆', msg: isHi ? 'अभिनन्दनम्!' : 'Exceptional!', color: th.gold }
            : pct >= 65
                ? { icon: '⭐', msg: isHi ? 'साधुवादः!' : 'Well Done!', color: th.saffron }
                : { icon: '📖', msg: isHi ? 'पुनः प्रयास करें' : 'Keep Practicing!', color: th.textMuted };

        return (
            <div className="fade-up" style={{ textAlign: 'center', padding: '60px 24px' }}>
                <div style={{ fontSize: '5rem', marginBottom: 24 }} className="star-pop">{grade.icon}</div>
                <div style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-hd)', fontSize: `calc(clamp(1.8rem,4vw,2.8rem) * ${fs})`, color: grade.color, marginBottom: 24 }}>
                    {grade.msg}
                </div>

                {/* Stats grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, maxWidth: 380, margin: '0 auto 32px' }}>
                    <div style={{ padding: '18px 10px', background: th.surfaceAlt, borderRadius: 16, border: `1px solid ${th.border}` }}>
                        <div style={{ fontFamily: 'var(--font-hd)', fontSize: `calc(2rem * ${fs})`, color: grade.color }}>{score}/{total}</div>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: `calc(0.7rem * ${fs})`, color: th.textMuted }}>{isHi ? 'सही उत्तर' : 'Correct'}</div>
                    </div>
                    <div style={{ padding: '18px 10px', background: th.surfaceAlt, borderRadius: 16, border: `1px solid ${th.border}` }}>
                        <div style={{ fontFamily: 'var(--font-hd)', fontSize: `calc(2rem * ${fs})`, color: th.saffron }}>{pct}%</div>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: `calc(0.7rem * ${fs})`, color: th.textMuted }}>{isHi ? 'अंक' : 'Score'}</div>
                    </div>
                    <div style={{ padding: '18px 10px', background: th.surfaceAlt, borderRadius: 16, border: `1px solid ${th.border}` }}>
                        <div style={{ fontFamily: 'var(--font-hd)', fontSize: `calc(2rem * ${fs})`, color: th.amber }}>🔥 {maxStreak}</div>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: `calc(0.7rem * ${fs})`, color: th.textMuted }}>{isHi ? 'श्रेणी' : 'Streak'}</div>
                    </div>
                </div>

                <div style={{ maxWidth: 300, margin: '0 auto 36px' }}><ProgressBar value={score} max={total} th={th} /></div>

                <button onClick={reset} className="btn-press"
                    style={{
                        padding: '14px 42px', background: `linear-gradient(135deg, ${th.saffron}, ${th.gold})`,
                        color: '#000', border: 'none', borderRadius: 50,
                        fontSize: `calc(1rem * ${fs})`, fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-hd)',
                        fontWeight: 700, cursor: 'pointer', boxShadow: `0 8px 32px ${th.saffron}40`,
                    }}
                >
                    {isHi ? '🔄 पुनः अभ्यास' : '🔄 Try Again'}
                </button>
            </div>
        );
    }

    // ── Active question ──
    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <h1 style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-hd)', fontSize: `calc(clamp(1.6rem,3.5vw,2.5rem) * ${fs})`, margin: '0 0 8px' }}>
                    <span className="gradient-text">{isHi ? 'अभ्यास' : 'Abhyāsa'}</span>
                </h1>
            </div>

            {/* Progress + streak */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-ui)', fontSize: `calc(0.85rem * ${fs})`, color: th.textMuted }}>
                    {isHi ? `प्रश्न ${cur + 1} / ${total}` : `Question ${cur + 1} of ${total}`}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {streak > 1 && <span style={{ fontFamily: 'var(--font-ui)', fontSize: `calc(0.78rem * ${fs})`, color: th.amber }}>🔥 {streak}</span>}
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: `calc(0.78rem * ${fs})`, color: th.gold }}>
                        <IconStar size={14} color={th.gold} /> {score}
                    </span>
                </div>
            </div>
            <div style={{ marginBottom: 24 }}><ProgressBar value={cur + 1} max={total} th={th} /></div>

            {/* Question card */}
            <div className={sel && sel !== q.ans ? 'shake' : sel === q.ans ? 'correct-glow' : ''}
                style={{
                    background: th.surface, border: `2px solid ${th.border}`, borderRadius: 22,
                    padding: '30px 26px', marginBottom: 24, textAlign: 'center',
                }}
            >
                <div style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)', fontSize: `calc(clamp(1rem,2.5vw,1.25rem) * ${fs})`, color: th.text, lineHeight: 1.7 }}>
                    {isHi ? (q.qHi || q.q) : q.q}
                </div>

                {/* Kids mode: show hint even before answering */}
                {mode === 'kids' && !shown && (
                    <div style={{ marginTop: 12, fontFamily: 'var(--font-ui)', fontSize: `calc(0.78rem * ${fs})`, color: th.textFaint }}>
                        💡 {isHi ? (q.hintHi || q.hint) : q.hint}
                    </div>
                )}

                {shown && (
                    <div className="bounce-in" style={{
                        padding: '12px 16px', borderRadius: 12, marginTop: 14,
                        background: sel === q.ans ? th.okBg : th.errBg,
                        color: sel === q.ans ? th.ok : th.err,
                        display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center',
                    }}>
                        {sel === q.ans ? <IconCheck size={16} /> : <IconX size={16} />}
                        <span style={{ fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-ui)', fontSize: `calc(0.9rem * ${fs})` }}>
                            {sel === q.ans
                                ? (isHi ? `सही! +${q.xp} XP` : `Correct! +${q.xp} XP`)
                                : (isHi ? `सही उत्तर: ${q.ans}` : `Correct answer: ${q.ans}`)}
                        </span>
                    </div>
                )}

                {shown && (
                    <div style={{ marginTop: 10, fontFamily: 'var(--font-ui)', fontSize: `calc(0.78rem * ${fs})`, color: th.textFaint }}>
                        💡 {isHi ? (q.hintHi || q.hint) : q.hint}
                    </div>
                )}
            </div>

            {/* Options */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                {q.opts.map(opt => {
                    let bc = th.border, bg = th.surface, col = th.text;
                    if (sel) {
                        if (opt === q.ans) { bc = th.ok; bg = th.okBg; col = th.ok; }
                        else if (opt === sel) { bc = th.err; bg = th.errBg; col = th.err; }
                    }
                    return (
                        <button key={opt} onClick={() => pick(opt)} disabled={!!sel}
                            className="btn-press card-hover"
                            style={{
                                padding: '16px 12px', background: bg, border: `2px solid ${bc}`,
                                borderRadius: 16, color: col, cursor: sel ? 'default' : 'pointer',
                                fontFamily: 'var(--font-sk)', fontSize: `calc(clamp(0.9rem,2vw,1.1rem) * ${fs})`,
                                lineHeight: 1.35, textAlign: 'center',
                            }}
                        >{opt}</button>
                    );
                })}
            </div>

            {shown && (
                <div style={{ textAlign: 'center' }}>
                    <button onClick={next} className="btn-press"
                        style={{
                            padding: '14px 40px', background: `linear-gradient(135deg, ${th.saffron}, ${th.gold})`,
                            color: '#000', border: 'none', borderRadius: 50,
                            fontSize: `calc(1rem * ${fs})`, fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-hd)',
                            fontWeight: 700, cursor: 'pointer', boxShadow: `0 4px 24px ${th.saffron}40`,
                        }}
                    >
                        {cur < total - 1 ? (isHi ? 'अगला प्रश्न →' : 'Next Question →') : (isHi ? 'परिणाम देखें 🏆' : 'View Results 🏆')}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Abhyas;
