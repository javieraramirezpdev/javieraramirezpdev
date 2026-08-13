// ============================================
// Javiera Ramírez · Portfolio — interactions
// ============================================

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const navMenu = document.getElementById('navMenu');

if (hamburger && navbar) {
  hamburger.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('menu-open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when any link or the CTA button is clicked
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navbar.classList.remove('menu-open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Navbar background intensifies on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.background = 'rgba(15, 15, 20, 0.92)';
  } else {
    navbar.style.background = 'rgba(15, 15, 20, 0.7)';
  }
}, { passive: true });

// Scroll-triggered fade-in reveal
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: no IntersectionObserver support
  revealEls.forEach((el) => el.classList.add('is-visible'));
}