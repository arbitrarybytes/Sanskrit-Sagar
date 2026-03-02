// ═══════════════════════════════════════════════════════════════════════════
// SANSKRIT SĀGAR — MASTER CONTENT DATA
// ═══════════════════════════════════════════════════════════════════════════

// ─── History / Timeline ──────────────────────────────────────────────────
export const TIMELINE = [
    {
        era: '~1500 BCE', symbol: '🕉️', color: '#E8A030',
        titleSk: 'वैदिक काल', titleEn: 'The Vedic Age',
        body: 'The Ṛgveda — humanity\'s oldest surviving text — was composed in Vedic Sanskrit. 10,552 hymns encoding cosmic knowledge, ritual precision, and philosophical inquiry. Sanskrit literally means "saṃ-kṛta" — perfectly constructed.',
        bodyHi: 'ऋग्वेद — मानवता का सबसे प्राचीन जीवित ग्रंथ — वैदिक संस्कृत में रचा गया। 10,552 सूक्त जो ब्रह्मांडीय ज्ञान, अनुष्ठान की सटीकता और दार्शनिक जिज्ञासा को संजोए हैं।',
        source: 'https://www.britannica.com/topic/Sanskrit-language',
    },
    {
        era: '~800 BCE', symbol: '📜', color: '#AB47BC',
        titleSk: 'उपनिषद् काल', titleEn: 'The Upanishadic Era',
        body: 'The Upaniṣads emerged — 108+ texts exploring the nature of Brahman, Ātman, and reality itself. "Tat tvam asi" (You are That) and "Aham Brahmāsmi" (I am Brahman) became cornerstones of Indian philosophy.',
        bodyHi: 'उपनिषदों का उदय हुआ — 108+ ग्रंथ जो ब्रह्म, आत्मा और वास्तविकता के स्वरूप की खोज करते हैं। "तत् त्वम् असि" और "अहं ब्रह्मास्मि" भारतीय दर्शन के आधार स्तम्भ बने।',
        source: 'https://en.wikipedia.org/wiki/Upanishads',
    },
    {
        era: '~4th c. BCE', symbol: '🧠', color: '#29B6F6',
        titleSk: 'पाणिनि काल', titleEn: 'Pāṇini\'s Grammar',
        body: 'Pāṇini composed the Aṣṭādhyāyī — 3,959 sūtras that completely describe Sanskrit\'s grammar with mathematical precision. NASA\'s 1985 paper proposed it as ideal for AI knowledge representation. It predates Euclid by a century.',
        bodyHi: 'पाणिनि ने अष्टाध्यायी की रचना की — 3,959 सूत्र जो गणितीय यथार्थता से संस्कृत व्याकरण का पूर्ण वर्णन करते हैं। NASA ने 1985 में इसे AI ज्ञान प्रतिनिधित्व के लिए आदर्श बताया।',
        source: 'https://en.wikipedia.org/wiki/Sanskrit#Computational_linguistics',
    },
    {
        era: '~200 BCE', symbol: '📚', color: '#66BB6A',
        titleSk: 'महाकाव्य काल', titleEn: 'The Epic Age',
        body: 'The Mahābhārata (100,000 verses — world\'s longest epic) and Rāmāyaṇa (24,000 verses) were composed, embedding philosophy, governance, and dharma into narrative. The Bhagavad Gītā, nestled within the Mahābhārata, became humanity\'s most profound dialogue.',
        bodyHi: 'महाभारत (1,00,000 श्लोक — विश्व का सबसे लंबा महाकाव्य) और रामायण (24,000 श्लोक) की रचना हुई। भगवद्गीता, महाभारत में समाहित, मानवता का सबसे गहन संवाद बनी।',
        source: 'https://en.wikipedia.org/wiki/Sanskrit_literature',
    },
    {
        era: '~500 CE', symbol: '🔢', color: '#EF5350',
        titleSk: 'गणित-ज्योतिष काल', titleEn: 'Science & Mathematics',
        body: 'Āryabhaṭa composed the Āryabhaṭīya — introducing zero, the decimal system, and calculating π to 4 decimal places. Suśruta\'s Saṃhitā documented 300+ surgical procedures. Sanskrit became the language of rigorous science.',
        bodyHi: 'आर्यभट ने आर्यभटीय की रचना की — शून्य, दशमलव पद्धति और π का 4 दशमलव स्थानों तक गणन। सुश्रुत संहिता में 300+ शल्य प्रक्रियाएँ वर्णित हैं। संस्कृत विज्ञान की भाषा बनी।',
        source: 'https://en.wikipedia.org/wiki/Aryabhata',
    },
    {
        era: 'Today', symbol: '✨', color: '#FF7A35',
        titleSk: 'पुनर्जागरणम्', titleEn: 'The Renaissance',
        body: '22+ million Sanskrit learners worldwide. Computational linguistics, neural interfaces, and AI researchers study Pāṇini\'s grammar. UNESCO has recognized Vedic chanting as Intangible Cultural Heritage. Sanskrit is alive — and its best chapters are being written now.',
        bodyHi: 'विश्वभर में 2.2 करोड़+ संस्कृत शिक्षार्थी। कम्प्यूटेशनल भाषाविज्ञान और AI शोधकर्ता पाणिनि के व्याकरण का अध्ययन कर रहे हैं। UNESCO ने वैदिक पाठ को अमूर्त सांस्कृतिक विरासत के रूप में मान्यता दी है।',
        source: 'https://en.wikipedia.org/wiki/Sanskrit',
    },
];

