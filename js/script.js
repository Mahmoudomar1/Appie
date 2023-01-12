////////////////////////////////////////////////////////////
// MAKE MOBILE NAV WORK

const btnNavEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
