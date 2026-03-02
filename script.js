function init() {
  attachFieldListeners();
  updateButtonState();
  attachHeaderBurger();
}

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

function burgerOpen(header, burger) {
  const isOpen = header.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("no-scroll", isOpen);
}

function burgerClose(header, burger) {
  header.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
  document.body.classList.remove("no-scroll");
}


