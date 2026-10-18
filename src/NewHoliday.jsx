// eslint-disable-next-line no-unused-vars
import React from "react";

import { SiGhostery } from "react-icons/si";
import { GiPumpkinMask } from "react-icons/gi";
import LookDoctor from "/LookDoctor.mp3";
import "./NewHoliday.css";
import "./TimerStyles.css";
function PlayLookDoctor() {
  const DrumSolo2 = new Audio(LookDoctor);
  DrumSolo2.play();
}

const NewHoliday = () => {
  return (
    <div className="fixed left-0 top-0 w-screen ">


      <div className="relative flex-row justify-center   ">
<a
            href="https://Mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={PlayLookDoctor}
            className="  topParagraphWrapper   
             font-Creepster-Regular"
          >
        <div className=" w-fit m-auto   mt-4 ">
          
            <div
              className="topParagraph relative flex w-fit m-auto  whitespace-nowrap  
                         text-xl sm:text-2xl md:text-3xl lg:text-6xl  
                        
                           "
            >
             
              <div className="relative pl-[1rem]  xs:pr-4 md:pr-2 lg:pl-5 m-auto text-center  block text-orange-300 ">
                
                <span className="inline-block text-green-200 text-lg sm:text-xl md:text-2xl lg:text-4xl">
                  <GiPumpkinMask  />
                </span> 
                      <u className="decoration-green-200">
                         &nbsp;Halloween&nbsp;
                      </u>
                <span className="inline-block text-green-200 text-lg sm:text-xl md:text-2xl lg:text-4xl">
                  <SiGhostery   />
                </span> 
            
              </div>
            </div>
          
        </div>

        <div className="demoWrapper  w-fit m-auto  ">
        
              <div className="relative mt-4 pr-4 xs:pr-3 md:pr-0 md:pl-4 flex min-w-[225px] lg:min-w-[335px]  ">
                 <p
                   id="demo"
                   className="relative   flex w-fit m-auto text-lg sm:text-lg  md:text-2xl lg:text-4xl
                   "
              > </p>
                 
              </div>
          {/* </a> */}
        </div>
</a>
      </div>
    </div>
  );
};

export default NewHoliday;
