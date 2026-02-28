// ===== Menu mobile =====
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));

// ===== Reviews carousel =====
const reviews = document.querySelectorAll('.review-img');
const prevBtn = document.querySelector('.review-arrow.left');
const nextBtn = document.querySelector('.review-arrow.right');

let currentReview = 0;

function showReview(index) {
  reviews.forEach((img, i) => img.classList.toggle('active', i === index));
}

if (prevBtn && nextBtn && reviews.length) {
  prevBtn.addEventListener('click', () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
  });

  nextBtn.addEventListener('click', () => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
  });
}

// Volver arriba
const toTop = document.getElementById("toTop");

function toggleToTop() {
  if (!toTop) return;
  if (window.scrollY > 400) toTop.classList.add("show");
  else toTop.classList.remove("show");
}

window.addEventListener("scroll", toggleToTop);
toggleToTop();

toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});