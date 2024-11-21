document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active"); // Toggle the 'active' class on click
    });
  });
  