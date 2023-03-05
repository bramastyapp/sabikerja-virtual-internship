// menambah class active pada navbar
const navbarNav = document.querySelector(".navbar-nav");
const menu = document.getElementById("hamburger");

menu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});
// remove class active
const x = document.querySelector(".x");
x.addEventListener("click", () => {
  navbarNav.classList.remove("active");
});
document.addEventListener("click", (e) => {
  if (
    !navbarNav.contains(e.target) &&
    !menu.contains(e.target) &&
    !x.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }
});
// logo hilang ketika di scroll
const logo = document.querySelector(".navbar-logo");
