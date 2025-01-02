let clickCount = 0;
let timerRunning = false;
let startTime;

function startTest() {
    clickCount = 0;
    startTime = Date.now();
    timerRunning = true;

    setTimeout(() => {
        timerRunning = false;
        const elapsedSeconds = (Date.now() - startTime) / 1000;
        const cps = (clickCount / elapsedSeconds).toFixed(2);
        alert(`You clicked ${clickCount} times in ${elapsedSeconds.toFixed(2)} seconds.\nYour CPS (Clicks Per Second) is: ${cps}`);
    }, 5000); // Test runs for 5 seconds
}

function recordClick() {
    if (timerRunning) {
        clickCount++;
    } else {
        alert("The test hasn't started or has already ended. Please start the test first.");
    }
}

document.getElementById('startButton').addEventListener('click', startTest);
document.getElementById('clickButton').addEventListener('click', recordClick);
