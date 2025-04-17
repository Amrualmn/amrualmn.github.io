
// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Adjust scroll position (optional)
        behavior: "smooth"
      });
    });
  });
  
  // Hover effect for social icons (change color smoothly)
  const socialIcons = document.querySelectorAll('.fab');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transition = "color 0.3s ease-in-out";
      icon.style.color = "#ffffff"; // Change color on hover (white or another color)
    });
  
    icon.addEventListener('mouseleave', () => {
      icon.style.transition = "color 0.3s ease-in-out";
      icon.style.color = "#ffcc00"; // Default color (yellow)
    });
  });
  
  // Fade-in effect for content sections as the page loads
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = "1"; // Make visible
        section.style.transition = "opacity 1s ease-in-out";
      }, 300 * index); // Delay between each section
    });
  });
