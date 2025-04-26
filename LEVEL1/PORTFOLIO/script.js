// Smooth scroll & active nav
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Testimonial slider (basic)
  let current = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  
  setInterval(() => {
    testimonials[current].classList.remove("active");
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add("active");
  }, 4000);
  