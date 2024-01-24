const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
let displayTimer = document.getElementById('timer');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "Stopped";

function StopWatch(){
    seconds++;
    if(seconds/60 === 1){
        seconds = 0;
        minutes++;
        if(minutes/60 === 1){
            minutes = 0;
            hours++;
        }
    }
    if(seconds < 10){
        leadingSeconds = `0${seconds.toString()}`;
    } else{
        leadingSeconds = seconds;
    }
    if(minutes < 10){
        leadingMinutes = `0${minutes.toString()}`;
    } else{
        leadingMinutes = minutes;
    }
    if(hours < 10){
        leadingHours = `0${hours.toString()}`;
    } else{
        leadingHours = hours;
    }
    displayTimer.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`
}

startStopBtn.addEventListener('click', function(){
    if(timerStatus === "Stopped"){
        timerInterval = window.setInterval(StopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "Started";
    } else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "Stopped";
    };
});

resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
});