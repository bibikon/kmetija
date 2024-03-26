document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'cow.jpg',
        'cows.jpg',
        'goat.jpg',
        'R.jpg'
    ];

    let currentImageIdx = 0;
    const backgroundSlider = document.getElementById('background-slider');

    const changeBackgroundImage = () => {
        backgroundSlider.style.backgroundImage = `url(${images[currentImageIdx]})`;
        backgroundSlider.style.backgroundSize = 'cover';
        backgroundSlider.style.backgroundPosition = 'center';
        backgroundSlider.style.transition = 'background 1s ease-in-out';

        currentImageIdx = (currentImageIdx + 1) % images.length;
    };

    changeBackgroundImage(); // Set the first image immediately
    setInterval(changeBackgroundImage, 5000); // Change image every 5000 milliseconds (5 seconds)
});
