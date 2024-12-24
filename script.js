window.onload = function() {
    // Get the progress bar element
    const progressBar = document.getElementById('progress-bar');
    
    // Simulate page loading progress (adjust this logic to fit your needs)
    let progress = 0;

    // Set interval to increase progress gradually (e.g., 10% every 100ms)
    const interval = setInterval(function() {
        progress += 10; // Increase progress by 10%
        progressBar.style.width = progress + '%'; // Update the progress bar
        
        // Once progress reaches 100%, stop the interval
        if (progress >= 100) {
            clearInterval(interval);
            // Hide the preloader and show the content
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }
    }, 100); // Update progress every 100ms (adjust speed as needed)
};

