import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Cube from "./CubeFolder/Cube.jsx";
import Timer from "./Timer.jsx";
import ThumbsUp from "./BottomComponentsFolder/ThumbsUp.jsx";
// import NewHoliday from "./NewHoliday.jsx";
import Easter from "./PagesFolder/EasterPage/EasterComponents/Easter.jsx";
import BottomComponents from "./BottomComponentsFolder/BottomComponents.jsx";
 
// import AquariumDataTip from "./AquariumFolder/AquariumDataTip.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <NewHoliday /> */}

    <Easter />
    <Timer />
   
    <Cube />

    <ThumbsUp />

    <BottomComponents />
  </React.StrictMode>,
);
