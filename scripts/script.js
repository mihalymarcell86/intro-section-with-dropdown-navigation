const button = document.querySelector(".navigation__toggle");
const backdrop = document.querySelector(".navigation__backdrop");
const menu = document.querySelector(".navigation__menu");
let mobileMenuIsOpen = false;

//mobile menu panel functions
function toggleMobileMenu() {
  mobileMenuIsOpen = !mobileMenuIsOpen;
  if (button.classList.contains("toggle--open")) {
    button.classList.replace("toggle--open", "toggle--close");
  } else {
    button.classList.replace("toggle--close", "toggle--open");
  }
  backdrop.hidden = !backdrop.hidden;
  menu.classList.toggle("menu--open");
}

[button, backdrop].forEach((el) =>
  el.addEventListener("click", () => {
    toggleMobileMenu();
  })
);

//submenus
const menuFeatures = document.querySelector(".item--features");
const menuCompany = document.querySelector(".item--company");
let subMenuOpen = null;

function openSubmenu(menu) {
  subMenuOpen = menu;
  menu.querySelector("ul").classList.add("submenu--open");
  menu.querySelector(".menu__arrow--down").style.display = "none";
  menu.querySelector(".menu__arrow--up").style.display = "inline-block";
}

function closeSubmenu(menu) {
  menu.querySelector("ul").classList.remove("submenu--open");
  menu.querySelector(".menu__arrow--down").style.display = "inline-block";
  menu.querySelector(".menu__arrow--up").style.display = "none";
  subMenuOpen = null;
}

[menuFeatures, menuCompany].forEach((menu) => {
  menu.addEventListener("click", () => {
    if (subMenuOpen && subMenuOpen !== menu) {
      closeSubmenu(subMenuOpen);
      window.innerWidth >= 750
        ? openSubmenu(menu)
        : //account for transition
          setTimeout(() => openSubmenu(menu), 200);
    } else if (subMenuOpen === menu) {
      closeSubmenu(menu);
    } else {
      openSubmenu(menu);
    }
  });
});

//"click away will close open submenu"
const submenus = document.querySelectorAll('ul[class^="submenu-"]');
document.documentElement.addEventListener("click", (event) => {
  if (
    [...submenus, menuFeatures, menuCompany].every(
      (el) => el !== event.target
    ) &&
    subMenuOpen &&
    window.innerWidth >= 750
  ) {
    closeSubmenu(subMenuOpen);
  }
});

//close mobile menu and collapse submenus, if window is resized while menu is open
window.onresize = () => {
  if (window.innerWidth >= 750) {
    if (mobileMenuIsOpen) toggleMobileMenu();
    if (subMenuOpen) closeSubmenu(subMenuOpen);
  }
};
