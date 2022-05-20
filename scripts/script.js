const button = document.querySelector(".navigation__toggle");
const backdrop = document.querySelector(".navigation__backdrop");
const menu = document.querySelector(".navigation__menu");
let menuIsOpen = false;

function toggleButton() {
  menuIsOpen = !menuIsOpen;
  if (button.classList.contains("toggle--open")) {
    button.classList.replace("toggle--open", "toggle--close");
    uncheckAll();
  } else {
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

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//in desktop view only one menu should be open at a time
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked && window.innerWidth >= 750)
      checkboxes.forEach((checkbox) =>
        checkbox.id != event.target.id ? (checkbox.checked = false) : null
      );
  });
});

function uncheckAll() {
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
}

//close mobile menu and collapse submenus, if window is resized while menu is open
window.onresize = () => {
  if (window.innerWidth >= 750) {
    uncheckAll();
    if (menuIsOpen) {
      toggleButton();
      toggleMobileMenu();
    }
  }
};
