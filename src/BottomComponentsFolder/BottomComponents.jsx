// eslint-disable-next-line no-unused-vars
import React from "react";
import BottomComponentLeft from "./BottomLeft";
import BottomComponentRight from "./BottomRight";
import MusicPlayer from "../MusicPlayerFolder/AddMusic";
import "./BottomComponents.css";
import Ghost from "../assets/ghost-woo.mp3";

function GhostWooFunction() {
  const whipSmackAudio = new Audio(Ghost);
  whipSmackAudio.play();
}
const Rewind = () => {
  return (
  
      <div>
        <MusicPlayer />
 <div className="relative flex h-fit bottom-[10rem] md:bottom-[5rem] w-screen  justify-center z-40  ">
            
          </div>
        <div className="relative flex  h-fit bottom-[6rem]  w-screen  justify-between ">
        
          <a
            href="https://resume-hub.mybabb.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={GhostWooFunction}
          >
            <div
              className="dataToolTip81  font-Nosifer-Regular    "
              data-tool-tip="Portfolio Hub "
            >
              <div
                className="forward relative bottom-[4.5rem] left-0 z-40 inline-flex text-green-500
                      "
              >
                <BottomComponentLeft />
              </div>
            </div>
            
          </a>
         
          <a
            href="https://mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={GhostWooFunction}
          >
            <div
              className="dataToolTip82 font-Nosifer-Regular  "
              data-tool-tip="My Home Page"
            >
              <div
                className="rewind relative bottom-[4.5rem] right-0 z-40 inline-flex scale-x-[-1] text-green-500 
                      "
              >
               < BottomComponentRight />
              </div>
            </div>
          </a>
        </div>
      </div>
 
  );
};

export default Rewind;
