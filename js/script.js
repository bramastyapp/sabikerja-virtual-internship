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
// testimonial slider
const btn = document.querySelectorAll(".btn");
const slideClass = document.querySelector(".slide-row");
RemoveSlideClass = () => {
  slideClass.classList.remove("s-1");
  slideClass.classList.remove("s-2");
  slideClass.classList.remove("s-3");
};
btn[0].addEventListener("click", () => {
  RemoveSlideClass();
  slideClass.classList.toggle("s-1");
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  btn[0].classList.add("active");
});
btn[1].addEventListener("click", () => {
  RemoveSlideClass();
  slideClass.classList.toggle("s-2");
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  btn[1].classList.add("active");
});
btn[2].addEventListener("click", () => {
  RemoveSlideClass();
  slideClass.classList.toggle("s-3");
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  btn[2].classList.add("active");
});
