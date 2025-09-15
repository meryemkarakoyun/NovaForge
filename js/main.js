const menuBtn = document.querySelector("#menu-btn i");
const navLinks = document.querySelector("#nav-links");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtn.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
