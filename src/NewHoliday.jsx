// eslint-disable-next-line no-unused-vars
import React from "react";
import "./NewHoliday.css"
import { IoHourglassOutline } from "react-icons/io5";
import WolfWhistle from "./assets/wolf-whistle.wav"
import { GiHotDog } from "react-icons/gi";
 

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
            className="  topParagraphWrapper "
            title="Click to go to Mybabb.com" 
            aria-label="Click to go to Mybabb.com"
             >
            <p
              className="topParagraph   whitespace-nowrap 

              font-Kingthings_Petrock tracking-wider 
              text-2xl sm:text-3xl md:text-4xl     "

            >
             
              &nbsp;
              
           
           
             
             

              <span className="inline-block  text-orange-400 hover:text-[aliceblue] -mt-4 mb-2 ">
           National Lazy Day 
              </span>
              <span className="holidayIcon m-auto flex justify-center text-[aliceblue]
               "><GiHotDog /></span> 

            </p>
          </a>
        </div>

        <div className="demoWrapper ">
          <a href="https://Mybabb.com"
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
              <span className="clockIcon mt-0 mr-2   ">
                <IoHourglassOutline  size={35} className=" text-[#ffa500] hidden sm:block" />
              </span>
            </div>
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default NewHoliday;
