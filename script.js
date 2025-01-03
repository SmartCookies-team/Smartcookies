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
// Select all sections and icons
const main = document.querySelector('#main')
const sections = document.querySelectorAll('.page');
const icons = document.querySelectorAll('.icon');

function setActiveSection() {
  
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;

    // Check if the section is within the viewport
    if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
      currentSection = section.id;
    }
  });

  // Update the active class on icons
  icons.forEach((icon) => {
    if (icon.dataset.target === `#${currentSection}`) {
      icon.classList.add('active');
    } else {
      icon.classList.remove('active');
    }
  });
}

// Add scroll event listener to update the active icon
main.addEventListener('scroll', setActiveSection);

// Add smooth scrolling for footer icons
let isScrolling = false;

icons.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();

    // Mark as actively scrolling
    isScrolling = true;

    // Activate the clicked icon immediately
    icons.forEach((ic) => ic.classList.remove('active'));
    icon.classList.add('active');

    // Smoothly scroll to the corresponding section
    const target = document.querySelector(icon.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    // Allow scroll-based updates after smooth scrolling finishes
    setTimeout(() => {
      isScrolling = false;
    }, 1000); // Adjust timeout based on the expected scroll duration
  });
});

function setActiveSection() {
  if (isScrolling) return; // Skip updates while actively scrolling

  let currentSection = '';
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;

    if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
      currentSection = section.id;
    }
  });

  icons.forEach((icon) => {
    if (icon.dataset.target === `#${currentSection}`) {
      icon.classList.add('active');
    } else {
      icon.classList.remove('active');
    }
  });
}

main.addEventListener('scroll', setActiveSection);
