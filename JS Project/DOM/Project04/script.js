// variables for buttons

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variable for time

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


function stopwatch() {
    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {minutes
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }


    let displaytimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}
resetBtn.addEventListener('click', function() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    leadingSeconds = "00";
    leadingMinutes = "00";
    leadingHours = "00";
    document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
});

window.setInterval(stopwatch, 1000)