// eslint-disable-next-line no-unused-vars
import React from "react";
import "./TimerStyles.css";
const Timer = () => {
  var countDownDate = new Date("July 4, 2024 00:00:00 PST").getTime();
 
  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = `<span>
    ${days} days ${hours}:${minutesStr}:${secondsStr}</span>`;
    var minutesStr = minutes < 10 ? "0" + minutes : minutes;
    var secondsStr = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("demo").innerHTML =`<span class="timerStyles">
   
    ${days} days ${hours}:${minutesStr}:${secondsStr} </span>`;
      days + "days " + hours + ":" + minutesStr + ":" + secondsStr + "s";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML =
        "<span>" +
        "<b><span class='timerStylesFinished1'>..Am</b></span>" +
        "<span class='timerStylesFinished2'>eric</b></span>" +
        "<span class='timerStylesFinished3'>ans</b></span>" +
        "</span>";
    }
  }, 1000);
};
 
export default Timer;