// ─── Varṇamālā — Vowels ──────────────────────────────────────────────────
export const VOWELS = [
    { deva: 'अ', roman: 'a', hint: 'as "u" in "but"', hintHi: '"अ" जैसे — "अमर" में', note: 'The universal vowel — present in every consonant', noteHi: 'सार्वभौमिक स्वर — हर व्यञ्जन में निहित', tts: 'अ' },
    { deva: 'आ', roman: 'ā', hint: 'as "a" in "father"', hintHi: '"आ" जैसे — "आम" में', note: 'Long ā — twice the duration', noteHi: 'दीर्घ आ — दोगुना समय', tts: 'आ' },
    { deva: 'इ', roman: 'i', hint: 'as "i" in "bit"', hintHi: '"इ" जैसे — "इधर" में', note: 'Short palatal vowel', noteHi: 'ह्रस्व तालव्य स्वर', tts: 'इ' },
    { deva: 'ई', roman: 'ī', hint: 'as "ee" in "bee"', hintHi: '"ई" जैसे — "ईख" में', note: 'Long ī — held twice as long', noteHi: 'दीर्घ ई — दोगुने समय', tts: 'ई' },
    { deva: 'उ', roman: 'u', hint: 'as "u" in "put"', hintHi: '"उ" जैसे — "उठना" में', note: 'Short labial vowel', noteHi: 'ह्रस्व ओष्ठ्य स्वर', tts: 'उ' },
    { deva: 'ऊ', roman: 'ū', hint: 'as "oo" in "food"', hintHi: '"ऊ" जैसे — "ऊँट" में', note: 'Long ū — deep and resonant', noteHi: 'दीर्घ ऊ — गहरा गूँजदार', tts: 'ऊ' },
    { deva: 'ऋ', roman: 'ṛ', hint: 'as "ri" in "ritual"', hintHi: '"ऋ" जैसे — "ऋषि" में', note: 'Vocalic r — unique to Sanskrit', noteHi: 'वैदिक स्वर — संस्कृत की विशेषता', tts: 'ऋ' },
    { deva: 'ए', roman: 'e', hint: 'as "ay" in "day"', hintHi: '"ए" जैसे — "एक" में', note: 'Palatal long vowel', noteHi: 'दीर्घ तालव्य स्वर', tts: 'ए' },
    { deva: 'ऐ', roman: 'ai', hint: 'as "i" in "mine"', hintHi: '"ऐ" जैसे — "ऐनक" में', note: 'Diphthong — two sounds blended', noteHi: 'संधि-स्वर — दो ध्वनियों का मेल', tts: 'ऐ' },
    { deva: 'ओ', roman: 'o', hint: 'as "o" in "go"', hintHi: '"ओ" जैसे — "ओस" में', note: 'Labial-palatal long vowel', noteHi: 'दीर्घ ओष्ठ-तालव्य स्वर', tts: 'ओ' },
    { deva: 'औ', roman: 'au', hint: 'as "ow" in "how"', hintHi: '"औ" जैसे — "औजार" में', note: 'Diphthong — full resonance', noteHi: 'संधि-स्वर — पूर्ण अनुनाद', tts: 'औ' },
    { deva: 'अं', roman: 'aṃ', hint: 'nasal hum', hintHi: 'अनुनासिक — नाक से हुंकार', note: 'Anusvāra — nasal resonance', noteHi: 'अनुस्वार — नासिक्य ध्वनि', tts: 'अं' },
    { deva: 'अः', roman: 'aḥ', hint: 'soft breath exhale', hintHi: 'श्वास विसर्ग — "अह्" ध्वनि', note: 'Visarga — the breath echo', noteHi: 'विसर्ग — श्वास प्रतिध्वनि', tts: 'अः' },
];

