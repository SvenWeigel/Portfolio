/**
 * Language switch span and button elements (may be null during script load).
 * @type {HTMLElement|null}
 */
const deSpan = document.getElementById("de-language-span");
/**
 * @type {HTMLElement|null}
 */
const enSpan = document.getElementById("en-language-span");
/**
 * @type {HTMLElement|null}
 */
const deBtn = document.getElementById("de-language");
/**
 * @type {HTMLElement|null}
 */
const enBtn = document.getElementById("en-language");

function setEn() {
  deSpan.classList.remove("active");
  enSpan.classList.add("active");
  document.body.classList.add('lang-en');
  document.body.classList.remove('lang-de');
  updateAllTexts("en");
  const iam = document.getElementById('i-am') || document.querySelector('.iam');
  if (iam) iam.textContent = iAmTemplate('en');
  try { localStorage.setItem('lang', 'en'); } catch (e) {}
}

/**
 * Switch UI to English and update visible texts.
 * @returns {void}
 */

function setDe() {
  enSpan.classList.remove("active");
  deSpan.classList.add("active");
  document.body.classList.add('lang-de');
  document.body.classList.remove('lang-en');
  updateAllTexts("de");
  const iam = document.getElementById('i-am') || document.querySelector('.iam');
  if (iam) iam.textContent = iAmTemplate('de');
  try { localStorage.setItem('lang', 'de'); } catch (e) {}
}

/**
 * Switch UI to German and update visible texts.
 * @returns {void}
 */

const TEXT_UPDATES = [
  ["about-me-a", headerTemplate],
  ["i-am", iAmTemplate],
  ["about-me-title", aboutMeTitleTemplate],
  ["about-me-intro", aboutMeIntroTemplate],
  ["about-me-location-text", aboutMeLocationTemplate],
  ["about-me-openmind-text", aboutMeOpenmindTemplate],
  ["about-me-challenges-text", aboutMeChallengesTemplate],
  ["skills-highlight-text", skillsHighlightTemplate],
  ["skills-other-question", skillsOtherQuestionTemplate, "innerHTML"],
  ["skills-more-learning", skillsMoreLearningTemplate, "innerHTML"],
  ["skills-contact-btn", skillsContactBtnTemplate],
  ["portfolio-description-text", portfolioDescriptionTemplate],
  ["portfolio-pollo-title", portfolioPolloTitleTemplate],
  ["portfolio-pollo-desc", portfolioPolloDescTemplate],
  ["portfolio-pollo-live", portfolioLiveBtnTemplate],
  ["portfolio-join-title", portfolioJoinTitleTemplate],
  ["portfolio-join-desc", portfolioJoinDescTemplate],
  ["portfolio-join-live", portfolioLiveBtnTemplate],
  ["portfolio-pokedex-title", portfolioPokedexTitleTemplate],
  ["portfolio-pokedex-desc", portfolioPokedexDescTemplate],
  ["portfolio-pokedex-live", portfolioLiveBtnTemplate],
  ["portfolio-dabubble-title", portfolioDabubbleTitleTemplate],
  ["portfolio-dabubble-desc", portfolioDabubbleDescTemplate],
  ["portfolio-dabubble-live", portfolioLiveBtnTemplate],
  ["hero-job", heroJobTemplate],
  ["contact-challenge-text", contactChallengeTemplate],
  ["contact-description-text", contactDescriptionTemplate],
  ["contact-cta-text", contactCtaTemplate],
  ["contact-privacy-text", contactPrivacyTemplate, "innerHTML"],
  ["contact-send-btn", contactSendBtnTemplate],
  ["name", contactNamePlaceholderTemplate, "placeholder"],
  ["email", contactEmailPlaceholderTemplate, "placeholder"],
  ["message", contactMessagePlaceholderTemplate, "placeholder"],
];

function updateAllTexts(lang) {
  TEXT_UPDATES.forEach(([id, fn, prop = "textContent"]) => {
    const el = document.getElementById(id);
    if (el) el[prop] = fn(lang);
  });
}

/**
 * Update all mapped text nodes or attributes with the given language.
 * @param {'de'|'en'} lang - Language code to apply.
 * @returns {void}
 */

function headerTemplate(lang) {
  return lang === "de" ? "Über mich" : "About me";
}

/**
 * Template for header text.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function aboutMeTitleTemplate(lang) {
  return lang === "de" ? "Über mich" : "About me";
}

/**
 * Template for the short 'I am' label in the hero section.
 * @param {'de'|'en'} lang
 * @returns {string}
 */
