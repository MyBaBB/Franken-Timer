// eslint-disable-next-line no-unused-vars
import React from "react";
import "./TimerStyles.css";

const Timer = () => {
  var countDownDate = new Date("Nov 27, 2025 00:00:00 PST").getTime();

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

    // Display the result in the element with id="demo"
    var minutesStr = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("demo").innerHTML = `
      <span class="timerStyles">${days}</span>
     <span class="timerStylesSmall">&nbsp;days</span>&nbsp;
      <span class="timerStyles">${hours}</span>
      <span class="timerStyles">:</span> 
     <span class="timerStyles">${minutesStr}</span>
      <span class="timerStylesSmall">&nbsp;hrs</span> 
     `;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML =
        "<span>" +
        " <span class='timerStylesFinished1'> Fresh</span>" +
        "<span class='timerStylesFinished2'> Turkey </span>" +
        "<span class='timerStylesFinished3'> Legs</span>" +
        "</span>";
    }
  }, 1000);
};

export default Timer;
