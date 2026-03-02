import { useState, useRef, useEffect } from 'react';
import { TIMELINE } from '../../data/constants.js';
import { IconChevronLeft, IconChevronRight } from '../ui/Icons.jsx';

/**
 * Interactive horizontal-scroll timeline.
 * Each era card has a colour accent, body text, and source link.
 */
const Timeline = ({ lang, th, dm, fs }) => {
    const isHi = lang === 'hi';
    const scrollRef = useRef(null);
    const [activeIdx, setActiveIdx] = useState(0);

    const scroll = (dir) => {
        const el = scrollRef.current;
        if (!el) return;
        const card = el.querySelector('[data-card]');
        const w = card ? card.offsetWidth + 18 : 340;
        el.scrollBy({ left: dir * w, behavior: 'smooth' });
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const handler = () => {
            const card = el.querySelector('[data-card]');
            const w = card ? card.offsetWidth + 18 : 340;
            setActiveIdx(Math.round(el.scrollLeft / w));
        };
        el.addEventListener('scroll', handler, { passive: true });
        return () => el.removeEventListener('scroll', handler);
    }, []);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', padding: '48px 24px 16px' }}>
                <h1 style={{
                    fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-hd)',
                    fontSize: `calc(clamp(1.8rem,4vw,2.8rem) * ${fs})`,
                    margin: 0, lineHeight: 1.2,
                }}>
                    <span className="gradient-text">{isHi ? 'कालरेखा' : 'Timeline'}</span>
                </h1>
                <p style={{
                    fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)',
                    fontSize: `calc(1rem * ${fs})`,
                    color: th.textMuted,
                    fontStyle: isHi ? 'normal' : 'italic',
                    marginTop: 8,
                    lineHeight: 1.6,
                }}>
                    {isHi
                        ? 'संस्कृत के 3,500 वर्षों की यात्रा — वैदिक काल से आज तक'
                        : '3,500 years of Sanskrit — from the Vedic Age to the present day'}
                </p>
            </div>

            {/* Timeline line + dots */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, padding: '0 24px', marginBottom: 12 }}>
                {TIMELINE.map((t, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                        <button
                            onClick={() => {
                                const el = scrollRef.current;
                                const card = el?.querySelector('[data-card]');
                                const w = card ? card.offsetWidth + 18 : 340;
                                el?.scrollTo({ left: i * w, behavior: 'smooth' });
                            }}
                            className="btn-press"
                            aria-label={`Go to ${t.titleEn}`}
                            style={{
                                width: activeIdx === i ? 14 : 10,
                                height: activeIdx === i ? 14 : 10,
                                borderRadius: '50%',
                                background: activeIdx === i ? t.color : th.border,
                                border: activeIdx === i ? `2px solid ${t.color}` : 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                padding: 0,
                                boxShadow: activeIdx === i ? `0 0 12px ${t.color}60` : 'none',
                            }}
                        />
                        {i < TIMELINE.length - 1 && (
                            <div style={{ width: 'clamp(20px,6vw,60px)', height: 2, background: i < activeIdx ? TIMELINE[i + 1].color : th.border, transition: 'background 0.4s' }} />
                        )}
                    </div>
                ))}
            </div>

            {/* Arrow navigation */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <button
                    onClick={() => scroll(-1)} className="btn-press" aria-label="Previous era"
                    style={{
                        width: 40, height: 40, borderRadius: '50%', background: th.surfaceAlt,
                        border: `1px solid ${th.border}`, cursor: 'pointer', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', color: th.text,
                    }}
                >
                    <IconChevronLeft size={18} />
                </button>
                <button
                    onClick={() => scroll(1)} className="btn-press" aria-label="Next era"
                    style={{
                        width: 40, height: 40, borderRadius: '50%', background: th.surfaceAlt,
                        border: `1px solid ${th.border}`, cursor: 'pointer', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', color: th.text,
                    }}
                >
                    <IconChevronRight size={18} />
                </button>
            </div>

            {/* Scrollable cards */}
            <div
                ref={scrollRef}
                style={{
                    flex: 1,
                    display: 'flex',
                    gap: 18,
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    padding: '0 max(24px, calc((100% - 560px) / 2)) 40px',
                    scrollbarWidth: 'none',
                }}
            >
                {TIMELINE.map((t, i) => (
                    <div
                        key={i}
                        data-card
                        className="fade-up"
                        style={{
                            flex: '0 0 min(520px, 85vw)',
                            scrollSnapAlign: 'center',
                            background: th.surface,
                            border: `1px solid ${t.color}30`,
                            borderRadius: 28,
                            padding: 'clamp(28px,4vw,44px)',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'hidden',
                            animationDelay: `${i * 0.08}s`,
                        }}
                    >
                        {/* Color accent bar */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${t.color}, ${t.color}80)` }} />

                        {/* Era badge */}
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18,
                            padding: '6px 14px', background: `${t.color}14`, borderRadius: 50,
                            alignSelf: 'flex-start',
                        }}>
                            <span style={{ fontSize: '1.5rem' }}>{t.symbol}</span>
                            <span style={{ fontFamily: 'var(--font-hd)', fontSize: `calc(0.72rem * ${fs})`, color: t.color, letterSpacing: '0.1em', fontWeight: 700 }}>
                                {t.era}
                            </span>
                        </div>

                        {/* Sanskrit title */}
                        <div style={{ fontFamily: 'var(--font-sk)', fontSize: `calc(clamp(1.3rem,3vw,1.8rem) * ${fs})`, color: t.color, marginBottom: 4, lineHeight: 1.3 }}>
                            {t.titleSk}
                        </div>

                        {/* English title */}
                        <h2 style={{ fontFamily: 'var(--font-hd)', fontSize: `calc(clamp(0.9rem,2vw,1.2rem) * ${fs})`, color: th.text, marginBottom: 18, margin: '0 0 18px', lineHeight: 1.3 }}>
                            {t.titleEn}
                        </h2>

                        {/* Body */}
                        <p style={{
                            fontFamily: isHi ? 'var(--font-sk)' : 'var(--font-bd)',
                            fontSize: `calc(clamp(0.92rem,1.5vw,1.05rem) * ${fs})`,
                            color: th.text,
                            lineHeight: 1.85,
                            flex: 1,
                        }}>
                            {isHi ? t.bodyHi : t.body}
                        </p>

                        {/* Source */}
                        <a
                            href={t.source} target="_blank" rel="noopener noreferrer"
                            style={{
                                marginTop: 16,
                                fontFamily: 'var(--font-ui)',
                                fontSize: '0.7rem',
                                color: th.textFaint,
                                textDecoration: 'underline',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 4,
                            }}
                        >
                            📖 {isHi ? 'स्रोत' : 'Source'}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
