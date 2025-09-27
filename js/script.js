// Hamburger menu toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links ul');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
});

// Simple contact form validation (optional)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        e.preventDefault();
      }
    });
  }
});