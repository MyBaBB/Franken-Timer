// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaHammer } from "react-icons/fa6";
const NewHoliday = () => {
  return (
    <div className="fixed top-0 left-0 w-screen">
    <div className="relative flex xxxs:justify-center sm:justify-between   ">
      <div className=" w-fit sm:ml-4   "> 
      <a href="https://Mybabb.com"  className="  topParagraphWrapper   
              font-Kingthings_Petrock" >
        
          <p className="topParagraph   whitespace-nowrap 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl   ">
          <span className='text-white inline-block'  >Labor&nbsp;Day&nbsp;</span>
          <span className='text-amber-900 inline-block mx-2' ><FaHammer size={29} /></span>
           </p> 
          
          
       
      </a>
      </div>

      <div className="demoWrapper"> 
      <a href="https://Mybabb.com">
                <div className="  relative min-w-[200px] md:min-w-[320px] flex  ">
                <p
                  id="demo"
                  className="m-auto relative flex    w-[110%] text-lg sm:text-lg md:text-2xl lg:text-4xl
                   "
                ></p>
                </div>
      </a> 
      </div>
      </div>




    </div>
  );
};

export default NewHoliday;
