function init() {
  attachFieldListeners();
  updateButtonState();
  attachHeaderBurger();
}

function attachHeaderBurger() {
  const header = document.querySelector("header");
  const burger = document.querySelector("#header-burger");
  const menu = document.querySelector("#header-nav-language-position");

  if (!header || !burger || !menu) {
    return;
  }

  burger.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("no-scroll", isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target && event.target.matches("a, button")) {
      header.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    }
  });
}