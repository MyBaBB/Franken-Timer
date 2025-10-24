// eslint-disable-next-line no-unused-vars
import React from "react";


import WolfWhistle from "./assets/PutCandleBack.mp3";
import WolfWhistle2 from "./assets/LookDoctor.mp3";
import "./NewHoliday.css";
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
    <div className="fixed left-0 top-0 w-screen ">


      <div className="relative flex-row justify-center   ">

        <div className=" w-fit m-auto   mt-4 ">
          <a
            href="https://Mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={PlayWolfWhistle}
            className="  topParagraphWrapper   
              font-Kingthings_Petrock"
          >
            <div
              className="topParagraph relative flex w-fit m-auto  whitespace-nowrap  
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                           "
            >
             
              <span className="relative  block text-[#fcb54d]  ">
                Halloween
              </span>
            </div>
          </a>
        </div>

        <div className="demoWrapper  w-fit m-auto  ">
          <a
            href="https://Mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={PlayWolfWhistle2}
          >
              <div className="relative mt-4 flex min-w-[225px] lg:min-w-[335px]  ">
                 <p
                   id="demo"
                   className="relative   flex w-fit m-auto text-lg sm:text-lg  md:text-2xl lg:text-4xl
                   "
              > </p>
                 
              </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default NewHoliday;
