// // Simple mobile nav toggle
// document.addEventListener('DOMContentLoaded', function(){
//   const btn = document.querySelector('.nav-toggle');
//   const navLinks = document.querySelector('.nav-links');

//   btn.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
//   });

//   // Close nav when clicking outside (optional)
//   document.addEventListener('click', (e) => {
//     if (!e.target.closest('.nav') && navLinks.classList.contains('show')) {
//       navLinks.classList.remove('show');
//     }
//   });
// });
//* ===============================
//   🌸 Crystalia Website JavaScript
  // Handles: navbar toggle, scroll effects,
  // product filtering, and smooth UX
  //================================= */

// Ensure everything runs only when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // NAVBAR TOGGLE (for mobile)
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const nav = document.querySelector(".nav");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // CLOSE NAVBAR ON LINK CLICK (mobile)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });

    // Close nav when clicking outside
    document.addEventListener("click", e => {
      if (!e.target.closest(".nav") && navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
      }
    });
  }

  // SHRINK NAVBAR ON SCROLL
  window.addEventListener("scroll", () => {
    if (!nav) return;
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // PRODUCT FILTERING (for products.html)
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  if (filterButtons.length && productCards.length) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const category = button.dataset.category;

        productCards.forEach(card => {
          if (category === "all" || card.dataset.category === category) {
            card.style.display = "block";
            setTimeout(() => (card.style.opacity = "1"), 100);
          } else {
            card.style.opacity = "0";
            setTimeout(() => (card.style.display = "none"), 300);
          }
        });
      });
    });
  }

  // SMOOTH SCROLL FOR INTERNAL LINKS
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // CONTACT PAGE: AUTO MAILTO HANDLING (optional)
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener("click", () => {
      console.log("Opening email client for:", link.href);
    });
  });

  // SCROLL ANIMATION (fade-in cards)
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".card, .offer-card, .product-card").forEach(card => {
    observer.observe(card);
  });
});
