window.onload = function () {
    const progressBar = document.getElementById('progress-bar');
    const loadingMessage = document.getElementById('loading-message');
  
    let progress = 0;
    const messages = [
      "Mixing ingredients...",
      "Shaping cookies...",
      "Baking cookies...",
      "Cooling down..."
    ];
  
    const interval = setInterval(function () {
      progress += 10;
      progressBar.style.width = progress + '%';
  
      if (progress === 30) loadingMessage.textContent = messages[1];
      if (progress === 60) loadingMessage.textContent = messages[2];
      if (progress === 90) loadingMessage.textContent = messages[3];
  
      if (progress >= 100) {
        clearInterval(interval);
        document.getElementById('preloader').style.display = 'none';
      }
    }, 100);
}
// Modal Functionality
const getStartedBtn = document.getElementById('getStartedBtn');
const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');

getStartedBtn.addEventListener('click', () => {
  authModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  authModal.style.display = 'none';
  document.body.style.filter = 'none';
});

// Select all navigation icons (anchor links) in the footer
const footerLinks = document.querySelectorAll('.bottom-nav .icon');

footerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href'); // Get the target section ID
    const targetSection = document.querySelector(targetId); // Select the target section

    if (targetSection) {
      // Smooth scroll to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth', // Enable smooth scrolling
        block: 'start', // Align the section to the top of the viewport
      });
    }
  });
});
