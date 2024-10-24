/*
    Key concepts:
    - document.querySelector('')
    - document.getElementById('')
    - addEventListener('')
    - toString()
    - setInterval()
    - innerHTML
    - if statements
*/

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


// Variables for buttons

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


// Variables for set interval and timerstatus

let timerInterval = null;
let timerStatus = "stopped";

// Stop Watch function

function stopWatch(){


    seconds++;
    
    // when seconds count up to 60 aka seconds devided by 60 equal to one 
    if (seconds/60 === 1){
        seconds = 0;
        minutes++;
        
        // same logic to increment hrs
        if (minutes/60 === 1){
            minutes = 0;
            hours++;
        }

    }
    
    if (seconds < 10 ){
        leadingSeconds = "0" + seconds.toString();
    } else{
        leadingSeconds = seconds;
    }

    if (minutes < 10 ){
        leadingMinutes = "0" + minutes.toString();
    } else{
        leadingMinutes = minutes;
    }

    if (hours < 10 ){
        leadingHours = "0" + hours.toString();
    } else{
        leadingHours = hours;
    }

    // Now time to create a variable that dispalys this if statement in the browser so the stopwatch works 
    let displayHours = document.getElementById('hrs').innerText = leadingHours;
    let displayMinutes = document.getElementById('min').innerText = leadingMinutes;
    let displaySeconds = document.getElementById('sec').innerText = leadingSeconds;
}

// check if the function is working or not 
// window.setInterval(stopWatch , 1000)

// If the timer status is equal to stopped the timer will start 
// and the play button will change to a pause one as well as the time status changes into started
// and to start again click on pause button and it will revert to play again
// setInterval(): This method is used to repeatedly execute a function at a specified interval (in milliseconds). 
// It will keep executing the function continuously until it's explicitly stopped.
// clearInterval(): This method is used to stop the interval set by setInterval().
startStopBtn.addEventListener('click', function() {
    if (timerStatus === "stopped" || timerStatus === "paused") {
        // Start or resume the stopwatch
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    } else if (timerStatus === "started") {
        // Pause the stopwatch
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "paused";
    }
});

resetBtn.addEventListener('click', function(){
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('hrs').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    window.clearInterval(timerInterval);
    timerStatus = "stopped";

});