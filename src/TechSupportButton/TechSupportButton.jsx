import React from "react";

import OldNerd from "./oldManTransparent.png"

const TechSupportButton = () => {
  return (
    <div className="oldMan absolute bottom-4 md:top-[1rem] left-0 xxs:left-10  md:left-[50%]  md:translate-x-[-50%] ">
      <a href="https://mybabb.com/TechSupportPage">
        <button
          className="tech-support-button relative
           mb-[1rem]
          ">
           <img src={OldNerd} alt="Old Nerd image" className="w-[80px] h-[80px] "
            
           />
         
        </button>
      </a>
    </div>
  );
};

export default TechSupportButton;
