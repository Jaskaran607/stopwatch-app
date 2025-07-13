// DOM Elements
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Variables
let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

// Format time as HH:MM:SS.mmm
function formatTime(milliseconds) {
    let date = new Date(milliseconds);
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');
    let seconds = date.getUTCSeconds().toString().padStart(2, '0');
    let ms = date.getUTCMilliseconds().toString().padStart(3, '0');
    
    return `${hours}:${minutes}:${seconds}.${ms}`;
}

// Update the display
function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

// Start the stopwatch
function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        isRunning = true;
    }
}

// Stop the stopwatch
function stop() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

// Reset the stopwatch
function reset() {
    stop();
    elapsedTime = 0;
    updateDisplay();
}

// Event Listeners
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

// Initialize display
updateDisplay();