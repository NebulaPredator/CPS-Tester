// Improved Click Speed Test Game

let clickCount = 0;
let timerRunning = false;
let startTime;
const testDuration = 5000; // Test duration in milliseconds

// Function to start the test
function startTest() {
    clickCount = 0;
    startTime = Date.now();
    timerRunning = true;

    // Disable start button during the test
    const startButton = document.getElementById('startButton');
    startButton.disabled = true;

    setTimeout(() => {
        timerRunning = false;
        const elapsedSeconds = (Date.now() - startTime) / 1000;
        const cps = (clickCount / elapsedSeconds).toFixed(2);

        alert(`You clicked ${clickCount} times in ${elapsedSeconds.toFixed(2)} seconds.\nYour CPS (Clicks Per Second) is: ${cps}`);

        // Enable start button after the test
        startButton.disabled = false;
    }, testDuration);
}

// Function to record a click
function recordClick() {
    if (timerRunning) {
        clickCount++;
        updateClickCount();
    } else {
        alert("The test hasn't started or has already ended. Please start the test first.");
    }
}

// Function to update the displayed click count
function updateClickCount() {
    const clickCountDisplay = document.getElementById('clickCount');
    clickCountDisplay.textContent = clickCount;
}

// Event listeners
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('startButton').addEventListener('click', startTest);
    document.getElementById('clickButton').addEventListener('click', recordClick);

    // Initialize click count display
    updateClickCount();
});
