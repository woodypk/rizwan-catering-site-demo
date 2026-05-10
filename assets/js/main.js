// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => siteNav.classList.remove("open"));
  });
}

// Carousel
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showSlide(index) {
  slides.forEach((s) => s.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  current = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

if (slides.length > 0) {
  setInterval(() => {
    const next = (current + 1) % slides.length;
    showSlide(next);
  }, 4000);
}

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => observer.observe(el));