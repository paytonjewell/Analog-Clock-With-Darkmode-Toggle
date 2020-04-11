const deg = 6;
const hourHand = document.querySelector("#hr");
const minuteHand = document.querySelector("#min");
const secondHand = document.querySelector("#sec");

setInterval(() => {
    let day = new Date();
    let hours = day.getHours() * 30;
    let minutes = day.getMinutes() * deg;
    let seconds = day.getSeconds() * deg;
    hourHand.style.transform = `rotateZ(${hours+(minutes/12)}deg)`;
    minuteHand.style.transform = `rotateZ(${minutes}deg)`;
    secondHand.style.transform = `rotateZ(${seconds}deg)`;
});



let styleSheet = document.getElementById('stylesheet');
let toggler = document.getElementById('mode');
let main = 'index.css';
let darkmode = 'darkmode.css';

console.log(styleSheet.getAttribute('href'));



toggler.onclick = function swapStyles() {
    if(styleSheet.getAttribute('href') == main) {
        styleSheet.setAttribute('href', darkmode);
        toggler.innerHTML = "🌕";
    } 
    else if (styleSheet.getAttribute('href') == darkmode) {
        styleSheet.setAttribute('href', main);
        toggler.innerHTML = "🌑";
    }
}

