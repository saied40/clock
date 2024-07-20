const hHand = document.getElementById("h1");
const mHand = document.getElementById("m1");
const sHand = document.getElementById("s1");
const hP = document.getElementById("h2");
const mP = document.getElementById("m2");
const sP = document.getElementById("s2");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const ampmDiv = document.getElementById("ampm");

function displayTimeCircleClock() {
  let timeNow = new Date();
  let hours = timeNow.getHours() > 12 ? timeNow.getHours() - 12 : timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();
  let ms = timeNow.getMilliseconds();

  /*
   * 4:40 => 30 * 4 + 40 / 2 = 120 + 20
   * h:30:20 => 6 * 30 + 20 / 10 = 180 + 2
   * h:m:40:260 => 6 * 40 + (6 / 1000 * 260) = 240 + 1.56
   *
   * 1 m = .5 deg
   * 1 s = .1 deg
   * 1 ms = .006 deg
  */

  hHand.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
  mHand.style.transform = `rotate(${6 * minutes + seconds / 10}deg)`;
  sHand.style.transform = `rotate(${6 * seconds + ms * 0.006}deg)`;

  if (timeNow.getHours() > 6 && timeNow.getHours() < 20) {/* it's sunny from 6am to 8pm */
    moon.classList.remove("d-block");
    moon.classList.add("d-none");
    sun.classList.remove("d-none");
    sun.classList.add("d-block");
  } else {
    sun.classList.remove("d-block");
    sun.classList.add("d-none");
    moon.classList.remove("d-none");
    moon.classList.add("d-block");
  }

  hP.innerText = hours < 10 ? '0'+hours : hours;
  mP.innerText = minutes < 10 ? '0'+minutes : minutes;
  sP.innerText = seconds < 10 ? '0'+seconds : seconds;
  ampmDiv.innerText = timeNow.getHours() > 12 ? "pm" : "am";
};

setInterval(displayTimeCircleClock, 1);