// ─── Varṇamālā — Consonant Groups ────────────────────────────────────────
export const CONSONANT_GROUPS = [
    {
        name: 'Gutturals', sk: 'कण्ठ्य', nameHi: 'कण्ठ्य वर्ग', desc: 'Throat sounds', descHi: 'कण्ठ से उच्चारित', color: '#E8A030', bodyPart: 'Throat · कण्ठ',
        letters: [
            { deva: 'क', roman: 'ka', hint: 'k as in "karma"', hintHi: 'क — जैसे "कमल" में', tts: 'क' },
            { deva: 'ख', roman: 'kha', hint: 'aspirated k', hintHi: 'ख — जैसे "खेल" में', tts: 'ख' },
            { deva: 'ग', roman: 'ga', hint: 'g as in "guru"', hintHi: 'ग — जैसे "गाना" में', tts: 'ग' },
            { deva: 'घ', roman: 'gha', hint: 'aspirated g', hintHi: 'घ — जैसे "घर" में', tts: 'घ' },
            { deva: 'ङ', roman: 'ṅa', hint: 'ng as in "sing"', hintHi: 'ङ — "सिंह" जैसी नासिक्य ध्वनि', tts: 'ङ' },
        ],
    },
    {
        name: 'Palatals', sk: 'तालव्य', nameHi: 'तालव्य वर्ग', desc: 'Palate sounds', descHi: 'तालु से उच्चारित', color: '#AB47BC', bodyPart: 'Palate · तालु',
        letters: [
            { deva: 'च', roman: 'ca', hint: 'ch as in "chant"', hintHi: 'च — जैसे "चाँद" में', tts: 'च' },
            { deva: 'छ', roman: 'cha', hint: 'aspirated ch', hintHi: 'छ — जैसे "छत" में', tts: 'छ' },
            { deva: 'ज', roman: 'ja', hint: 'j as in "joy"', hintHi: 'ज — जैसे "जल" में', tts: 'ज' },
            { deva: 'झ', roman: 'jha', hint: 'aspirated j', hintHi: 'झ — जैसे "झरना" में', tts: 'झ' },
            { deva: 'ञ', roman: 'ña', hint: 'ny as in "canyon"', hintHi: 'ञ — तालव्य नासिक्य', tts: 'ञ' },
        ],
    },
    {
        name: 'Retroflexes', sk: 'मूर्धन्य', nameHi: 'मूर्धन्य वर्ग', desc: 'Roof-of-mouth sounds', descHi: 'मूर्धा से उच्चारित', color: '#EF5350', bodyPart: 'Roof · मूर्धा',
        letters: [
            { deva: 'ट', roman: 'ṭa', hint: 'retroflex t', hintHi: 'ट — जैसे "टमाटर" में', tts: 'ट' },
            { deva: 'ठ', roman: 'ṭha', hint: 'aspirated retroflex', hintHi: 'ठ — जैसे "ठंडा" में', tts: 'ठ' },
            { deva: 'ड', roman: 'ḍa', hint: 'retroflex d', hintHi: 'ड — जैसे "डमरू" में', tts: 'ड' },
            { deva: 'ढ', roman: 'ḍha', hint: 'aspirated retroflex', hintHi: 'ढ — जैसे "ढोल" में', tts: 'ढ' },
            { deva: 'ण', roman: 'ṇa', hint: 'retroflex n', hintHi: 'ण — जैसे "राणा" में', tts: 'ण' },
        ],
    },
    {
        name: 'Dentals', sk: 'दन्त्य', nameHi: 'दन्त्य वर्ग', desc: 'Teeth sounds', descHi: 'दाँतों से उच्चारित', color: '#29B6F6', bodyPart: 'Teeth · दन्त',
        letters: [
            { deva: 'त', roman: 'ta', hint: 't as in "tabla"', hintHi: 'त — जैसे "तारा" में', tts: 'त' },
            { deva: 'थ', roman: 'tha', hint: 'aspirated dental', hintHi: 'थ — जैसे "थाली" में', tts: 'थ' },
            { deva: 'द', roman: 'da', hint: 'd as in "dharma"', hintHi: 'द — जैसे "दिन" में', tts: 'द' },
            { deva: 'ध', roman: 'dha', hint: 'aspirated dental', hintHi: 'ध — जैसे "धन" में', tts: 'ध' },
            { deva: 'न', roman: 'na', hint: 'n as in "namaste"', hintHi: 'न — जैसे "नाम" में', tts: 'न' },
        ],
    },
    {
        name: 'Labials', sk: 'ओष्ठ्य', nameHi: 'ओष्ठ्य वर्ग', desc: 'Lip sounds', descHi: 'ओठों से उच्चारित', color: '#66BB6A', bodyPart: 'Lips · ओष्ठ',
        letters: [
            { deva: 'प', roman: 'pa', hint: 'p as in "prāṇa"', hintHi: 'प — जैसे "पानी" में', tts: 'प' },
            { deva: 'फ', roman: 'pha', hint: 'aspirated p', hintHi: 'फ — जैसे "फूल" में', tts: 'फ' },
            { deva: 'ब', roman: 'ba', hint: 'b as in "Brahman"', hintHi: 'ब — जैसे "बादल" में', tts: 'ब' },
            { deva: 'भ', roman: 'bha', hint: 'aspirated b', hintHi: 'भ — जैसे "भारत" में', tts: 'भ' },
            { deva: 'म', roman: 'ma', hint: 'm as in "mantra"', hintHi: 'म — जैसे "माता" में', tts: 'म' },
        ],
    },
    {
        name: 'Semi-vowels & Sibilants', sk: 'अन्तस्थ / ऊष्म', nameHi: 'अन्तस्थ एवं ऊष्म', desc: 'Flowing & hissing sounds', descHi: 'प्रवाहमान एवं ऊष्म ध्वनियाँ', color: '#E8C547', bodyPart: 'Various · विविध',
        letters: [
            { deva: 'य', roman: 'ya', hint: 'y as in "yoga"', hintHi: 'य — जैसे "यात्रा" में', tts: 'य' },
            { deva: 'र', roman: 'ra', hint: 'r as in "rāga"', hintHi: 'र — जैसे "राम" में', tts: 'र' },
            { deva: 'ल', roman: 'la', hint: 'l as in "lotus"', hintHi: 'ल — जैसे "लहर" में', tts: 'ल' },
            { deva: 'व', roman: 'va', hint: 'v as in "Veda"', hintHi: 'व — जैसे "वायु" में', tts: 'व' },
            { deva: 'श', roman: 'śa', hint: 'sh as in "Śiva"', hintHi: 'श — जैसे "शिव" में', tts: 'श' },
            { deva: 'ष', roman: 'ṣa', hint: 'retroflex sh', hintHi: 'ष — जैसे "षट्" में', tts: 'ष' },
            { deva: 'स', roman: 'sa', hint: 's as in "sūrya"', hintHi: 'स — जैसे "सूर्य" में', tts: 'स' },
            { deva: 'ह', roman: 'ha', hint: 'h as in "Hari"', hintHi: 'ह — जैसे "हरि" में', tts: 'ह' },
        ],
    },
];

