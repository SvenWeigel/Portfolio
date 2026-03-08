const deSpan = document.getElementById("de-language-span");
const enSpan = document.getElementById("en-language-span");
const deBtn = document.getElementById("de-language");
const enBtn = document.getElementById("en-language");

function setEn() {
  deSpan.classList.remove("active");
  enSpan.classList.add("active");
  updateAllTexts("en");
}

function setDe() {
  enSpan.classList.remove("active");
  deSpan.classList.add("active");
  updateAllTexts("de");
}

const TEXT_UPDATES = [
  ["about-me-a", headerTemplate],
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

function headerTemplate(lang) {
  return lang === "de" ? "Über mich" : "About me";
}

function aboutMeTitleTemplate(lang) {
  return lang === "de" ? "Über mich" : "About me";
}

function aboutMeIntroTemplate(lang) {
  return lang === "de"
    ? "Mit großer Leidenschaft für die Webentwicklung arbeite ich mit HTML, CSS, JavaScript, TypeScript und weiteren modernen Technologien. Programmieren begeistert mich, weil ich kreative Ideen in funktionierende, greifbare Projekte verwandeln kann. Besonders motiviert mich das kontinuierliche Lernen und die Herausforderung, mit jeder neuen Technologie fachlich und persönlich zu wachsen. Lassen Sie uns vernetzen und gemeinsam innovative Lösungen entwickeln."
    : "With great passion for web development, I work with HTML, CSS, JavaScript, TypeScript and other modern technologies. Programming excites me because I can turn creative ideas into working, tangible projects. What motivates me most is continuous learning and the challenge of growing professionally and personally with every new technology. Let us connect and build innovative solutions together.";
}

function aboutMeLocationTemplate(lang) {
  return lang === "de"
    ? "Mit Sitz in Dorsten bin ich offen für Remote-Arbeit und schätze flexible, moderne Zusammenarbeit. Clean Code, zeitgemäße Architekturen und strukturierte Prozesse sind für mich selbstverständlich. Motivation finde ich in kontinuierlicher Weiterentwicklung, Teamarbeit und dem Anspruch, hochwertige Lösungen zu schaffen."
    : "Based in Dorsten, I am open to remote work and value flexible, modern collaboration. Clean code, contemporary architectures and structured processes are a given for me. I find motivation in continuous improvement, teamwork and the ambition to deliver high-quality solutions.";
}

function aboutMeOpenmindTemplate(lang) {
  return lang === "de"
    ? "Offenheit und Neugier treiben mich an. Ich probiere gerne neue Technologien aus, teste innovative Tools und erweitere kontinuierlich mein Wissen, um nutzerfreundliche und durchdachte User Experiences zu schaffen."
    : "Openness and curiosity drive me. I enjoy trying new technologies, testing innovative tools and continuously expanding my knowledge to create user-friendly and well-thought-out experiences.";
}

function aboutMeChallengesTemplate(lang) {
  return lang === "de"
    ? "Herausforderungen sehe ich als Chance, über mich hinauszuwachsen. Mit analytischem Denken, Kreativität und Ausdauer entwickle ich effiziente, elegante und nachhaltige Lösungen und gewinne aus jedem Projekt wertvolle Erkenntnisse für zukünftige Aufgaben."
    : "I see challenges as an opportunity to grow beyond myself. With analytical thinking, creativity and perseverance, I develop efficient, elegant and sustainable solutions and gain valuable insights from every project for future tasks.";
}

function skillsHighlightTemplate(lang) {
  return lang === "de"
    ? "Ich habe in verschiedenen Projekten mit HTML, CSS, JavaScript und TypeScript gearbeitet und dabei praxisnahe Erfahrung gesammelt. Neue Tools und Frameworks sehe ich als Chance, mich weiterzuentwickeln. Kontinuierliches Lernen ist für mich selbstverständlich, um mit den dynamischen Veränderungen in der Webentwicklung Schritt zu halten."
    : "I have worked on various projects with HTML, CSS, JavaScript and TypeScript, gaining hands-on experience. I see new tools and frameworks as an opportunity to grow. Continuous learning is essential for me to keep up with the dynamic changes in web development.";
}

function skillsOtherQuestionTemplate(lang) {
  return lang === "de"
    ? 'Sie suchen nach <span id="skills-other-emphasis">anderen Fähigkeiten</span> ?'
    : 'Are you looking for <span id="skills-other-emphasis">other skills</span> ?';
}

function skillsMoreLearningTemplate(lang) {
  return lang === "de"
    ? "Ich brenne dafür, neue Technologien und Frameworks<br> kennenzulernen und einzusetzen."
    : "I am passionate about learning and using new technologies and frameworks.";
}

function skillsContactBtnTemplate(lang) {
  return lang === "de" ? "Kontaktieren" : "Contact";
}

function portfolioDescriptionTemplate(lang) {
  return lang === "de"
    ? "Meine Projekte anklicken, testen, entdecken."
    : "Click, test and explore my projects.";
}

function portfolioLiveBtnTemplate(lang) {
  return lang === "de" ? "Live testen" : "Live test";
}

function portfolioPolloTitleTemplate(lang) {
  return lang === "de" ? "El Pollo Loco" : "El Pollo Loco";
}

function portfolioPolloDescTemplate(lang) {
  return lang === "de"
    ? "Springe, renne und sammle Münzen in einem Browser-Game."
    : "Jump, run and collect coins in a fun browser game.";
}

function portfolioJoinTitleTemplate(lang) {
  return lang === "de" ? "Join" : "Join";
}

function portfolioJoinDescTemplate(lang) {
  return lang === "de"
    ? "Task-Manager im Kanban-Stil für Teams."
    : "Task manager inspired by Kanban boards for teams.";
}

function portfolioPokedexTitleTemplate(lang) {
  return lang === "de" ? "Pokedex" : "Pokedex";
}

function portfolioPokedexDescTemplate(lang) {
  return lang === "de"
    ? "Pokemon suchen und entdecken mit cleanem UI."
    : "Search and explore Pokemon with clean UI.";
}

function portfolioDabubbleTitleTemplate(lang) {
  return lang === "de" ? "DABubble" : "DABubble";
}

function portfolioDabubbleDescTemplate(lang) {
  return lang === "de"
    ? "Slack-inspirierte Chat-App mit Realtime Messaging."
    : "Slack-inspired chat app with realtime messaging.";
}

function contactChallengeTemplate(lang) {
  return lang === "de"
    ? "Steht eine Herausforderung an?"
    : "Facing a challenge?";
}

function contactDescriptionTemplate(lang) {
  return lang === "de"
    ? "Lassen Sie uns in Kontakt treten und gemeinsam Ihre Ideen verwirklichen. Egal, ob Sie ein neues Projekt starten oder Unterstützung bei einer Herausforderung suchen, ich freue mich darauf, gemeinsam effiziente und kreative Lösungen zu entwickeln."
    : "Let us get in touch and bring your ideas to life. Whether you are starting a new project or need support with a challenge, I look forward to developing efficient and creative solutions together.";
}

function contactCtaTemplate(lang) {
  return lang === "de"
    ? "Sie suchen einen Frontend-Entwickler? Kontaktieren Sie mich!"
    : "Looking for a frontend developer? Contact me!";
}

function contactPrivacyTemplate(lang) {
  return lang === "de"
    ? 'Ich habe die<a id="contact-privacy-link" href="legal-notice.html">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.'
    : 'I have read the <a id="contact-privacy-link" href="legal-notice.html">Privacy Policy</a> and agree to the processing of my data as described.';
}

function contactSendBtnTemplate(lang) {
  return lang === "de" ? "Nachricht senden :)" : "Send message :)";
}

function contactNamePlaceholderTemplate(lang) {
  return lang === "de" ? "Ihr Name" : "Your name";
}

function contactEmailPlaceholderTemplate(lang) {
  return lang === "de" ? "Ihre E-Mail" : "Your email";
}

function contactMessagePlaceholderTemplate(lang) {
  return lang === "de" ? "Ihre Nachricht" : "Your message";
}
