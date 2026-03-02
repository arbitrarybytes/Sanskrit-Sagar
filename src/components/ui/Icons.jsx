/**
 * Inline SVG icon components — no external dependency needed.
 * Premium, minimal line-art style inspired by Lucide / Heroicons.
 */

const I = ({ d, size = 20, color = 'currentColor', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d={d} />
    </svg>
);

export const IconHome = (p) => <I d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z M9 21V12h6v9" {...p} />;
export const IconTimeline = (p) => <I d="M12 2v20 M4.93 4.93l2.83 2.83 M19.07 4.93l-2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M19.07 19.07l-2.83-2.83" {...p} />;
export const IconAlphabet = (p) => (
    <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke={p.color || 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5h18v2" />
        <path d="M12 5v14" />
        <path d="M8 19h8" />
    </svg>
);
export const IconMantra = (p) => <I d="M12 2a10 10 0 100 20 10 10 0 000-20z M12 8v4l3 3" {...p} />;
export const IconBook = (p) => <I d="M4 19.5A2.5 2.5 0 016.5 17H20 M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" {...p} />;
export const IconPoetry = (p) => <I d="M12 3c-4 0-8 4-8 8 0 6 8 10 8 10s8-4 8-10c0-4-4-8-8-8z" {...p} />;
export const IconTarget = (p) => (
    <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke={p.color || 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);
export const IconSun = (p) => <I d="M12 1v2 M12 21v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42 M17 12a5 5 0 11-10 0 5 5 0 0110 0z" {...p} />;
export const IconMoon = (p) => <I d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" {...p} />;
export const IconVolume = (p) => <I d="M11 5L6 9H2v6h4l5 4V5z M19.07 4.93a10 10 0 010 14.14 M15.54 8.46a5 5 0 010 7.07" {...p} />;
export const IconPlus = (p) => <I d="M12 5v14 M5 12h14" {...p} />;
export const IconMinus = (p) => <I d="M5 12h14" {...p} />;
export const IconChevronRight = (p) => <I d="M9 18l6-6-6-6" {...p} />;
export const IconChevronLeft = (p) => <I d="M15 18l-6-6 6-6" {...p} />;
export const IconSettings = (p) => <I d="M12 8a4 4 0 100 8 4 4 0 000-8z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 005 15.4a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9.4a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09" {...p} />;
export const IconCheck = (p) => <I d="M20 6L9 17l-5-5" {...p} />;
export const IconX = (p) => <I d="M18 6L6 18 M6 6l12 12" {...p} />;
export const IconStar = (p) => <I d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" {...p} />;
export const IconGlobe = (p) => (
    <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke={p.color || 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z" />
    </svg>
);