// ─── Mantras ──────────────────────────────────────────────────────────────
export const MANTRAS = [
    {
        id: 'gayatri', name: 'Gāyatrī Mantra', nameSk: 'गायत्री मन्त्रः',
        deity: 'Savitr · Solar Deity of Wisdom', deityHi: 'सवितृ · ज्ञान के सूर्य देवता',
        text: 'ॐ भूर्भुवः स्वः\nतत्सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि\nधियो यो नः प्रचोदयात् ॥',
        roman: 'Oṃ bhūr bhuvaḥ svaḥ\ntatsaviturvareṇyaṃ\nbhargo devasya dhīmahi\ndhiyo yo naḥ pracodayāt',
        en: 'We meditate upon the glorious effulgence of the divine Sun. May that supreme being illumine our intellect and guide us toward righteousness.',
        hi: 'हम उस परम दिव्य सूर्य-शक्ति का ध्यान करते हैं। वह सर्वोच्च सत्ता हमारी बुद्धि को प्रकाशित करे और सन्मार्ग की ओर प्रेरित करे।',
        benefit: 'Illuminates intellect · Purifies mind · Awakens inner wisdom',
        benefitHi: 'बुद्धि को प्रकाशित करे · मन को शुद्ध करे · आंतरिक ज्ञान जगाए',
        source: 'Rigveda 3.62.10', url: 'https://en.wikipedia.org/wiki/Gayatri_Mantra', xp: 30,
    },
    {
        id: 'mrityunjaya', name: 'Mahāmṛtyuñjaya Mantra', nameSk: 'महामृत्युञ्जय मन्त्रः',
        deity: 'Śiva · The Conqueror of Death', deityHi: 'शिव · मृत्यु के विजेता',
        text: 'ॐ त्र्यम्बकं यजामहे\nसुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्\nमृत्योर्मुक्षीय माऽमृतात् ॥',
        roman: 'Oṃ tryambakaṃ yajāmahe\nsughandhiṃ puṣṭivardhanam\nurvārukamiva bandhanān\nmṛtyormukṣīya māmṛtāt',
        en: 'We worship the three-eyed one (Śiva), fragrant and nourishing. As a cucumber is freed from its vine, may we be liberated from death unto immortality.',
        hi: 'हम त्रिनेत्रधारी शिव की आराधना करते हैं जो सुगन्धित और पोषणकर्ता हैं। जैसे ककड़ी बेल से मुक्त होती है, वैसे हमें मृत्यु से मुक्ति मिले।',
        benefit: 'Bestows health · Overcomes fear · Grants longevity',
        benefitHi: 'स्वास्थ्य प्रदान करे · भय का नाश · दीर्घायु प्रदान करे',
        source: 'Rigveda 7.59.12', url: 'https://en.wikipedia.org/wiki/Maha_Mrityunjaya_Mantra', xp: 35,
    },
    {
        id: 'saraswati', name: 'Sarasvatī Vandanā', nameSk: 'सरस्वती वन्दना',
        deity: 'Sarasvatī · Goddess of Learning & Speech', deityHi: 'सरस्वती · विद्या एवं वाणी की देवी',
        text: 'या कुन्देन्दुतुषारहारधवला\nया शुभ्रवस्त्रावृता ।\nया वीणावरदण्डमण्डितकरा\nया श्वेतपद्मासना ॥',
        roman: 'Yā kundenduthuṣārahāradhavalā\nyā śubhravstrāvṛtā\nyā vīṇāvaradaṇḍamaṇḍitakarā\nyā śvetapadmāsanā',
        en: 'She who is radiant as jasmine, moon, and snow; clothed in pure white; holding the vīṇā; seated upon a white lotus — may Sarasvatī remove all ignorance.',
        hi: 'जो कुन्द, चन्द्र और हिम के समान गौरवर्ण हैं, शुभ्र वस्त्र धारण किए, वीणा लिए श्वेत कमल पर विराजमान — वे सरस्वती हमारी अज्ञानता दूर करें।',
        benefit: 'Blesses learning · Grants eloquence · Removes ignorance',
        benefitHi: 'विद्या का आशीर्वाद · वाक्-शक्ति प्रदान · अज्ञान का नाश',
        source: 'Ādi Śaṅkarācārya', url: 'https://en.wikipedia.org/wiki/Saraswati_Vandana_Stotra', xp: 30,
    },
    {
        id: 'shanti', name: 'Śānti Mantra', nameSk: 'शान्ति मन्त्रः',
        deity: 'Universal Peace · The Cosmos', deityHi: 'विश्व शान्ति · सम्पूर्ण सृष्टि',
        text: 'ॐ सह नाववतु ।\nसह नौ भुनक्तु ।\nसह वीर्यं करवावहै ।\nतेजस्वि नावधीतमस्तु\nमा विद्विषावहै ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
        roman: 'Oṃ saha nāvavatu\nsaha nau bhunaktu\nsaha vīryaṃ karavāvahai\ntejasvi nāvadhītamastu\nmā vidviṣāvahai\nOṃ śāntiḥ śāntiḥ śāntiḥ',
        en: 'May we be protected together. May we be nourished together. May we work with great energy. May our study illuminate. May there be no discord. Om Peace, Peace, Peace.',
        hi: 'हम दोनों की रक्षा हो, पोषण हो, बल अर्जन हो। अध्ययन तेजस्वी हो, परस्पर वैर न हो। ॐ शांति शांति शांति।',
        benefit: 'Creates harmony · Purifies study · Radiates peace',
        benefitHi: 'सामंजस्य · अध्ययन शुद्धि · शान्ति विकिरण',
        source: 'Taittirīya Upaniṣad', url: 'https://en.wikipedia.org/wiki/Shanti_Mantra', xp: 25,
    },
    {
        id: 'ganesh', name: 'Gaṇeśa Vandanā', nameSk: 'गणेश वन्दना',
        deity: 'Gaṇeśa · Remover of Obstacles', deityHi: 'गणेश · विघ्नहर्ता',
        text: 'वक्रतुण्ड महाकाय\nसूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव\nसर्वकार्येषु सर्वदा ॥',
        roman: 'Vakratuṇḍa mahākāya\nsūryakoṭi samaprabha\nnir­vighnaṃ kuru me deva\nsarvakāryeṣu sarvadā',
        en: 'O Gaṇeśa, with curved trunk and mighty form, radiant as a billion suns — bless my every endeavor and remove all obstacles, always.',
        hi: 'हे वक्रतुण्ड, महाकाय, सूर्यकोटि समान तेजस्वी — मेरे सभी कार्यों में सदा विघ्न दूर करें।',
        benefit: 'Removes obstacles · Blesses beginnings · Grants success',
        benefitHi: 'विघ्न हरण · शुभारम्भ · सफलता प्रदान',
        source: 'Traditional Gānapatya', url: 'https://en.wikipedia.org/wiki/Ganesha', xp: 25,
    },
];

