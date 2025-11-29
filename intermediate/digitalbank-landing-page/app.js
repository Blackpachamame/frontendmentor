const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.body;

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  body.style.overflow = "hidden";
});

mobileMenu.addEventListener("click", (e) => {
  // Cerrar si clickean fuera del panel
  if (e.target.classList.contains("mobile-menu")) {
    mobileMenu.classList.remove("active");
    body.style.overflow = "";
  }
});
