// eslint-disable-next-line no-unused-vars
import React from "react";
import { GiFireworkRocket } from "react-icons/gi";
const NewHoliday = () => {
  return (
    <div className="">
      <a href="https://Mybabb.com"  className="  topParagraphWrapper relative justify-center  align-middle 
      flex-row font-Kingthings_Petrock" >
        <div className=" w-fit ">
          <p className="topParagraph whitespace-nowrap 
              xxs:text-5xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl   ">
          <span className='text-red-600 inline-block'  >July&nbsp;</span>
          <span className='text-white inline-block mx-2' ><GiFireworkRocket size={29} /></span>
          <span className='text-blue-700 inline-block '  >4</span>
          <div className='text-blue-700 inline-block absolute  text-2xl  '  >th</div>
          
           </p> 
          
          
        </div>
      </a>
    </div>
  );
};

export default NewHoliday;
