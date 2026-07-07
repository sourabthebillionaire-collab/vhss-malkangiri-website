// responsive.js – handles mobile navbar, lazy loading, admin sidebar toggle, and WhatsApp button click

document.addEventListener('DOMContentLoaded', () => {
  // Navbar hamburger toggle for public site
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
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

  // ---- 3D Mouse-Tilt Effect for Cards ----
  const tiltTargets = document.querySelectorAll('.why-card, .news-card, .topper-card, .vm-card, .hero-card');
  tiltTargets.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width  / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -10; // max ±10deg
      const rotateY = ((x - cx) / cx) *  10;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ---- 3D Parallax on Hero Section ----
  const hero = document.querySelector('.hero-inner');
  if (hero) {
    document.addEventListener('mousemove', (e) => {
      const xFactor = (e.clientX / window.innerWidth  - 0.5) * 8;
      const yFactor = (e.clientY / window.innerHeight - 0.5) * 5;
      hero.style.transform = `perspective(1200px) rotateX(${-yFactor}deg) rotateY(${xFactor}deg)`;
      hero.style.transition = 'transform 0.1s linear';
    });
    document.addEventListener('mouseleave', () => {
      hero.style.transform = '';
      hero.style.transition = 'transform 0.6s ease';
    });
  }
});
