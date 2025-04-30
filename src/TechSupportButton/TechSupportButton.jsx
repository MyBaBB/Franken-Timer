import React from "react";

import OldNerd from "./oldManTransparent.png";

const TechSupportButton = () => {
  return (
    <div className="oldMan absolute bottom-4 left-0 h-[80px] w-[80px] xxs:left-10 md:left-[50%]  md:top-[1rem]  md:translate-x-[-50%] ">
      <a href="https://mybabb.com/TechSupportPage">
        <button
          className="tech-support-button relative
           mb-[1rem]
          "
        >
          <img
            src={OldNerd}
            alt="Old Nerd image"
            className="h-[80px] w-[80px] "
          />
        </button>
      </a>
    </div>
  );
};

export default TechSupportButton;
