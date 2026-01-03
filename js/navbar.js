   // 🔹 Mobile Menu Toggle
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");

    toggle.addEventListener("click", () => {
      links.classList.toggle("show");
      // Change icon (hamburger <-> close)
      toggle.innerHTML = links.classList.contains("show")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
