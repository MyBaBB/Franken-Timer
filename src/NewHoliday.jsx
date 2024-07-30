// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaHammer } from "react-icons/fa6";
import { IoHourglassOutline } from "react-icons/io5";
import WolfWhistle from "./assets/wolf-whistle.wav"

function PlayWolfWhistle() {
  const DrumSolo = new Audio(WolfWhistle);
  DrumSolo.play();
}

const NewHoliday = () => {
  return (
    <div className="fixed left-0 top-0 w-screen">
      <div className="relative flex xxxs:justify-center sm:justify-between   ">
        <div className=" w-fit sm:ml-4   ">
          <a
            href="https://Mybabb.com"
           
            rel="noopener noreferrer"
            onClick={PlayWolfWhistle}     
            className="  topParagraphWrapper   
              font-Kingthings_Petrock"
          >
            <p
              className="topParagraph   whitespace-nowrap 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl   "
            >
              <span className="mx-2 -ml-2 inline-block text-amber-900 sm:ml-4">
                <FaHammer size={29} />
              </span>
              &nbsp;
              <span className="inline-block text-white">
                Labor&nbsp;Day&nbsp;
              </span>
            </p>
          </a>
        </div>

        <div className="demoWrapper ">
          <a href="https://Mybabb.com"
       
          rel="noopener noreferrer"
          onClick={PlayWolfWhistle}
          >
            <div className="  relative flex min-w-[225px] lg:min-w-[335px]  ">
              <p
                id="demo"
                className="relative m-auto ml-8 flex w-full justify-start text-lg sm:text-lg md:ml-0 md:text-2xl lg:text-4xl
                   "
              ></p>
              <span className="clockIcon    ">
                <IoHourglassOutline color="lightgray" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewHoliday;
