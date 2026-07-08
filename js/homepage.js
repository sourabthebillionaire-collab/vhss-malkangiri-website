// js/homepage.js
// Handles preloader, back-to-top button, animated counters, scroll animations, and active nav link.

document.addEventListener('DOMContentLoaded', function () {
  // Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('hide');
    preloader.style.display = 'none';
  }

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Animated counters for stats
  const counters = document.querySelectorAll('.stat-number, .val');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    if (isNaN(target)) return;
    let start = 0;
    const duration = 1200; // ms
    const step = Math.ceil(target / (duration / 16)); // approx 60fps
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        counter.textContent = counter.dataset.suffix ? target + counter.dataset.suffix : target;
        clearInterval(timer);
      } else {
        counter.textContent = counter.dataset.suffix ? start + counter.dataset.suffix : start;
      }
    }, 16);
  });

  // Active nav link based on current page
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === current);
  });
});
