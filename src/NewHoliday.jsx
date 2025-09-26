// eslint-disable-next-line no-unused-vars
import React from "react";
import WallSconce from "./assets/Components/WallSconce";
import { IoHourglassOutline } from "react-icons/io5";
import WolfWhistle from "./assets/PutCandleBack.mp3";
import WolfWhistle2 from "./assets/LookDoctor.mp3";

function PlayWolfWhistle() {
  const DrumSolo = new Audio(WolfWhistle);
  DrumSolo.play();
}
function PlayWolfWhistle2() {
  const DrumSolo2 = new Audio(WolfWhistle2);
  DrumSolo2.play();
}

const NewHoliday = () => {
  return (
    <div className="fixed left-0 top-0 w-screen">
      <div className="relative flex xxxs:justify-center sm:justify-between   ">
        <div className=" w-fit sm:ml-4   ">
          <a
            href="https://Mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={PlayWolfWhistle}
            className="  topParagraphWrapper   
              font-Kingthings_Petrock"
          >
            <p
              className="topParagraph   whitespace-nowrap 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl   "
            > 
              &nbsp;
              <span className="mt-2  inline-block text-[#fcb54d]  ">
                Indigenous Day
              </span>
            </p>
            <p className="wallSconceWrapper relative  pt-2 hidden bp500:block "> <WallSconce /></p>
          </a>
        </div>

        <div className="demoWrapper  ">
          <a
            href="https://Mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={PlayWolfWhistle2}
          >
            <div className="mt-2 relative flex min-w-[225px] lg:min-w-[335px]  ">
              <p
                id="demo"
                className="relative m-auto ml-8 flex w-full justify-start text-lg sm:text-lg md:ml-0 md:text-2xl lg:text-4xl
                   "
              ></p>
              <span className="clockIcon    ">
                <IoHourglassOutline color="lightgray" />
              </span>
            </div>
            <p className="wallSconceWrapper2 pt-[4rem] bp500:pt-2 ">
  <WallSconce />
</p>

          </a>
        </div>
      </div>
    </div>
  );
};

export default NewHoliday;
