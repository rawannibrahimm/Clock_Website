window.addEventListener('DOMContentLoaded', (event) => {
    const currentPage = window.location.href;
    
    // Get the links by their ids
    const digitalLink = document.getElementById('digital-link');
    const stopwatchLink = document.getElementById('stopwatch-link');
    const timerLink = document.getElementById('timer-link');
    
    // Match the page URL and add the 'active' class
    if (currentPage.includes("DigitalWatch.html")) {
        digitalLink.classList.add('active');
    } else if (currentPage.includes("Stopwatch.html")) {
        stopwatchLink.classList.add('active');
    } else if (currentPage.includes("Timer.html")) {
        timerLink.classList.add('active');
    }
});

let timerInterval;
let isRunning = false;

const startStopBtn = document.getElementById("startStopBtn");
const cancelBtn = document.getElementById("cancelBtn");

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

startStopBtn.addEventListener("click", function() {
    if (!isRunning) {
        startTimer();
    } else {
        stopTimer();
    }
});

cancelBtn.addEventListener("click", resetTimer);

function startTimer() {
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds > 0) {
        isRunning = true;
        document.getElementById("play").className = "fa-solid fa-pause";

        timerInterval = setInterval(function() {
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                stopTimer();
                alert("Time's up!");
            } else {
                totalSeconds--;
                updateDisplay(totalSeconds);
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    document.getElementById("play").className = "fa-solid fa-play";
}

function resetTimer() {
    clearInterval(timerInterval);
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
    document.getElementById("play").className = "fa-solid fa-play";
    isRunning = false;
}

function updateDisplay(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hoursInput.value = String(hours).padStart(2, '0');
    minutesInput.value = String(minutes).padStart(2, '0');
    secondsInput.value = String(seconds).padStart(2, '0');
}
