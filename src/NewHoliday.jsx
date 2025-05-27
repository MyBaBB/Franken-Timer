// eslint-disable-next-line no-unused-vars
import React from "react";
import "./NewHoliday.css";
import { IoHourglassOutline } from "react-icons/io5";
import WolfWhistle from "./assets/wolf-whistle.wav";
import { GiFireworkRocket } from "react-icons/gi";

function PlayWolfWhistle() {
  const DrumSolo = new Audio(WolfWhistle);
  DrumSolo.play();
}

const NewHoliday = () => {
  return (
    <div className="fixed left-0 top-4 w-screen">
      <div className="relative flex xxxs:justify-center sm:justify-between   ">
         <div className="">
      <a href="https://Mybabb.com"  className="  topParagraphWrapper relative justify-center  align-middle 
      flex-row font-Kingthings_Petrock" >
        <div className=" w-fit ">
          <p className="topParagraph whitespace-nowrap pl-8
              xxs:text-5xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl   ">
          <span className='text-red-600 inline-block'  >July&nbsp;</span>
          <span className='text-white inline-block mx-2' ><GiFireworkRocket size={29} /></span>
          <span className='text-blue-700 inline-block '  >4</span>
          <div className='text-blue-700 inline-block absolute  text-2xl  '  >th</div>
          
           </p> 
          
          
        </div>
      </a>
    </div>

        <div className="demoWrapper ">
          <a
            href="https://Mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={PlayWolfWhistle}
            title="Click to go to Mybabb.com"
            aria-label="Click to go to Mybabb.com"
          >
            <div className="  relative flex min-w-[225px] lg:min-w-[335px]  ">
              <p
                id="demo"
                className="relative m-auto ml-8 flex w-full justify-start text-lg sm:text-lg md:ml-0 md:text-2xl lg:text-4xl
                   "
              ></p>
              <span className="clockIcon mr-2 mt-0   ">
                <IoHourglassOutline
                  size={35}
                  className=" hidden text-blue-200 sm:block"
                />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewHoliday;
