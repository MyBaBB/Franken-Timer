import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Cube from "./Cube.jsx";
import Timer from "./Timer.jsx";
import ThumbsUp from "./ThumbsUp.jsx";
import NewHoliday from "./NewHoliday.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewHoliday />
    <Timer />
    <Cube />
    <ThumbsUp />
  </React.StrictMode>,
);