// ─── Vocabulary ───────────────────────────────────────────────────────────
export const WORDS = [
    { deva: 'माता', roman: 'mātā', hi: 'माँ', en: 'Mother', cat: 'family', emoji: '👩', sentence: 'माता गृहे अस्ति।', sentenceEn: 'Mother is at home.', sentenceHi: 'माँ घर पर हैं।' },
    { deva: 'पिता', roman: 'pitā', hi: 'पिता', en: 'Father', cat: 'family', emoji: '👨', sentence: 'पिता कार्यं करोति।', sentenceEn: 'Father is working.', sentenceHi: 'पिताजी काम कर रहे हैं।' },
    { deva: 'पुत्रः', roman: 'putraḥ', hi: 'बेटा', en: 'Son', cat: 'family', emoji: '👦', sentence: 'पुत्रः पठति।', sentenceEn: 'The son reads.', sentenceHi: 'बेटा पढ़ रहा है।' },
    { deva: 'पुत्री', roman: 'putrī', hi: 'बेटी', en: 'Daughter', cat: 'family', emoji: '👧', sentence: 'पुत्री गायति।', sentenceEn: 'The daughter sings.', sentenceHi: 'बेटी गा रही है।' },
    { deva: 'भ्राता', roman: 'bhrātā', hi: 'भाई', en: 'Brother', cat: 'family', emoji: '🤝', sentence: 'भ्राता क्रीडति।', sentenceEn: 'Brother is playing.', sentenceHi: 'भाई खेल रहा है।' },
    { deva: 'जलम्', roman: 'jalam', hi: 'पानी', en: 'Water', cat: 'nature', emoji: '💧', sentence: 'जलम् पिबामि।', sentenceEn: 'I drink water.', sentenceHi: 'मैं पानी पीता/पीती हूँ।' },
    { deva: 'अग्निः', roman: 'agniḥ', hi: 'आग', en: 'Fire', cat: 'nature', emoji: '🔥', sentence: 'अग्निः दहति।', sentenceEn: 'Fire burns.', sentenceHi: 'आग जलती है।' },
    { deva: 'वायुः', roman: 'vāyuḥ', hi: 'हवा/वायु', en: 'Wind', cat: 'nature', emoji: '💨', sentence: 'वायुः वहति।', sentenceEn: 'The wind blows.', sentenceHi: 'हवा बहती है।' },
    { deva: 'पृथ्वी', roman: 'pṛthvī', hi: 'पृथ्वी', en: 'Earth', cat: 'nature', emoji: '🌍', sentence: 'पृथ्वी गोलाकारा।', sentenceEn: 'Earth is spherical.', sentenceHi: 'पृथ्वी गोल है।' },
    { deva: 'सूर्यः', roman: 'sūryaḥ', hi: 'सूरज', en: 'Sun', cat: 'nature', emoji: '☀️', sentence: 'सूर्यः उदेति।', sentenceEn: 'The Sun rises.', sentenceHi: 'सूरज उगता है।' },
    { deva: 'चन्द्रः', roman: 'candraḥ', hi: 'चाँद', en: 'Moon', cat: 'nature', emoji: '🌙', sentence: 'चन्द्रः प्रकाशते।', sentenceEn: 'The Moon shines.', sentenceHi: 'चाँद चमकता है।' },
    { deva: 'वृक्षः', roman: 'vṛkṣaḥ', hi: 'पेड़', en: 'Tree', cat: 'nature', emoji: '🌳', sentence: 'वृक्षः फलानि ददाति।', sentenceEn: 'The tree gives fruit.', sentenceHi: 'पेड़ फल देता है।' },
    { deva: 'नमस्ते', roman: 'namaste', hi: 'नमस्ते', en: 'I bow to you', cat: 'greetings', emoji: '🙏', sentence: 'नमस्ते गुरो!', sentenceEn: 'Greetings, teacher!', sentenceHi: 'नमस्ते गुरुजी!' },
    { deva: 'धन्यवादः', roman: 'dhanyavādaḥ', hi: 'धन्यवाद', en: 'Thank you', cat: 'greetings', emoji: '🙏', sentence: 'धन्यवादः भवतः।', sentenceEn: 'Thank you, sir.', sentenceHi: 'आपका धन्यवाद।' },
    { deva: 'सत्यम्', roman: 'satyam', hi: 'सत्य', en: 'Truth', cat: 'values', emoji: '⚖️', sentence: 'सत्यमेव जयते।', sentenceEn: 'Truth alone triumphs.', sentenceHi: 'सत्य की ही जीत होती है।' },
    { deva: 'प्रेम', roman: 'prema', hi: 'प्रेम', en: 'Love', cat: 'values', emoji: '❤️', sentence: 'प्रेम सर्वत्र।', sentenceEn: 'Love is everywhere.', sentenceHi: 'प्रेम सर्वत्र है।' },
    { deva: 'शान्तिः', roman: 'śāntiḥ', hi: 'शांति', en: 'Peace', cat: 'values', emoji: '☮️', sentence: 'ॐ शान्तिः शान्तिः।', sentenceEn: 'Om Peace, Peace.', sentenceHi: 'ॐ शांति शांति।' },
    { deva: 'ज्ञानम्', roman: 'jñānam', hi: 'ज्ञान', en: 'Knowledge', cat: 'values', emoji: '📚', sentence: 'ज्ञानं परमं बलम्।', sentenceEn: 'Knowledge is supreme power.', sentenceHi: 'ज्ञान सर्वोच्च शक्ति है।' },
    { deva: 'आनन्दः', roman: 'ānandaḥ', hi: 'आनंद', en: 'Bliss', cat: 'values', emoji: '😊', sentence: 'सच्चिदानन्दम्।', sentenceEn: 'Being-Consciousness-Bliss.', sentenceHi: 'सत्-चित्-आनन्द।' },
    { deva: 'धर्मः', roman: 'dharmaḥ', hi: 'धर्म', en: 'Righteousness', cat: 'values', emoji: '🌟', sentence: 'धर्मो रक्षति रक्षितः।', sentenceEn: 'Dharma protects those who protect it.', sentenceHi: 'जो धर्म की रक्षा करता है, धर्म उसकी रक्षा करता है।' },
    { deva: 'विद्या', roman: 'vidyā', hi: 'विद्या', en: 'Education', cat: 'values', emoji: '🎓', sentence: 'विद्या ददाति विनयम्।', sentenceEn: 'Education gives humility.', sentenceHi: 'विद्या विनम्रता देती है।' },
    { deva: 'गुरुः', roman: 'guruḥ', hi: 'गुरु', en: 'Teacher', cat: 'family', emoji: '🧑‍🏫', sentence: 'गुरुर्ब्रह्मा गुरुर्विष्णुः।', sentenceEn: 'The teacher is Brahmā, the teacher is Viṣṇu.', sentenceHi: 'गुरु ब्रह्मा हैं, गुरु विष्णु हैं।' },
    { deva: 'पुस्तकम्', roman: 'pustakam', hi: 'किताब', en: 'Book', cat: 'values', emoji: '📖', sentence: 'पुस्तकं पठामि।', sentenceEn: 'I read a book.', sentenceHi: 'मैं किताब पढ़ता/पढ़ती हूँ।' },
    { deva: 'आकाशः', roman: 'ākāśaḥ', hi: 'आकाश', en: 'Sky', cat: 'nature', emoji: '🌌', sentence: 'आकाशः नीलः अस्ति।', sentenceEn: 'The sky is blue.', sentenceHi: 'आकाश नीला है।' },
];

