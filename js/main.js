// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('svg');
      // Toggle icon between menu and X
    });
  }

  // Close mobile menu when clicking a link
  const mobileLinks = document.querySelectorAll('#mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });

  // Set active navigation link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// Cookie Consent
function initCookieConsent() {
  const cookieConsent = document.getElementById('cookie-consent');
  if (!cookieConsent) return;

  const cookieAccepted = localStorage.getItem('cookieConsent');
  
  if (!cookieAccepted) {
    cookieConsent.classList.add('active');
  }

  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'accepted');
      cookieConsent.classList.remove('active');
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'declined');
      cookieConsent.classList.remove('active');
    });
  }
}

// Popup CTA (Exit Intent and Scroll)
function initPopupCTA() {
  const popup = document.getElementById('popup-cta');
  if (!popup) return;

  const closeBtn = document.getElementById('popup-close');
  let popupShown = sessionStorage.getItem('popupShown');
  let scrollTriggered = false;

  // Close popup
  function closePopup() {
    popup.classList.remove('active');
    sessionStorage.setItem('popupShown', 'true');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closePopup);
  }

  // Close on outside click
  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      closePopup();
    }
  });

  // Exit intent
  document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !popupShown && !scrollTriggered) {
      popup.classList.add('active');
      popupShown = true;
    }
  });

  // Scroll trigger (70% of page)
  window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > 70 && !popupShown && !scrollTriggered) {
      popup.classList.add('active');
      scrollTriggered = true;
      popupShown = true;
    }
  });
}

// Newsletter Form
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = form.querySelector('input[type="email"]').value;
      const consent = form.querySelector('input[type="checkbox"]');
      
      if (consent && !consent.checked) {
        alert('Please accept the privacy policy to subscribe.');
        return;
      }

      // Simulate form submission
      alert(`Thank you for subscribing! We've sent a confirmation to ${email}`);
      form.reset();
    });
  });
}

// Contact Form
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const consent = formData.get('consent');
      
      if (!consent) {
        alert('Please accept the privacy policy to submit the form.');
        return;
      }

      // Simulate form submission
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
}

// FAQ Accordion
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isActive = content.classList.contains('active');
      
      // Close all accordion items
      document.querySelectorAll('.accordion-content').forEach(item => {
        item.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        content.classList.add('active');
      }
    });
  });
}

// Initialize all components
document.addEventListener('DOMContentLoaded', function() {
  initCookieConsent();
  initPopupCTA();
  initNewsletterForm();
  initContactForm();
  initAccordion();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
