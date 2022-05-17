const button = document.querySelector(".navigation__toggle");
const backdrop = document.querySelector(".navigation__backdrop");
const menu = document.querySelector(".navigation__menu");
let menuIsOpen = false;

function toggleButton() {
  menuIsOpen = !menuIsOpen;
  if (button.classList.contains("toggle--open"))
    button.classList.replace("toggle--open", "toggle--close");
  else {
    button.classList.replace("toggle--close", "toggle--open");
  }
}

function toggleMobileMenu() {
  backdrop.hidden = !backdrop.hidden;
  menu.classList.toggle("menu--open");
}

button.addEventListener("click", () => {
  toggleButton();
  toggleMobileMenu();
});

//close mobile menu, if window is resized while menu is open
window.onresize = () => {
  if (menuIsOpen && window.innerWidth >= 750) {
    toggleButton();
    toggleMobileMenu();
  }
};