// ─── Kāvya / Poetry — Subhāṣitas ─────────────────────────────────────────
export const KAVYA = [
    {
        id: 'vidya-dhanam',
        titleSk: 'विद्या का धन',
        titleEn: 'Wealth of Knowledge',
        shloka: 'विद्या ददाति विनयं\nविनयाद् याति पात्रताम् ।\nपात्रत्वात् धनमाप्नोति\nधनात् धर्मं ततः सुखम् ॥',
        roman: 'Vidyā dadāti vinayaṃ\nvinayād yāti pātratām\npātratvāt dhanam āpnoti\ndhanāt dharmaṃ tataḥ sukham',
        en: 'Education gives humility; from humility comes worthiness; from worthiness comes wealth; from wealth, righteous conduct; and from righteousness, happiness.',
        hi: 'विद्या विनय देती है, विनय से पात्रता, पात्रता से धन, धन से धर्म और धर्म से सुख प्राप्त होता है।',
        source: 'Hitopadeśa',
        theme: 'education',
        color: '#29B6F6',
    },
    {
        id: 'satya-jayate',
        titleSk: 'सत्य की विजय',
        titleEn: 'Truth Triumphs',
        shloka: 'सत्यमेव जयते नानृतं\nसत्येन पन्था विततो देवयानः ।\nयेनाक्रमन्त्यृषयो ह्याप्तकामा\nयत्र तत् सत्यस्य परमं निधानम् ॥',
        roman: 'Satyameva jayate nānṛtaṃ\nsatyena panthā vitato devayānaḥ\nyenākramantyṛṣayo hyāptakāmā\nyatra tat satyasya paramaṃ nidhānam',
        en: 'Truth alone triumphs, never falsehood. Through truth, the divine path is spread — the path trodden by the sages who have attained desires, to where the supreme treasure of truth resides.',
        hi: 'सत्य की ही विजय होती है, असत्य की नहीं। सत्य से देवयान मार्ग प्रशस्त होता है जिस पर आप्तकाम ऋषि चलते हैं, जहाँ सत्य का परम निधान है।',
        source: 'Muṇḍaka Upaniṣad 3.1.6 · India\'s National Motto',
        theme: 'truth',
        color: '#E8C547',
    },
    {
        id: 'vasudhaiva',
        titleSk: 'वसुधैव कुटुम्बकम्',
        titleEn: 'The World Is One Family',
        shloka: 'अयं निजः परो वेति\nगणना लघुचेतसाम् ।\nउदारचरितानां तु\nवसुधैव कुटुम्बकम् ॥',
        roman: 'Ayaṃ nijaḥ paro veti\ngaṇanā laghucetasām\nudāracaritānāṃ tu\nvasudhaiva kuṭumbakam',
        en: '"This is mine, that is others\'" — such thinking belongs to small minds. For the noble-hearted, the entire world is one family.',
        hi: '"यह मेरा है, वह पराया" — यह सोच कमज़ोर मन की है। उदार हृदय वालों के लिए सम्पूर्ण संसार एक परिवार है।',
        source: 'Mahā Upaniṣad 6.72 · G20 India 2023 Theme',
        theme: 'unity',
        color: '#66BB6A',
    },
    {
        id: 'karma-yoga',
        titleSk: 'कर्मयोग',
        titleEn: 'The Yoga of Action',
        shloka: 'कर्मण्येवाधिकारस्ते\nमा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्\nमा ते सङ्गोऽस्त्वकर्मणि ॥',
        roman: 'Karmaṇyevādhikāraste\nmā phaleṣu kadācana\nmā karmaphalaheturbhūr\nmā te saṅgo\'stvakarmaṇi',
        en: 'You have the right to action alone, never to its fruits. Do not be motivated by the results, nor be attached to inaction.',
        hi: 'तुम्हारा अधिकार केवल कर्म पर है, फल पर कभी नहीं। कर्मफल की इच्छा मत रखो, और अकर्मण्यता में भी आसक्त मत हो।',
        source: 'Bhagavad Gītā 2.47 — Śrī Kṛṣṇa to Arjuna',
        theme: 'action',
        color: '#FF7A35',
    },
    {
        id: 'atithi-devo',
        titleSk: 'अतिथि देवो भव',
        titleEn: 'The Guest Is God',
        shloka: 'मातृदेवो भव ।\nपितृदेवो भव ।\nआचार्यदेवो भव ।\nअतिथिदेवो भव ॥',
        roman: 'Mātṛdevo bhava\npitṛdevo bhava\nācāryadevo bhava\natithidevo bhava',
        en: 'Revere your mother as God. Revere your father as God. Revere your teacher as God. Revere your guest as God.',
        hi: 'माता को देवता मानो, पिता को देवता मानो, आचार्य को देवता मानो, और अतिथि को भी देवता मानो।',
        source: 'Taittirīya Upaniṣad 1.11.2',
        theme: 'respect',
        color: '#AB47BC',
    },
];

