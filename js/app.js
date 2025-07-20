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
  if (document.querySelector(".hero-title")) {
    const heroTitle = document.querySelector(".hero-title");
    const originalText = heroTitle.textContent;

    setTimeout(() => {
      typeWriter(heroTitle, originalText, 80);
    }, 500);
  }
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

// Hero Slider functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");

// Slider functions
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function changeSlide(direction) {
  currentSlideIndex += direction;
  if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
  if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  showSlide(currentSlideIndex);
}

// Auto-play slider
function autoPlaySlider() {
  setInterval(() => {
    changeSlide(1);
  }, 5000); // Change slide every 5 seconds
}

// Initialize slider
document.addEventListener("DOMContentLoaded", () => {
  autoPlaySlider();

  // Touch/swipe support for mobile
  let startX = 0;
  let endX = 0;

  if (document.querySelector(".hero")) {
    const heroSection = document.querySelector(".hero");

    heroSection.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    heroSection.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        changeSlide(1);
      } else {
        // Swipe right - previous slide
        changeSlide(-1);
      }
    }
  }
});

// FAQ Accordion functionality
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });
});

// Close FAQ when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".faq-item")) {
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
    });
  }
});

// Testimonials Slider functionality
let currentTestimonialSlide = 0;
const testimonialSlides = document.querySelectorAll(".testimonials-grid");
const testimonialDots = document.querySelectorAll(".testimonials-dot");
const testimonialsSlider = document.getElementById("testimonialsSlider");

function showTestimonialSlide(index) {
  if (!testimonialsSlider) return;

  const slideWidth = 100;
  testimonialsSlider.style.transform = `translateX(-${index * slideWidth}%)`;

  // Update dots
  testimonialDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function changeTestimonialSlide(direction) {
  const maxSlides = testimonialSlides.length - 1;
  currentTestimonialSlide += direction;

  if (currentTestimonialSlide > maxSlides) currentTestimonialSlide = maxSlides;
  if (currentTestimonialSlide < 0) currentTestimonialSlide = 0;

  showTestimonialSlide(currentTestimonialSlide);
}

function goToTestimonialSlide(index) {
  currentTestimonialSlide = index;
  showTestimonialSlide(currentTestimonialSlide);
}

// Initialize testimonials slider
document.addEventListener("DOMContentLoaded", () => {
  // Initialize first slide
  showTestimonialSlide(0);

  // Auto-play testimonials slider
  setInterval(() => {
    if (currentTestimonialSlide < testimonialSlides.length - 1) {
      changeTestimonialSlide(1);
    } else {
      currentTestimonialSlide = -1;
      changeTestimonialSlide(1);
    }
  }, 8000); // Change every 8 seconds

  // Touch/swipe support for testimonials
  let testimonialStartX = 0;
  let testimonialEndX = 0;

  if (testimonialsSlider) {
    testimonialsSlider.addEventListener("touchstart", (e) => {
      testimonialStartX = e.touches[0].clientX;
    });

    testimonialsSlider.addEventListener("touchend", (e) => {
      testimonialEndX = e.changedTouches[0].clientX;
      handleTestimonialSwipe();
    });
  }

  function handleTestimonialSwipe() {
    const swipeThreshold = 50;
    const diff = testimonialStartX - testimonialEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        changeTestimonialSlide(1);
      } else {
        // Swipe right - previous slide
        changeTestimonialSlide(-1);
      }
    }
  }
});
