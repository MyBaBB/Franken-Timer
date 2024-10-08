// eslint-disable-next-line no-unused-vars
import React from "react";
import BottomComponentLeft from "./BottomLeft";
import BottomComponentRight from "./BottomRight";
import MusicPlayer from "../MusicPlayerFolder/AddMusic";
import "./BottomComponents.css";
import DyingCow from "../assets/whipSmack.mp3";

function playWhipSmack() {
  const whipSmackAudio = new Audio(DyingCow);
  whipSmackAudio.play();
}
const Rewind = () => {
  return (
  
      <div>
 <div className="relative flex h-fit bottom-[10rem] md:bottom-20 w-screen  justify-center z-40 ">
            <MusicPlayer />
          </div>
        <div className="relative flex  h-fit bottom-[6rem]  w-screen  justify-between ">
        
          <a
            href="https://resume-hub.mybabb.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playWhipSmack}
          >
            <div
              className="dataToolTip81  font-Nosifer-Regular    "
              data-tool-tip="Portfolio Hub "
            >
              <div
                className="forward relative bottom-12 left-0 z-40 inline-flex text-green-500
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
            onClick={playWhipSmack}
          >
            <div
              className="dataToolTip82 font-Nosifer-Regular  "
              data-tool-tip="My Home Page"
            >
              <div
                className="rewind relative bottom-12 right-0 z-40 inline-flex scale-x-[-1] text-green-500 
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
