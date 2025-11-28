// eslint-disable-next-line no-unused-vars
import React from "react";



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
              font-Kingthings_Petrock"
          >
        <div className=" w-fit m-auto   mt-4 ">
          
            <div
              className="topParagraph relative flex w-fit m-auto  whitespace-nowrap  
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                        
                           "
            >
             
              <div className="relative pl-[1rem]  xs:pr-4 md:pr-2 lg:pl-5 m-auto text-center  block text-[whitesmoke]  ">
                <u className="decoration-[#ef4324]">Christmas</u>
              </div>
            </div>
          
        </div>

        <div className="demoWrapper  w-fit m-auto  ">
          {/* <a
            href="https://Mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={PlayWolfWhistle2}
          > */}
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
