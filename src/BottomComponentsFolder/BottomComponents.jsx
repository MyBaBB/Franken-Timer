// eslint-disable-next-line no-unused-vars
import React from "react";
import BottomComponentLeft from "./BottomLeft";
import BottomComponentRight from "./BottomRight";
import MusicPlayer from "../MusicPlayerFolder/AddMusic";
import "./BottomComponents.css";
import Ghost from "../assets/Gunshot.mp3";

function GunshotFunction() {
  const gunshotAudio = new Audio(Ghost);
  gunshotAudio.play();
}
const Rewind = () => {
  return (
    <div>
      <MusicPlayer />
      <div className="relative bottom-[10rem] z-40 flex h-fit w-screen  justify-center md:bottom-[5rem]  "></div>
      <div className="relative bottom-[6.3rem]  flex h-fit  w-screen  justify-between ">
        <a
          href="https://about.us.mybabb.com/AboutUsPage"
          target="_blank"
          rel="noopener noreferrer"
          onClick={GunshotFunction}
        >
          <div
            className="dataToolTip81  font-BlackOpsOne-Regular    "
            data-tool-tip="My Services "
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
          onClick={GunshotFunction}
        >
          <div
            className="dataToolTip82 font-BlackOpsOne-Regular  "
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
