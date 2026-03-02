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

function updateAllTexts(lang) {
  const header = document.getElementById("about-me-a");
  if (header) header.textContent = headerTemplate(lang);

  const aboutMeTitle = document.getElementById("about-me-title");
  if (aboutMeTitle) aboutMeTitle.textContent = aboutMeTitleTemplate(lang);

  const aboutMeIntro = document.getElementById("about-me-intro");
  if (aboutMeIntro) aboutMeIntro.textContent = aboutMeIntroTemplate(lang);

  const aboutMeLocation = document.getElementById("about-me-location-text");
  if (aboutMeLocation)
    aboutMeLocation.textContent = aboutMeLocationTemplate(lang);

  const aboutMeOpenmind = document.getElementById("about-me-openmind-text");
  if (aboutMeOpenmind)
    aboutMeOpenmind.textContent = aboutMeOpenmindTemplate(lang);

  const aboutMeChallenges = document.getElementById("about-me-challenges-text");
  if (aboutMeChallenges)
    aboutMeChallenges.textContent = aboutMeChallengesTemplate(lang);

  const skillsHighlight = document.getElementById("skills-highlight-text");
  if (skillsHighlight)
    skillsHighlight.textContent = skillsHighlightTemplate(lang);

  const skillsOtherQuestion = document.getElementById("skills-other-question");
  if (skillsOtherQuestion)
    skillsOtherQuestion.innerHTML = skillsOtherQuestionTemplate(lang);

  const skillsMoreLearning = document.getElementById("skills-more-learning");
  if (skillsMoreLearning)
    skillsMoreLearning.innerHTML = skillsMoreLearningTemplate(lang);

  const skillsContactBtn = document.getElementById("skills-contact-btn");
  if (skillsContactBtn)
    skillsContactBtn.textContent = skillsContactBtnTemplate(lang);

  const portfolioDescription = document.getElementById(
    "portfolio-description-text",
  );
  if (portfolioDescription)
    portfolioDescription.textContent = portfolioDescriptionTemplate(lang);

  const portfolioPolloTitle = document.getElementById("portfolio-pollo-title");
  if (portfolioPolloTitle)
    portfolioPolloTitle.textContent = portfolioPolloTitleTemplate(lang);

  const portfolioPolloDesc = document.getElementById("portfolio-pollo-desc");
  if (portfolioPolloDesc)
    portfolioPolloDesc.textContent = portfolioPolloDescTemplate(lang);

  const portfolioPolloLive = document.getElementById("portfolio-pollo-live");
  if (portfolioPolloLive)
    portfolioPolloLive.textContent = portfolioLiveBtnTemplate(lang);

  const portfolioJoinTitle = document.getElementById("portfolio-join-title");
  if (portfolioJoinTitle)
    portfolioJoinTitle.textContent = portfolioJoinTitleTemplate(lang);

  const portfolioJoinDesc = document.getElementById("portfolio-join-desc");
  if (portfolioJoinDesc)
    portfolioJoinDesc.textContent = portfolioJoinDescTemplate(lang);

  const portfolioJoinLive = document.getElementById("portfolio-join-live");
  if (portfolioJoinLive)
    portfolioJoinLive.textContent = portfolioLiveBtnTemplate(lang);

  const portfolioPokedexTitle = document.getElementById("portfolio-pokedex-title");
  if (portfolioPokedexTitle)
    portfolioPokedexTitle.textContent = portfolioPokedexTitleTemplate(lang);

  const portfolioPokedexDesc = document.getElementById("portfolio-pokedex-desc");
  if (portfolioPokedexDesc)
    portfolioPokedexDesc.textContent = portfolioPokedexDescTemplate(lang);

  const portfolioPokedexLive = document.getElementById("portfolio-pokedex-live");
  if (portfolioPokedexLive)
    portfolioPokedexLive.textContent = portfolioLiveBtnTemplate(lang);

  const portfolioDabubbleTitle = document.getElementById("portfolio-dabubble-title");
  if (portfolioDabubbleTitle)
    portfolioDabubbleTitle.textContent = portfolioDabubbleTitleTemplate(lang);

  const portfolioDabubbleDesc = document.getElementById("portfolio-dabubble-desc");
  if (portfolioDabubbleDesc)
    portfolioDabubbleDesc.textContent = portfolioDabubbleDescTemplate(lang);

  const portfolioDabubbleLive = document.getElementById("portfolio-dabubble-live");
  if (portfolioDabubbleLive)
    portfolioDabubbleLive.textContent = portfolioLiveBtnTemplate(lang);

  const referencesCommentary = document.getElementById(
    "references-commentary-text",
  );
  if (referencesCommentary)
    referencesCommentary.textContent = referencesCommentaryTemplate(lang);

  const referencesName = document.getElementById("references-commentary-name");
  if (referencesName)
    referencesName.textContent = referencesCommentaryNameTemplate(lang);

  const contactChallenge = document.getElementById("contact-challenge-text");
  if (contactChallenge)
    contactChallenge.textContent = contactChallengeTemplate(lang);

  const contactDescription = document.getElementById(
    "contact-description-text",
  );
  if (contactDescription)
    contactDescription.textContent = contactDescriptionTemplate(lang);

  const contactCta = document.getElementById("contact-cta-text");
  if (contactCta) contactCta.textContent = contactCtaTemplate(lang);

  const contactPrivacy = document.getElementById("contact-privacy-text");
  if (contactPrivacy) contactPrivacy.innerHTML = contactPrivacyTemplate(lang);

  const contactSendBtn = document.getElementById("contact-send-btn");
  if (contactSendBtn) contactSendBtn.textContent = contactSendBtnTemplate(lang);

  const contactNameInput = document.getElementById("name");
  if (contactNameInput)
    contactNameInput.placeholder = contactNamePlaceholderTemplate(lang);

  const contactEmailInput = document.getElementById("email");
  if (contactEmailInput)
    contactEmailInput.placeholder = contactEmailPlaceholderTemplate(lang);

  const contactMessageInput = document.getElementById("message");
  if (contactMessageInput)
    contactMessageInput.placeholder = contactMessagePlaceholderTemplate(lang);
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


function referencesCommentaryTemplate(lang) {
  return lang === "de"
    ? "das ist ein test was hier drin stehen könnte! mal sehen was hier so rein kommen wird und dann werden wir sehen :)"
    : "This is a test for what could be written here. Let us see what will be added and how it will turn out :)";
}

function referencesCommentaryNameTemplate(lang) {
  return lang === "de"
    ? "M.Musterman-Team Partner"
    : "M.Musterman - Team Partner";
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
