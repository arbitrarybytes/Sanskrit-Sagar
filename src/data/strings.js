/**
 * UI string constants for English and Hindi.
 * Used throughout Learn and sub-tab components so the
 * entire UI chrome flips when the user toggles lang.
 */
export const S = {
    en: {
        // Learn header
        homeLabel: 'Home',
        langToggle: 'हि',
        levelLabel: (l) => `Level ${l}`,
        themeLight: 'Light',
        themeDark: 'Dark',

        // Tabs
        tabs: {
            varnamala: 'Alphabet',
            mantras: 'Mantras',
            words: 'Words',
            quiz: 'Quiz',
        },

        // Varnamala
        sectionVowels: 'Vowels',
        sectionConsonants: 'Consonants',
        vowelSubtitle: 'स्वर (Svara) — Vowels are the soul of Sanskrit. Each carries its own distinct vibrational quality. Tap a letter to learn!',
        consonantLabel: (g) => g.desc,
        letterProgress: (n, t) => `${n} / ${t} letters explored`,
        noLetterSelected: 'Tap any letter to explore it',
        closePanel: 'Close',

        // Mantras
        mantrasSubtitle: '"mananāt trāyate iti mantraḥ" — That which protects the mind by contemplation. Expand each to learn its meaning.',
        meaning: 'Meaning',

        // Words
        categoriesLabel: { all: 'All', family: 'Family', nature: 'Nature', greetings: 'Greetings', values: 'Values' },
        wordsSubtitle: (lang) => `Tap a card to reveal its ${lang === 'en' ? 'English' : 'Hindi'} meaning. +5 XP per new word!`,
        wordProgress: (n, t) => `${n}/${t} words`,
        tapReveal: 'tap to reveal ▾',

        // Quiz
        questionOf: (c, t) => `Question ${c} of ${t}`,
        scoreLabel: (s) => `⭐ ${s} correct`,
        correct: (xp) => `✓ Correct! +${xp} XP`,
        wrong: (ans) => `✗ Correct answer: ${ans}`,
        nextQ: 'Next Question →',
        viewResults: 'View Results 🏆',
        tryAgain: '🔄 Try Again',
        exceptional: 'Exceptional!',
        wellDone: 'Well done!',
        keepGoing: 'Keep going!',
        score: 'Score',

        // Path
        pathTitle: 'Choose Your Path',
        pathSub: 'Begin your Sanskrit journey through the language closest to your heart.',
    },

    hi: {
        // Learn header
        homeLabel: 'होम',
        langToggle: 'EN',
        levelLabel: (l) => `स्तर ${l}`,
        themeLight: 'प्रकाश',
        themeDark: 'अंधकार',

        // Tabs
        tabs: {
            varnamala: 'वर्णमाला',
            mantras: 'मन्त्र',
            words: 'शब्दकोश',
            quiz: 'परीक्षा',
        },

        // Varnamala
        sectionVowels: 'स्वर',
        sectionConsonants: 'व्यञ्जन',
        vowelSubtitle: 'स्वर संस्कृत की आत्मा हैं। प्रत्येक में एक विशेष कंपन गुण है। किसी अक्षर को टैप करें और जानें!',
        consonantLabel: (g) => g.skDesc || g.desc,
        letterProgress: (n, t) => `${n} / ${t} अक्षर सीखे`,
        noLetterSelected: 'किसी भी अक्षर को टैप करें',
        closePanel: 'बंद करें',

        // Mantras
        mantrasSubtitle: '"मननात् त्रायते इति मन्त्रः" — जो मन को ध्यान द्वारा सुरक्षित रखे वही मन्त्र है। अर्थ जानने के लिए विस्तार करें।',
        meaning: 'अर्थ',

        // Words
        categoriesLabel: { all: 'सभी', family: 'परिवार', nature: 'प्रकृति', greetings: 'अभिवादन', values: 'मूल्य' },
        wordsSubtitle: () => 'कार्ड टैप करें और हिन्दी अर्थ जानें। प्रत्येक नए शब्द पर +5 XP!',
        wordProgress: (n, t) => `${n}/${t} शब्द`,
        tapReveal: 'अर्थ देखें ▾',

        // Quiz
        questionOf: (c, t) => `प्रश्न ${c} / ${t}`,
        scoreLabel: (s) => `⭐ ${s} सही`,
        correct: (xp) => `✓ सही! +${xp} XP`,
        wrong: (ans) => `✗ सही उत्तर: ${ans}`,
        nextQ: 'अगला प्रश्न →',
        viewResults: 'परिणाम देखें 🏆',
        tryAgain: '🔄 पुनः प्रयास',
        exceptional: 'अभिनन्दनम्!',
        wellDone: 'साधुवादः!',
        keepGoing: 'पुनः पठत!',
        score: 'अंक',

        // Path
        pathTitle: 'अपनी भाषा चुनें',
        pathSub: 'जिस भाषा में आप सहज हैं, उसी से संस्कृत का सफर शुरू करें।',
    },
};
