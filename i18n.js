/* ============================================================
   SENTRIA — i18n Module
   HOW TO ADD A LANGUAGE:
   1. Add a new key to TRANSLATIONS (e.g. "de": { ... })
   2. Copy all keys from "en" and translate values
   3. A language button appears automatically in the nav
   ============================================================ */

const TRANSLATIONS = {
  en: {
    /* Nav */
    nav_logo: "Sentria",

    /* Hero */
    hero_tag: "Sentria · Explore Consciousness",
    hero_h1_line1: "Journey",
    hero_h1_line2: "inward",
    hero_sub: "Sentria is your hub for exploring consciousness, dreams, and the inner world. Four tools, one starting point.",
    hero_cta: "Explore tools",

    /* Quote */
    quote_text: "\"Dreams are the royal road to the unconscious.\"",
    quote_author: "— Sigmund Freud",

    /* Apps section */
    section_label: "Tools",
    section_h2_line1: "Four doors to",
    section_h2_line2: "one world",

    /* App 1 */
    app1_name: "Browser",
    app1_tagline: "Conscious browsing",
    app1_desc: "Sentria Browser is your conscious window to the web. It explores deeper than surface-level search — uncovering patterns, meanings, and connections that ordinary browsers miss.",
    app1_cta: "Open Browser",

    /* App 2 */
    app2_name: "Atlas",
    app2_tagline: "Map of the mind",
    app2_desc: "Atlas is an interactive map of your thoughts, ideas, and experiences. Connect the dots you haven't seen — and reveal your inner geography.",
    app2_cta: "Open Atlas",

    /* App 3 */
    app3_name: "Oneiro Web",
    app3_tagline: "AI dream interpretation",
    app3_desc: "Oneiro Web is an online tool for AI-powered dream interpretation. Enter your dream and receive an in-depth analysis of symbols, archetypes, and hidden meanings.",
    app3_cta: "Open Oneiro Web",

    /* App 4 */
    app4_name: "Oneiro App",
    app4_tagline: "Dream journal",
    app4_desc: "The Oneiro mobile app is your personal dream journal. Record, search, and analyse dreams anytime — and discover patterns over time.",
    app4_cta: "Download Oneiro App",

    /* Footer */
    footer_about: "About",
    footer_privacy: "Privacy",
    footer_contact: "Contact",
    footer_copy: "© 2025 Sentria",

    /* Subpages — About */
    about_label: "Our story",
    about_h1: "About Sentria",
    about_body: "<!-- ✏️ Add your About content here -->",

    /* Subpages — Privacy */
    privacy_label: "Legal",
    privacy_h1: "Privacy Policy",
    privacy_body: "<!-- ✏️ Add your Privacy content here -->",

    /* Subpages — Contact */
    contact_label: "Get in touch",
    contact_h1: "Contact",
    contact_body: "<!-- ✏️ Add your Contact content here -->",

    /* Scroll hint */
    scroll_hint: "Scroll",
  },

  sl: {
    nav_logo: "Sentria",
    hero_tag: "Sentria · Razišči zavest",
    hero_h1_line1: "Potuji",
    hero_h1_line2: "navznoter",
    hero_sub: "Sentria je hub za raziskovanje zavesti, sanj in notranjega sveta. Štiri orodja, eno izhodišče.",
    hero_cta: "Razišči orodja",
    quote_text: "„Sanje so kraljevska cesta v nezavedno."",
    quote_author: "— Sigmund Freud",
    section_label: "Orodja",
    section_h2_line1: "Štiri vrata do",
    section_h2_line2: "enega sveta",
    app1_name: "Browser",
    app1_tagline: "Zavestno brskanje",
    app1_desc: "Sentria Browser je tvoje zavestno okno v splet. Peneluje globlje od površinskega iskanja — odkriva vzorce, pomene in povezave, ki jih navadni brskalniki spregledajo.",
    app1_cta: "Odpri Browser",
    app2_name: "Atlas",
    app2_tagline: "Zemljevid uma",
    app2_desc: "Atlas je interaktivni zemljevid tvojih misli, idej in izkušenj. Poveži točke, ki jih nisi videl — in razkrij svojo notranjo geografijo.",
    app2_cta: "Odpri Atlas",
    app3_name: "Oneiro Web",
    app3_tagline: "AI interpretacija sanj",
    app3_desc: "Oneiro Web je spletno orodje za AI-podprto interpretacijo sanj. Vpiši svojo sanje in prejmi poglobljeno analizo simbolov, arhetipov in skritih pomenov.",
    app3_cta: "Odpri Oneiro Web",
    app4_name: "Oneiro App",
    app4_tagline: "Dnevnik sanj",
    app4_desc: "Oneiro mobilna aplikacija je tvoj osebni dnevnik sanj. Beleži, išči in analiziraj sanje kadarkoli — ter odkrivaj vzorce skozi čas.",
    app4_cta: "Prenesi Oneiro App",
    footer_about: "O nas",
    footer_privacy: "Zasebnost",
    footer_contact: "Kontakt",
    footer_copy: "© 2025 Sentria",
    about_label: "Naša zgodba",
    about_h1: "O Sentria",
    about_body: "<!-- ✏️ Dodaj vsebino -->",
    privacy_label: "Pravno",
    privacy_h1: "Politika zasebnosti",
    privacy_body: "<!-- ✏️ Dodaj vsebino -->",
    contact_label: "Pišite nam",
    contact_h1: "Kontakt",
    contact_body: "<!-- ✏️ Dodaj vsebino -->",
    scroll_hint: "Pobrskaj",
  }
};

/* ── Language engine ───────────────────────────────────────── */
const LANG_NAMES = { en: "EN", sl: "SL" };

function getLang() {
  return localStorage.getItem("sentria-lang") ||
    (navigator.language.startsWith("sl") ? "sl" : "en");
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  localStorage.setItem("sentria-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });
  /* Update active state on lang buttons */
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function buildLangSwitcher(containerId) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;
  Object.keys(TRANSLATIONS).forEach(lang => {
    const btn = document.createElement("button");
    btn.className = "lang-btn";
    btn.dataset.lang = lang;
    btn.textContent = LANG_NAMES[lang] || lang.toUpperCase();
    btn.addEventListener("click", () => setLang(lang));
    wrap.appendChild(btn);
  });
}

/* Init — script loads at bottom of <body>, DOM is already ready */
buildLangSwitcher("lang-switcher");
setLang(getLang());
