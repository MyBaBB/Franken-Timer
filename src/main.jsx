import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import OldNerd from "./TechSupportButton/TechSupportButton.jsx"
import Cube from "./CubeFolder/Cube.jsx";
import Timer from "./Timer.jsx";
import ThumbsUp from "./BottomComponentsFolder/ThumbsUp.jsx";
import NewHoliday from "./NewHoliday.jsx";
import BottomComponents from "./BottomComponentsFolder/BottomComponents.jsx";
import Credits from "./BottomComponentsFolder/Creative_Commons3.jsx";
// import AquariumDataTip from "./AquariumFolder/AquariumDataTip.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewHoliday />

    <Timer />
     
    {/* <AquariumDataTip /> */}
    <Cube />
     < OldNerd />  
    <ThumbsUp />
    
    <BottomComponents />
    < Credits />
  </React.StrictMode>,
);