// ─── Quiz Questions ───────────────────────────────────────────────────────
export const QUIZ = [
    { q: 'Which vowel makes the long "ī" (ee) sound?', qHi: '"ई" (दीर्घ) ध्वनि कौन-सा स्वर बनाता है?', opts: ['अ', 'ई', 'उ', 'ए'], ans: 'ई', xp: 10, hint: 'Think of "bee" — ई is in "Indra"', hintHi: '"ईख" में "ई" की ध्वनि' },
    { q: 'The consonant "क" sounds like?', qHi: 'व्यञ्जन "क" की ध्वनि कैसी है?', opts: ['g as in "go"', 'k as in "karma"', 'ch as in "chant"', 'j as in "joy"'], ans: 'k as in "karma"', xp: 10, hint: 'क begins the word "karma"!', hintHi: 'क "कमल" का पहला अक्षर है' },
    { q: 'What does "माता" mean?', qHi: '"माता" का अर्थ क्या है?', opts: ['Father', 'Son', 'Earth', 'Mother'], ans: 'Mother', xp: 15, hint: '"mātā" — think "maternal"', hintHi: '"माता" — माँ / जननी' },
    { q: 'Which Sanskrit word means Peace?', qHi: 'शान्ति का संस्कृत शब्द कौन-सा है?', opts: ['सत्यम्', 'आनन्दः', 'शान्तिः', 'प्रेम'], ans: 'शान्तिः', xp: 15, hint: 'Om Shanti Shanti Shanti!', hintHi: 'ॐ शान्तिः शान्तिः शान्तिः!' },
    { q: 'The Gāyatrī Mantra is from which Veda?', qHi: 'गायत्री मन्त्र किस वेद से है?', opts: ['Sāmaveda', 'Atharvaveda', 'Yajurveda', 'Rigveda'], ans: 'Rigveda', xp: 20, hint: 'Rigveda 3.62.10 — the oldest Veda', hintHi: 'ऋग्वेद 3.62.10 — सबसे प्राचीन वेद' },
    { q: '"सत्यमेव जयते" means?', qHi: '"सत्यमेव जयते" का अर्थ?', opts: ['Peace wins', 'Love conquers', 'Truth alone triumphs', 'Knowledge is power'], ans: 'Truth alone triumphs', xp: 15, hint: 'India\'s national motto!', hintHi: 'भारत का राष्ट्रीय आदर्श वाक्य!' },
    { q: 'How many sūtras in Pāṇini\'s Aṣṭādhyāyī?', qHi: 'पाणिनि की अष्टाध्यायी में कितने सूत्र हैं?', opts: ['1,008', '3,959', '10,552', '24,000'], ans: '3,959', xp: 20, hint: '3,959 complete rules of Sanskrit grammar', hintHi: '3,959 सम्पूर्ण व्याकरण सूत्र' },
    { q: '"आनन्दः" (Ānandaḥ) means?', qHi: '"आनन्दः" का अर्थ?', opts: ['Sorrow', 'Fire', 'Earth', 'Bliss / Joy'], ans: 'Bliss / Joy', xp: 15, hint: 'Sat-Chit-Ānanda — being, consciousness, bliss', hintHi: 'सत्-चित्-आनन्द — सत्ता, चेतना, आनन्द' },
    { q: 'The word "yoga" comes from which root?', qHi: '"योग" शब्द किस धातु से बना है?', opts: ['yuj (to unite)', 'yad (to ask)', 'yu (to be)', 'yā (to go)'], ans: 'yuj (to unite)', xp: 20, hint: 'Yoga = union. "yuj" = to yoke.', hintHi: 'योग = जुड़ना। "युज्" = जोड़ना।' },
    { q: '"वसुधैव कुटुम्बकम्" means?', qHi: '"वसुधैव कुटुम्बकम्" का अर्थ?', opts: ['War is necessary', 'Knowledge is power', 'The world is one family', 'Time waits for none'], ans: 'The world is one family', xp: 20, hint: 'G20 India 2023 theme!', hintHi: 'G20 भारत 2023 का विषय!' },
    { q: 'What does "सूर्यः" mean?', qHi: '"सूर्यः" का अर्थ?', opts: ['Moon', 'Star', 'Sky', 'Sun'], ans: 'Sun', xp: 10, hint: '"sūrya" → "solar" — same root!', hintHi: '"सूर्य" → "solar" — एक ही मूल!' },
    { q: 'Which mantra is the Mahāmṛtyuñjaya?', qHi: 'महामृत्युञ्जय मन्त्र कौन-सा है?', opts: ['ॐ नमः शिवाय', 'ॐ त्र्यम्बकं यजामहे...', 'ॐ भूर्भुवः स्वः...', 'वक्रतुण्ड महाकाय...'], ans: 'ॐ त्र्यम्बकं यजामहे...', xp: 20, hint: 'Mṛtyu = death. Jayā = victory.', hintHi: 'मृत्यु = मृत्यु। जय = विजय।' },
];

// ─── Navigation items ─────────────────────────────────────────────────────
export const NAV_ITEMS = [
    { id: 'home', icon: '🕉️', label: 'Home', labelHi: 'गृहम्', emoji: '🕉️' },
    { id: 'timeline', icon: '⏳', label: 'Timeline', labelHi: 'कालरेखा', emoji: '⏳' },
    { id: 'varnamala', icon: '🔤', label: 'Alphabet', labelHi: 'वर्णमाला', emoji: '🔤' },
    { id: 'mantras', icon: '📿', label: 'Mantras', labelHi: 'मन्त्र', emoji: '📿' },
    { id: 'shabdakosh', icon: '📖', label: 'Vocabulary', labelHi: 'शब्दकोश', emoji: '📖' },
    { id: 'kavya', icon: '🪷', label: 'Poetry', labelHi: 'काव्य', emoji: '🪷' },
    { id: 'abhyas', icon: '🎯', label: 'Practice', labelHi: 'अभ्यास', emoji: '🎯' },
];
