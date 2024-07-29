// eslint-disable-next-line no-unused-vars
import React from "react";
import PregnantLadyLeft from "./PregnantLadyFolder/PregnantLadyLeft";
import PregnantLadyRight from "./PregnantLadyFolder/PregnantLadyRight";
import AddMusic from "./AddMusicFolder/AddMusic";
import "./Rewind.css";
import whipSmack from "./assets/whipSmack.mp3";

function playWhipSmack() {
  const whipSmackAudio = new Audio(whipSmack);
  whipSmackAudio.play();
}
const Rewind = () => {
  return (
    <div className="fixed bottom-0 z-[5] h-[100px] w-screen">
      <div>
        <div className="relative flex  h-[50px]   w-screen   justify-between px-8">
          <a
            href="https://resume-hub.mybabb.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playWhipSmack}
          >
            <div
              className="dataToolTip81  font-BlackOpsOneRegular   "
              data-tool-tip="Portfolio Hub "
            >
              <div
                className="forward relative bottom-5 left-2 z-40 inline-flex text-green-500
                      "
              >
                <PregnantLadyLeft />
              </div>
            </div>
          </a>
          <div
            className="addMusic relative top-[.2rem] m-auto flex 
           w-fit justify-center  "
          >
            <AddMusic />
          </div>
          <a
            href="https://mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playWhipSmack}
          >
            <div
              className="dataToolTip82 font-BlackOpsOneRegular    "
              data-tool-tip="My Home Page"
            >
              <div
                className="rewind relative bottom-5 right-2 z-40 inline-flex scale-x-[-1] text-green-500 
                      "
              >
                <PregnantLadyRight />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rewind;
