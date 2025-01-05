// Advanced Click Speed Test Game

// Constants
const TEST_DURATION_MS = 5000; // Test duration in milliseconds

// Variables to track the state of the game
let clickCount = 0;
let timerRunning = false;
let startTime = null;

// Function to initialize the game
function initializeGame() {
    attachEventListeners();
    resetGame();
}

// Function to attach event listeners to buttons
function attachEventListeners() {
    const startButton = document.getElementById('startButton');
    const clickButton = document.getElementById('clickButton');

    startButton.addEventListener('click', startTest);
    clickButton.addEventListener('click', recordClick);
}

// Function to reset the game state
function resetGame() {
    clickCount = 0;
    timerRunning = false;
    startTime = null;
    updateClickCount();
}

// Function to start the test
function startTest() {
    if (timerRunning) {
        alert("The test is already running. Please wait for it to finish.");
        return;
    }

    // Reset game state
    resetGame();

    // Update game state
    startTime = Date.now();
    timerRunning = true;

    // Disable start button to prevent multiple tests
    const startButton = document.getElementById('startButton');
    startButton.disabled = true;

    // Run the test for the specified duration
    setTimeout(() => endTest(), TEST_DURATION_MS);
}

// Function to end the test
function endTest() {
    timerRunning = false;

    // Calculate elapsed time and CPS
    const elapsedMs = Date.now() - startTime;
    const elapsedSeconds = elapsedMs / 1000;
    const cps = (clickCount / elapsedSeconds).toFixed(2);

    // Display results to the user
    showTestResults(clickCount, elapsedSeconds, cps);

    // Re-enable the start button
    document.getElementById('startButton').disabled = false;
}

// Function to show test results
function showTestResults(clicks, time, cps) {
    alert(
        `Test Results:\n` +
        `Total Clicks: ${clicks}\n` +
        `Time Elapsed: ${time.toFixed(2)} seconds\n` +
        `Clicks Per Second (CPS): ${cps}`
    );
}

// Function to record a click
function recordClick() {
    if (!timerRunning) {
        alert("The test hasn't started or has already ended. Please start the test first.");
        return;
    }

    // Increment click count and update display
    clickCount++;
    updateClickCount();
}

// Function to update the displayed click count
function updateClickCount() {
    const clickCountDisplay = document.getElementById('clickCount');
    clickCountDisplay.textContent = clickCount;
}

// Run the game initialization after the DOM is fully loaded
window.addEventListener('DOMContentLoaded', initializeGame);
