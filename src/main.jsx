import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Cube from "./Cube.jsx";
import Timer from "./Timer.jsx";
import ThumbsUp from "./ThumbsUp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Timer />
    <Cube />
    <ThumbsUp />
  </React.StrictMode>,
);
