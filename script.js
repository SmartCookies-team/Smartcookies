document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('#main');
  
    const parallaxDivs = document.querySelectorAll('.parallax');
  
    // Object to track visibility of each div
    const visibilityMap = new Map();
  
    // Intersection Observer to detect when divs enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target, entry.isIntersecting);
        });
      },
      { root: main, threshold: 0.01 } // Adjust threshold as needed
    );
  
    // Observe all parallax divs
    parallaxDivs.forEach((div) => observer.observe(div));
  
    // Scroll event listener for parallax effect
    main.addEventListener('scroll', () => {
      const scrollPosition = main.scrollTop;
  
      parallaxDivs.forEach((div) => {
        if (visibilityMap.get(div)) {
          const axis = div.getAttribute('data-axis') || 'x'; // Default to X-axis
          const speed = parseFloat(div.getAttribute('data-speed')) || 0.15; // Default speed
  
          if (axis === 'x') {
            div.style.transform = `translateX(${scrollPosition * speed}px)`;
          } else if (axis === 'y') {
            div.style.transform = `translateY(${scrollPosition * speed}px)`;
          }
        }
      });
    });
  });


  class MyAOS {
    constructor(options = {}) {
      this.settings = {
        threshold: options.threshold || 0.1, // Percentage of visibility to trigger
        rootMargin: options.rootMargin || "0px", // Offset around viewport
        once: options.once || false, // Repeat animations if set to false
      };
  
      this.elements = document.querySelectorAll("[data-my-aos]");
      this.init();
    }
  
    init() {
      const observer = new IntersectionObserver(this.handleIntersect.bind(this), {
        threshold: this.settings.threshold,
        rootMargin: this.settings.rootMargin,
      });
  
      this.elements.forEach((element) => observer.observe(element));
    }
  
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'visible' class to trigger animation
          entry.target.classList.add("visible");
        } else if (!this.settings.once) {
          // Remove 'visible' class to allow repeated animations
          entry.target.classList.remove("visible");
        }
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    new MyAOS({
      threshold: 0.2,
      once: false, // Set to false for repeated animations
    });
  });