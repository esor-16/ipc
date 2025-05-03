
/**
 * Responsive navigation menu toggle script with accessibility.
 * - Adds click and keyboard event listeners to hamburger menu.
 * - Toggles 'active' class on .nav-links for showing/hiding menu.
 * - Updates aria-expanded for accessibility.
 */

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    function toggleMenu() {
      navLinks.classList.toggle('active');
      // Accessibility: update aria-expanded
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
    }

    hamburger.addEventListener('click', toggleMenu);

    // Keyboard accessibility: support Enter and Space
    hamburger.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });

    // Optional: Set initial aria attributes for accessibility
    hamburger.setAttribute('aria-controls', 'main-navigation');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.setAttribute('id', 'main-navigation');
  }
});

