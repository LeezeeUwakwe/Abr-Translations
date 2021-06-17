$('.carusol').slick({
  dots: true,
  autoplay: true,
});

const burgerMenu = document.querySelector(".burger-menu");
const closeBtn = document.querySelector(".close-menu");
const nav = document.querySelector("nav")
burgerMenu.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

function openNav(e) {
  e.preventDefault();
  nav.style.transform = "translateX(0)";
}
function closeNav(e) {
  e.preventDefault();
  nav.style.transform = "translateX(-100vw)";
}
