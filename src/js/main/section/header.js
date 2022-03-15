// mobile-menu--close
//header__menu-toggle

const headerMenuToggle = document.querySelector(".header__menu-toggle");
const mobileMenuClose = document.querySelector(".mobile-menu--close");
const headerNav = document.querySelector(".header__nav");

headerMenuToggle.addEventListener("click", () => {
  headerNav.classList.add("active");
});
mobileMenuClose.addEventListener("click", () => {
  headerNav.classList.remove("active");
});

console.log(headerMenuToggle, mobileMenuClose);
