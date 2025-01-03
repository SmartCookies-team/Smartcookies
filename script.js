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