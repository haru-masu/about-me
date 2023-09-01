// Sample JavaScript code
// You can add your custom JavaScript functionality here

// Example code: Spinning and color-changing header text
const headerText = document.getElementById('headerText');

let rotationDegree = 0;
headerText.addEventListener('click', () => {
    rotationDegree += 360;
    headerText.style.transform = `rotate(${rotationDegree}deg)`;

    // Generate random RGB color values
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    headerText.style.color = randomColor;

    // Play car horn sound effect
    const carHornSound = new Audio('car_horn.mp3');
    carHornSound.play();
});
