import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import EasterCube from "./Components/CubeFolder/EasterCubeFolder/EasterCube.jsx";
import EasterTimer from "./Components/TopComponents/TimerComponents/EasterTimer/EasterTimer.jsx";
import EasterThumbsUp from "./Components/BottomComponentsFolder/EasterBottomComponents/EasterThumbsUp.jsx";
import EasterHoliday from "./Components/TopComponents/HolidayFolder/EasterHoliday/EasterHoliday.jsx";
import EasterBottomComponents from "./Components/BottomComponentsFolder/EasterBottomComponents/EasterBottomComponents.jsx";

// import AquariumDataTip from "./AquariumFolder/AquariumDataTip.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EasterHoliday />

    <EasterTimer />

    <EasterCube />

    <EasterThumbsUp />

    <EasterBottomComponents />
  </React.StrictMode>,
);
