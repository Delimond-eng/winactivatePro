// Mobile Navigation Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    // Only close mobile menu on mobile devices
    if (window.innerWidth <= 768) {
      mobileMenu.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Contact form handling
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Basic validation
  if (!data.name || !data.email || !data.service) {
    alert("Please fill in all required fields.");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Simulate form submission
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;

  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  setTimeout(() => {
    alert("Thank you for your message! We will get back to you within 1 hour.");
    contactForm.reset();
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }, 1500);
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

// Observe all animated elements
document
  .querySelectorAll(".service-card, .pricing-card, .testimonial-card")
  .forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "#fff";
    header.style.backdropFilter = "none";
  }
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Pricing card hover effects
document.querySelectorAll(".pricing-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
  });

  card.addEventListener("mouseleave", () => {
    if (!card.classList.contains("featured")) {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    }
  });
});

// Service card interactive effects
document.querySelectorAll(".service-card").forEach((card) => {
  // Remove the click handler since we now have direct links to detail page
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect when page loads
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-title");
  const originalText = heroTitle.textContent;

  setTimeout(() => {
    typeWriter(heroTitle, originalText, 80);
  }, 500);
});

// Add click to call functionality
document.addEventListener("DOMContentLoaded", () => {
  const phoneNumbers = document.querySelectorAll(".contact-details p");
  phoneNumbers.forEach((phone) => {
    if (phone.textContent.includes("+1")) {
      phone.style.cursor = "pointer";
      phone.addEventListener("click", () => {
        window.location.href = `tel:${phone.textContent}`;
      });
    }
  });
});

// Add WhatsApp integration
function openWhatsApp() {
  const phoneNumber = "15551234567";
  const message =
    "Hello! I would like to inquire about your Windows/Office activation services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
}

// Add WhatsApp click handler
document.addEventListener("DOMContentLoaded", () => {
  const whatsappLinks = document.querySelectorAll(".whatsapp-link");
  whatsappLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsApp();
    });
  });
});

// Add scroll progress indicator
function createScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.id = "scroll-progress";
  progressBar.style.cssText = `
        position: fixed;
        top: 70px;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #3b82f6);
        z-index: 1000;
        transition: width 0.1s ease;
    `;
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = Math.min(scrollPercent, 100) + "%";
  });
}

// Initialize scroll progress
createScrollProgress();
