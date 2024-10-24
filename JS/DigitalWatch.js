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

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    // getting the date and time requires us to use the JS object called date
    let currentTime = new Date();
    // so to print the time only we have to remove the date 

    // using the JS methods get hrs, mins , secs

    // adding if condition if the sec, min, hrs, are less than 10 to add a zero infront of them
    hrs.innerHTML = ( currentTime.getHours()<10?"0":"" )+ currentTime.getHours();
    min.innerHTML = ( currentTime.getMinutes()<10?"0":"" )+ currentTime.getMinutes();
    sec.innerHTML = ( currentTime.getSeconds()<10?"0":"" )+ currentTime.getSeconds();

},1000)

