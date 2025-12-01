const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("closeIcon");
const mobileMenu = document.getElementById("mobileMenu");
const body = document.body;

// Open mobile menu
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  hamburger.classList.add("hidden");
  closeIcon.classList.add("active");
  body.style.overflow = "hidden";
});

// Close mobile menu with close icon
closeIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  hamburger.classList.remove("hidden");
  closeIcon.classList.remove("active");
  body.style.overflow = "";
});

// Close mobile menu when clicking outside the panel
mobileMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobile-menu")) {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("hidden");
    closeIcon.classList.remove("active");
    body.style.overflow = "";
  }
});
