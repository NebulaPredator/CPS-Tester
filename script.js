// Constants
const TEST_DURATION_MS = 5000; // Test duration in milliseconds

let clickCount = 0;
let timerRunning = false;
let startTime = null;

function initializeGame() {
    attachEventListeners();
    resetGame();
}

function attachEventListeners() {
    const startButton = document.getElementById('startButton');
    const clickButton = document.getElementById('clickButton');

    startButton.addEventListener('click', startTest);
    clickButton.addEventListener('click', recordClick);
}

function resetGame() {
    clickCount = 0;
    timerRunning = false;
    startTime = null;
    updateClickCount();
}

function startTest() {
    if (timerRunning) {
        alert("The test is already running. Please wait for it to finish.");
        return;
    }

    resetGame();

    startTime = Date.now();
    timerRunning = true;

    const startButton = document.getElementById('startButton');
    startButton.disabled = true;

    setTimeout(() => endTest(), TEST_DURATION_MS);
}

function endTest() {
    timerRunning = false;

    const elapsedMs = Date.now() - startTime;
    const elapsedSeconds = elapsedMs / 1000;
    const cps = (clickCount / elapsedSeconds).toFixed(2);

    showTestResults(clickCount, elapsedSeconds, cps);

    document.getElementById('startButton').disabled = false;
}

function showTestResults(clicks, time, cps) {
    alert(
        `Test Results:\n` +
        `Total Clicks: ${clicks}\n` +
        `Time Elapsed: ${time.toFixed(2)} seconds\n` +
        `Clicks Per Second (CPS): ${cps}`
    );
}

function recordClick() {
    if (!timerRunning) {
        alert("The test hasn't started or has already ended. Please start the test first.");
        return;
    }

    clickCount++;
    updateClickCount();
}

function updateClickCount() {
    const clickCountDisplay = document.getElementById('clickCount');
    clickCountDisplay.textContent = clickCount;
}

window.addEventListener('DOMContentLoaded', initializeGame);
