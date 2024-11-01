// eslint-disable-next-line no-unused-vars
import React from "react";
 
import { IoHourglassOutline } from "react-icons/io5";
import WolfWhistle from "./assets/wolf-whistle.wav"
import { PiHandsPrayingThin } from "react-icons/pi";
function PlayWolfWhistle() {
  const DrumSolo = new Audio(WolfWhistle);
  DrumSolo.play();
}

const NewHoliday = () => {
  return (
    <div className="fixed left-0 top-4 w-screen">
      <div className="relative flex xxxs:justify-center sm:justify-between   ">
        <div className=" w-fit  sm:ml-4    ">
          <a
            href="https://Mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={PlayWolfWhistle}     
            className="  topParagraphWrapper   
              font-LibreBaskerville-Regular tracking-wider"
          >
            <p
              className="topParagraph   whitespace-nowrap 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl    "
            >
             
              &nbsp;
              
           
           
             
             
              <span className="inline-block  text-[#e6c587] -mt-4 mb-2 ">
            Thanksgiving Day  
              </span>
              <span className=" m-auto flex justify-center"><PiHandsPrayingThin color="orange" /></span> 
            </p>
          </a>
        </div>

        <div className="demoWrapper ">
          <a href="https://Mybabb.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={PlayWolfWhistle}
          >
            <div className="  relative flex min-w-[225px] lg:min-w-[335px]  ">
              <p
                id="demo"
                className="relative m-auto ml-8 flex w-full justify-start text-lg sm:text-lg md:ml-0 md:text-2xl lg:text-4xl
                   "
              ></p>
              <span className="clockIcon mt-0 mr-2   ">
                <IoHourglassOutline  size={40} color="orange" />
              </span>
            </div>
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default NewHoliday;