function iAmTemplate(lang) {
  return lang === "de" ? "Ich bin" : "I am";
}

/**
 * Template for the hero job title text.
 * @param {'de'|'en'} lang
 * @returns {string}
 */
function heroJobTemplate(lang) {
  return lang === "de" ? "FRONTEND ENTWICKLER" : "FRONTEND DEVELOPER";
}

/**
 * Template for about-me title.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function aboutMeIntroTemplate(lang) {
  return lang === "de"
    ? "Mit großer Leidenschaft für die Webentwicklung arbeite ich mit HTML, CSS, JavaScript, TypeScript und weiteren modernen Technologien. Programmieren begeistert mich, weil ich kreative Ideen in funktionierende, greifbare Projekte verwandeln kann. Besonders motiviert mich das kontinuierliche Lernen und die Herausforderung, mit jeder neuen Technologie fachlich und persönlich zu wachsen. Lassen Sie uns vernetzen und gemeinsam innovative Lösungen entwickeln."
    : "With great passion for web development, I work with HTML, CSS, JavaScript, TypeScript and other modern technologies. Programming excites me because I can turn creative ideas into working, tangible projects. What motivates me most is continuous learning and the challenge of growing professionally and personally with every new technology. Let us connect and build innovative solutions together.";
}

/**
 * Template for about-me intro paragraph.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function aboutMeLocationTemplate(lang) {
  return lang === "de"
    ? "Mit Sitz in Dorsten bin ich offen für Remote-Arbeit und schätze flexible, moderne Zusammenarbeit. Clean Code, zeitgemäße Architekturen und strukturierte Prozesse sind für mich selbstverständlich. Motivation finde ich in kontinuierlicher Weiterentwicklung, Teamarbeit und dem Anspruch, hochwertige Lösungen zu schaffen."
    : "Based in Dorsten, I am open to remote work and value flexible, modern collaboration. Clean code, contemporary architectures and structured processes are a given for me. I find motivation in continuous improvement, teamwork and the ambition to deliver high-quality solutions.";
}

/**
 * Template for about-me location paragraph.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function aboutMeOpenmindTemplate(lang) {
  return lang === "de"
    ? "Offenheit und Neugier treiben mich an. Ich probiere gerne neue Technologien aus, teste innovative Tools und erweitere kontinuierlich mein Wissen, um nutzerfreundliche und durchdachte User Experiences zu schaffen."
    : "Openness and curiosity drive me. I enjoy trying new technologies, testing innovative tools and continuously expanding my knowledge to create user-friendly and well-thought-out experiences.";
}

/**
 * Template for about-me openmind paragraph.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function aboutMeChallengesTemplate(lang) {
  return lang === "de"
    ? "Herausforderungen sehe ich als Chance, über mich hinauszuwachsen. Mit analytischem Denken, Kreativität und Ausdauer entwickle ich effiziente, elegante und nachhaltige Lösungen und gewinne aus jedem Projekt wertvolle Erkenntnisse für zukünftige Aufgaben."
    : "I see challenges as an opportunity to grow beyond myself. With analytical thinking, creativity and perseverance, I develop efficient, elegant and sustainable solutions and gain valuable insights from every project for future tasks.";
}

/**
 * Template for about-me challenges paragraph.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function skillsHighlightTemplate(lang) {
  return lang === "de"
    ? "Ich habe in verschiedenen Projekten mit HTML, CSS, JavaScript und TypeScript gearbeitet und dabei praxisnahe Erfahrung gesammelt. Neue Tools und Frameworks sehe ich als Chance, mich weiterzuentwickeln. Kontinuierliches Lernen ist für mich selbstverständlich, um mit den dynamischen Veränderungen in der Webentwicklung Schritt zu halten."
    : "I have worked on various projects with HTML, CSS, JavaScript and TypeScript, gaining hands-on experience. I see new tools and frameworks as an opportunity to grow. Continuous learning is essential for me to keep up with the dynamic changes in web development.";
}

/**
 * Template for skills highlight text.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function skillsOtherQuestionTemplate(lang) {
  return lang === "de"
    ? 'Sie suchen nach <span id="skills-other-emphasis">anderen Fähigkeiten</span>?'
    : 'Are you looking for <span id="skills-other-emphasis">other skills</span>?';
}

/**
 * Template for the 'other skills' question (can contain HTML).
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function skillsMoreLearningTemplate(lang) {
  return lang === "de"
    ? "Ich brenne dafür, neue Technologien und Frameworks<br> kennenzulernen und einzusetzen."
    : "I am passionate about learning and using new technologies and frameworks.";
}

/**
 * Template for skills 'more learning' text (may contain HTML).
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function skillsContactBtnTemplate(lang) {
  return lang === "de" ? "Kontaktieren" : "Contact";
}

/**
 * Template for the contact button label.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function portfolioDescriptionTemplate(lang) {
  return lang === "de"
    ? "Meine Projekte anklicken, testen, entdecken."
    : "Click, test and explore my projects.";
}

/**
 * Template for portfolio description.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function portfolioLiveBtnTemplate(lang) {
  return lang === "de" ? "Live testen" : "Live test";
}

/**
 * Template for portfolio live button label.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function portfolioPolloTitleTemplate(lang) {
  return lang === "de" ? "El Pollo Loco" : "El Pollo Loco";
}

/**
 * Template for El Pollo Loco title.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function portfolioPolloDescTemplate(lang) {
  return lang === "de"
    ? "Springe, renne und sammle Münzen in einem Browser-Game."
    : "Jump, run and collect coins in a fun browser game.";
}

/**
 * Template for El Pollo Loco description.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function portfolioJoinTitleTemplate(lang) {
  return lang === "de" ? "Join" : "Join";
}

/**
 * Template for Join project title.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function portfolioJoinDescTemplate(lang) {
  return lang === "de"
    ? "Task-Manager im Kanban-Stil für Teams."
    : "Task manager inspired by Kanban boards for teams.";
}

/**
 * Template for Join project description.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function portfolioPokedexTitleTemplate(lang) {
  return lang === "de" ? "Pokedex" : "Pokedex";
}

/**
 * Template for Pokedex project title.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function portfolioPokedexDescTemplate(lang) {
  return lang === "de"
    ? "Pokemon suchen und entdecken mit cleanem UI."
    : "Search and explore Pokemon with clean UI.";
}

/**
 * Template for Pokedex project description.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function portfolioDabubbleTitleTemplate(lang) {
  return lang === "de" ? "DABubble" : "DABubble";
}

/**
 * Template for DABubble project title.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function portfolioDabubbleDescTemplate(lang) {
  return lang === "de"
    ? "Slack-inspirierte Chat-App mit Realtime Messaging."
    : "Slack-inspired chat app with realtime messaging.";
}

/**
 * Template for DABubble project description.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function contactChallengeTemplate(lang) {
  return lang === "de"
    ? "Steht eine Herausforderung an?"
    : "Facing a challenge?";
}

/**
 * Template for contact challenge headline.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function contactDescriptionTemplate(lang) {
  return lang === "de"
    ? "Lassen Sie uns in Kontakt treten und gemeinsam Ihre Ideen verwirklichen. Egal, ob Sie ein neues Projekt starten oder Unterstützung bei einer Herausforderung suchen, ich freue mich darauf, gemeinsam effiziente und kreative Lösungen zu entwickeln."
    : "Let us get in touch and bring your ideas to life. Whether you are starting a new project or need support with a challenge, I look forward to developing efficient and creative solutions together.";
}

/**
 * Template for contact description paragraph.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function contactCtaTemplate(lang) {
  return lang === "de"
    ? "Sie suchen einen Frontend-Entwickler? Kontaktieren Sie mich!"
    : "Looking for a frontend developer? Contact me!";
}

/**
 * Template for contact call-to-action text.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function contactPrivacyTemplate(lang) {
  return lang === "de"
    ? 'Ich habe die<a id="contact-privacy-link" href="legal-notice.html">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.<br> <span class="required-field">*Pflichtfeld</span>'
    : 'I have read the <a id="contact-privacy-link" href="legal-notice.html">Privacy Policy</a> and agree to the processing of my data as described.<br> <span class="required-field">*Required field</span>';
}

/**
 * Template for contact privacy text (contains link HTML).
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function contactSendBtnTemplate(lang) {
  return lang === "de" ? "Nachricht senden :)" : "Send message :)";
}

/**
 * Template for send button label.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function contactNamePlaceholderTemplate(lang) {
  return lang === "de" ? "Ihr Name" : "Your name";
}

/**
 * Template for name input placeholder.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function contactEmailPlaceholderTemplate(lang) {
  return lang === "de" ? "Ihre E-Mail" : "Your email";
}

/**
 * Template for email input placeholder.
 * @param {'de'|'en'} lang
 * @returns {string}
 */

function contactMessagePlaceholderTemplate(lang) {
  return lang === "de" ? "Ihre Nachricht" : "Your message";
}

/**
 * Template for message textarea placeholder.
 * @param {'de'|'en'} lang
 * @returns {string}
 */
