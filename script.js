// Wait for the page to load, then show the preloader for 600ms
window.onload = function() {
    // Simulate page loading progress
    let progress = 0;
    const progressBar = document.getElementById('progress-bar');
    
    // Simulate progress increase (could be based on actual content load)
    const interval = setInterval(function() {
        progress += 10; // Increase progress by 10%
        progressBar.style.width = progress + '%';
        
        // Once progress reaches 100%, stop the interval
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(function() {
                // Hide preloader and show content
                document.getElementById('preloader').style.display = 'none';
                document.getElementById('content').style.display = 'block';
            }, 600); // 600ms delay before content is shown
        }
    }, 150); // Update progress every 150ms (this can be adjusted)
};
