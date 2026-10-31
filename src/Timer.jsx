// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { GiWrappedSweet } from "react-icons/gi";
import { createRoot } from "react-dom/client";
import "./TimerStyles.css";

const Timer = () => {
  useEffect(() => {
    const countDownDate = new Date(
      "Oct 31, 2026 00:00:00 PST"
    ).getTime();

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
            <span class="timerStylesFinished1">Tasty  </span>
            <span class="timerStylesFinished2"></span>
            <span class="timerStylesFinished3">  Treats</span>
          </span>
        `;

        const iconContainer = document.querySelector(
          ".timerStylesFinished2"
        );

        if (iconContainer) {
          const root = createRoot(iconContainer);

          root.render(
              <GiWrappedSweet  
              size={60}
              color="#c2c0bf"
              className="reactIcon"
            />
          );
        }
      }
    }, 1000);

    return () => clearInterval(x);
  }, []);

  return <div id="demo"></div>;
};

export default Timer;