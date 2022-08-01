"use strict";
let hours = 0;
let mins = 0;
let secs = 0;
let msec = 0;

let h = document.querySelector("#hours");
let m = document.querySelector("#mins");
let se = document.querySelector("#secs");
let ms = document.querySelector("#msecs");

let interval;

let start = document.querySelector("#btnstart");
let stop = document.querySelector("#btnstop");
let reset = document.querySelector("#btnreset");

function timer() {
  msec++;
  if (msec < 10) {
    ms.textContent = 0 + msec;
  }
  if (msec > 10) {
    ms.textContent = msec;
  }
  //   secs
  if (msec > 99) {
    secs++;
    se.textContent = secs;
    msec = 0;
    ms.textContent = 0 + "0";
  }
  if (secs < 10) {
    se.innerHTML = "0" + secs;
  }
  if (secs > 10) {
    se.innerHTML = secs;
  }
  //   mins
  if (secs > 59) {
    mins++;
    m.textContent = mins;
    secs = 0;
    se.textContent = 0 + "0";
  }
  if (mins < 10) {
    m.innerHTML = "0" + mins;
  }
  if (secs > 10) {
    m.innerHTML = mins;
  }
  //   hours
  if (mins > 59) {
    hours++;
    h.textContent = hours;
    mins = 0;
    m.textContent = 0 + "0";
  }
  if (hours < 10) {
    h.innerHTML = "0" + hours;
  }
  if (hours > 10) {
    h.innerHTML = hours;
  }
}
// stop functionality
stop.addEventListener("click", function () {
  clearInterval(interval);
});
reset.addEventListener("click", function () {
  h.textContent = "00";
  m.textContent = "00";
  se.textContent = "00";
  ms.textContent = "00";
});

start.addEventListener("click", function () {
  clearInterval(interval);
  let oneSec = 10;
  interval = setInterval(timer, oneSec);
});
