// main.js

// Smooth scrolling for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.75)";
    header.style.transition = "background 0.3s ease";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.35)";
  }
});

// Fade-in animation for sections when they appear
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});
