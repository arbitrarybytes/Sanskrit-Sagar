/**
 * Text-to-Speech utility for Sanskrit vocabulary.
 *
 * Robust implementation that handles:
 *  - Chrome's async voice loading (getVoices() returns [] initially)
 *  - Chrome cancel()-then-speak() race condition
 *  - Missing Hindi voices (falls back to any available voice)
 *  - Background tab pausing
 */

/** Promise that resolves once voices are loaded */
let _voicesReady = null;

const waitForVoices = () => {
    if (_voicesReady) return _voicesReady;

    _voicesReady = new Promise((resolve) => {
        const synth = window.speechSynthesis;
        if (!synth) { resolve([]); return; }

        // Try immediately — works in Firefox and Safari
        const initial = synth.getVoices();
        if (initial && initial.length > 0) {
            resolve(initial);
            return;
        }

        // Chrome loads voices asynchronously
        let attempts = 0;
        const tryLoad = () => {
            const voices = synth.getVoices();
            if (voices && voices.length > 0) {
                resolve(voices);
            } else if (attempts < 20) {
                attempts++;
                setTimeout(tryLoad, 100);
            } else {
                // Give up after 2 seconds — no voices available
                console.warn('[TTS] No voices found after 2s');
                resolve([]);
            }
        };

        // Listen for the event AND poll (some browsers don't fire the event)
        synth.onvoiceschanged = () => {
            const v = synth.getVoices();
            if (v && v.length > 0) resolve(v);
        };
        setTimeout(tryLoad, 50);
    });

    return _voicesReady;
};

// Start loading immediately on module init
if (typeof window !== 'undefined' && window.speechSynthesis) {
    waitForVoices();
}

/**
 * Pick the best voice for Devanagari/Hindi text.
 */
const pickVoice = (voices) => {
    if (!voices || voices.length === 0) return null;

    // 1. Google online Hindi (Chrome exposes as "Google हिन्दी")
    const googleHi = voices.find((v) => v.name.includes('Google') && v.lang.startsWith('hi'));
    if (googleHi) return googleHi;

    // 2. Microsoft Hindi (Edge / Windows)
    const msHi = voices.find((v) => /Microsoft.*Hindi/i.test(v.name));
    if (msHi) return msHi;

    // 3. Any hi-IN, then any hi-*
    const hiIN = voices.find((v) => v.lang === 'hi-IN');
    if (hiIN) return hiIN;
    const hi = voices.find((v) => v.lang.startsWith('hi'));
    if (hi) return hi;

    // 4. Any Indic language
    const indic = voices.find((v) => /^(sa-|bn|mr|gu|ta|te|kn|ml|pa)/.test(v.lang));
    if (indic) return indic;

    // 5. Fallback — first available voice
    return voices[0];
};

/**
 * Speak a piece of text.
 *
 * @param {string} text — the text to speak
 * @param {object} opts
 * @param {number} opts.rate  — 0.1–2.0, default 0.85
 * @param {number} opts.pitch — 0–2, default 1.0
 * @param {string} opts.lang  — BCP-47 tag, default 'hi-IN'
 */
export const speak = async (text, { rate = 0.85, pitch = 1.0, lang = 'hi-IN' } = {}) => {
    const synth = window.speechSynthesis;
    if (!synth || !text) return;

    // Wait for voices to be available
    const voices = await waitForVoices();

    // Cancel anything currently playing
    if (synth.speaking || synth.pending) {
        synth.cancel();
    }

    // Small delay after cancel to let Chrome clean up
    await new Promise((r) => setTimeout(r, 80));

    const utt = new SpeechSynthesisUtterance(text);
    utt.rate = rate;
    utt.pitch = pitch;
    utt.lang = lang;

    const voice = pickVoice(voices);
    if (voice) {
        utt.voice = voice;
        // Only override lang if the voice actually handles Hindi/Indic
        if (voice.lang.startsWith('hi') || /^(sa-|bn|mr|gu|ta|te|kn)/.test(voice.lang)) {
            utt.lang = voice.lang;
        }
        // otherwise keep utt.lang = 'hi-IN' and let browser approximate
    }

    console.log('[TTS]', { text: text.slice(0, 30), voice: voice?.name, voiceLang: voice?.lang, uttLang: utt.lang });

    utt.onerror = (e) => {
        console.warn('[TTS] Speech error:', e.error);
    };

    synth.speak(utt);

    // Chrome background-tab keep-alive
    const keepAlive = setInterval(() => {
        if (!synth.speaking) { clearInterval(keepAlive); return; }
        synth.pause();
        synth.resume();
    }, 5000);
    utt.onend = () => clearInterval(keepAlive);
    utt.onerror = () => clearInterval(keepAlive);
};

/** Stop speech */
export const stopSpeech = () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
};

/** Check if TTS is supported */
export const ttsSupported = () =>
    typeof window !== 'undefined' && 'speechSynthesis' in window;
