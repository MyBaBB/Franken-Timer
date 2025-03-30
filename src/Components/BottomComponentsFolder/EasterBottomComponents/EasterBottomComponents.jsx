// eslint-disable-next-line no-unused-vars
import React from "react";
import BottomComponentLeft from "./EasterBottomLeft";
import BottomComponentRight from "./EasterBottomRight";
import MusicPlayer from "../../MusicPlayerFolder/AddMusic";
import "./EasterBottomComponents.css";
import Ghost from "../../../assets/SoundEffects/ghost-woo.mp3";

function GhostWooFunction() {
  const whipSmackAudio = new Audio(Ghost);
  whipSmackAudio.play();
}
const Rewind = () => {
  return (
    <div>
      <MusicPlayer />
      <div className="relative bottom-[10rem] z-40 flex h-fit w-screen  justify-center md:bottom-[5rem]  "></div>
      <div className="relative bottom-[6.3rem]  flex h-fit  w-screen  justify-between ">
        <a
          href="https://resume-hub.mybabb.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={GhostWooFunction}
        >
          <div
            className="dataToolTip81  font-Nosifer-Regular    "
            data-tool-tip="Portfolio Hub "
            aria-label="Go to Brett's Portfolio Hub"
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
            aria-label="Go to Brett's Home Page"
          >
            <div
              className="rewind relative bottom-[4.5rem] right-0 z-40 inline-flex scale-x-[-1] text-green-500 
                      "
            >
              <BottomComponentRight />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Rewind;
