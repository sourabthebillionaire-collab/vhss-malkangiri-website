// responsive.js – handles mobile navbar, lazy loading, admin sidebar toggle, and WhatsApp button click

document.addEventListener('DOMContentLoaded', () => {
  // Navbar hamburger toggle for public site
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Lazy load all images (adds loading="lazy" if not present)
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });

  // Admin sidebar toggle (mobile)
  const adminHamburger = document.querySelector('.admin-hamburger');
  const adminSidebar = document.querySelector('.sidebar');
  if (adminHamburger && adminSidebar) {
    adminHamburger.addEventListener('click', () => {
      adminSidebar.classList.toggle('open');
    });
  }

  // WhatsApp floating button click – open WhatsApp chat with pre‑filled message
  const waBtn = document.querySelector('.whatsapp-float');
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const message = encodeURIComponent('Hi, I would like to know more about VHSS admissions.');
      const phone = '917777777777'; // placeholder Indian number
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    });
  }
});
