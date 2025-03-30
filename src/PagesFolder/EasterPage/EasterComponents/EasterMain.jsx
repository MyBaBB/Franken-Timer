import React from "react";
import ReactDOM from "react-dom/client";

import "./Easter.css";
import Cube from "../EasterCubeFolder/EasterCube.jsx";
import Timer from "./EasterTimer.jsx";
import ThumbsUp from "../../../BottomComponentsFolder/ThumbsUp.jsx";
import NewHoliday from "./EasterMain";
import BottomComponents from "./EasterBottomFolder/EasterBottom.jsx"
 
// import AquariumDataTip from "./AquariumFolder/AquariumDataTip.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewHoliday />

    <Timer />
   
    <Cube />

    <ThumbsUp />

    <BottomComponents />
  </React.StrictMode>,
);
