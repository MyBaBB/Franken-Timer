// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { GiCampCookingPot } from "react-icons/gi";
import { createRoot } from "react-dom/client";
import "./TimerStyles.css";

const Timer = () => {
<<<<<<< HEAD
  var countDownDate = new Date("Dec 25, 2025 00:00:00 PST").getTime();
=======
  useEffect(() => {
    const countDownDate = new Date(
      "November 26, 2026 00:00:00 PST"
    ).getTime();
>>>>>>> 4d3500e70352d4efcb4e5671222cde3fc934fee0

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
          (1000 * 60)
      );

<<<<<<< HEAD
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML =
        "<span>" +
        " <span class='timerStylesFinished1'> Happy</span>" +
        "<span class='timerStylesFinished2'> BirthDay </span>" +
        "<span class='timerStylesFinished3'> Jesus</span>" +
        "</span>";
    }
  }, 1000);
=======
      const minutesStr =
        minutes < 10 ? "0" + minutes : minutes;

      const demo = document.getElementById("demo");

      if (!demo) return;

      if (distance > 0) {
        demo.innerHTML = `
          <span class="timerStyles">${days}</span>
          <span class="timerStylesSmall">&nbsp;Moons</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="timerStyles">${hours}</span>
          <span class="timerStyles">:</span>
          <span class="timerStyles">${minutesStr}</span>
          <span class="timerStylesSmall">&nbsp;hrs</span>
        `;
      } else {
        clearInterval(x);

        demo.innerHTML = `
          <span>
            <span class="timerStylesFinished1">Feast </span>
            <span class="timerStylesFinished2"></span>
            <span class="timerStylesFinished3">Up </span>
          </span>
        `;

        const iconContainer = document.querySelector(
          ".timerStylesFinished2"
        );

        if (iconContainer) {
          const root = createRoot(iconContainer);

          root.render(
             <GiCampCookingPot    
              className="reactIcon"
            />
          );
        }
      }
    }, 1000);

    return () => clearInterval(x);
  }, []);

  return <div id="demo"></div>;
>>>>>>> 4d3500e70352d4efcb4e5671222cde3fc934fee0
};

export default Timer;