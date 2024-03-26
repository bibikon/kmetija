document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'cow.jpg',
        'cows.jpg',
        'goat.jpg',
        'R.jpg'
    ];

    let currentImageIdx = 0;
    const backgroundSlider = document.getElementById('background-slider');

    // Initial background image setup
    backgroundSlider.style.backgroundImage = `url(${images[currentImageIdx]})`;
    backgroundSlider.style.backgroundSize = 'cover';
    backgroundSlider.style.backgroundPosition = 'center';

    setInterval(() => {
        currentImageIdx = (currentImageIdx + 1) % images.length;
        backgroundSlider.style.backgroundImage = `url(${images[currentImageIdx]})`;
    }, 5000); // Change image every 5000 milliseconds (5 seconds)
});
