/*
make hands on clock move according to current time
*/

const deg = 6; // 6 degrees per "tick" of the second hand
const hourHand = document.querySelector("#hr");
const minuteHand = document.querySelector("#min");
const secondHand = document.querySelector("#sec");

setInterval(() => {
    let day = new Date(); 
    let hours = day.getHours() * 30; // 30 degrees around circle per hour 
    let minutes = day.getMinutes() * deg; 
    let seconds = day.getSeconds() * deg;
    hourHand.style.transform = `rotateZ(${hours+(minutes/12)}deg)`; 
    minuteHand.style.transform = `rotateZ(${minutes}deg)`;
    secondHand.style.transform = `rotateZ(${seconds}deg)`;
});

/*
change stylesheets based on whether in 'light mode' or 'dark mode'
*/

const styleSheet = document.getElementById('stylesheet'); //link at beginning of html file
const toggler = document.getElementById('mode'); //button with moon emoji
const main = 'index.css'; //light mode
const darkmode = 'darkmode.css'; //dark mode

toggler.onclick = function swapStyles() {
    if(styleSheet.getAttribute('href') == main) {
        styleSheet.setAttribute('href', darkmode); //when you click the toggler, if the current stylesheet is index.css, switch it 
        toggler.innerHTML = "🌕"; //to darkmode.css and change the button from a dark moon emoji to a light moon emoji
    } 
    else if (styleSheet.getAttribute('href') == darkmode) { //when you click the toggler, if the current stylesheet is darkmode.css,
        styleSheet.setAttribute('href', main); //switch it to index.css and change the buttom from the light moon emoji to the 
        toggler.innerHTML = "🌑"; //dark moon emoji
    }
}

/*
Alarm Clock Functionality
*/

const sound = new Audio('./music/alarmsound.mp3');
const playAudio = () => sound.play();
const pause = () => sound.pause();
const alarm = document.getElementById('alarm'); //alarm emoji button
let intval;

alarm.onclick = function setAlarm() {
    /* 
    Get hours and minutes to set alarm to from user
    */
    let userHour = prompt("Please enter the hour of which you would like the alarm to be set 😄", "07"); 
    if (userHour.charAt(0) > 0 && userHour < 10) { // if a single digit like "7" is added as the hour, put a zero in front of it
    userHour = "0" + userHour;
}
const userMinutes = prompt("Please enter the minutes of which you would like the alarm to be set 😄", "05");

intval = setInterval(function alarmTime() {
    const realtime = new Date();
    let realHours = realtime.getHours();
    let realMinutes = realtime.getMinutes();
    if(realHours > 12) {
        realHours = realHours - 12; //format from military time
    }
    if(userHour > 12) {
        userHour = userHour - 12; //format from military time
    }
    
    if(userHour == realHours && userMinutes == realMinutes) { //if the real time matches the user's input, play the alarm sound
        playAudio();
        let snooze = document.getElementById('snooze');
        snooze.onclick = pause, clearInterval(intval), sound.currentTime = 0;
    }
    
}, 1000); // check real time every second to see if it matches the input
}

