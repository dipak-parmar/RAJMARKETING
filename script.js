const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-glass", "scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
