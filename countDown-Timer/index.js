const daysEl = document.querySelector("#day");
const hourseEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

let DueTime = new Date("January 1, 2023 00:01:00");

function Timer() {
    let currentDate = new Date();
    let diff = DueTime - currentDate;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 24;
    const s = Math.floor(diff / 1000) % 60;

    daysEl.innerHTML = d < 10 ? "0" + d : d;
    hourseEl.innerHTML = h < 10 ? "0" + h : h;
    minutesEl.innerHTML = m < 10 ? "0" + m : m;
    secondsEl.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(Timer, "1000")