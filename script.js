/**
 * Initialize page behaviors: form listeners, button state and header burger.
 * @returns {void}
 */
function init() {
  attachFieldListeners();
  updateButtonState();
  attachHeaderBurger();
}

/**
 * Attach header burger toggle and menu click handlers.
 * @returns {void}
 */
function attachHeaderBurger() {
  const header = document.querySelector("header");
  const burger = document.querySelector("#header-burger");
  const menu = document.querySelector("#header-nav-language-position");
  burger.addEventListener("click", () => {
    burgerOpen(header, burger);
  });
  menu.addEventListener("click", (event) => {
    if (event.target && event.target.matches("a, button")) {
      burgerClose(header, burger);
    }
  });
}

/**
 * Open or close the header burger menu.
 * @param {HTMLElement} header - Header element to toggle class on.
 * @param {HTMLElement} burger - Burger button element to update aria state.
 * @returns {void}
 */
function burgerOpen(header, burger) {
  const isOpen = header.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("no-scroll", isOpen);
}

/**
 * Close the header burger menu and reset ARIA and body classes.
 * @param {HTMLElement} header - Header element to close.
 * @param {HTMLElement} burger - Burger button element to update aria state.
 * @returns {void}
 */
function burgerClose(header, burger) {
  header.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
  document.body.classList.remove("no-scroll");
}


