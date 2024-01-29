document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here


// // Get the reference to the HTML div
const timerDiv = document.getElementById('timer');

let seconds = 0;
let timerInterval;

function startTimer() {
    // Update the timer every second
    timerInterval = setInterval(() => {
        seconds++;
        console.log(seconds);
        // Update the timer display
        timerDiv.textContent = seconds;

        // If the timer reaches 60, reset it
        if (seconds === 60) {
            seconds = 0;
        }
    }, 1000); // 1000 milliseconds = 1 second
}

function stopTimer() {
    // Stop the timer interval
    clearInterval(timerInterval);
}

// Start the timer when the page loads
startTimer();

});