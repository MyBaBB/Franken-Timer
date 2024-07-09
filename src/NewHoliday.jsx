// eslint-disable-next-line no-unused-vars
import React from "react";
import { RxMoon } from "react-icons/rx";
const NewHoliday = () => {
  return (
    <div className="mt-4 w-screen">
      <div className="relative flex w-full xxxs:justify-center sm:justify-between   ">
        <div className="demoWrapper w-full   ">
          <a href="https://Mybabb.com ">
            <div id="demo" className="ml-8 sm:text-xl lg:text-3xl"></div>
          </a>
        </div>

        <div className="relative flex w-fit sm:ml-4   ">
          <a
            href="https://Mybabb.com"
            className="topParagraphWrapper   
               font-Aclonica-Regular"
          >
            <p
              className="topParagraph   whitespace-nowrap 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl   "
            >
              <span className="mx-2 inline-block text-blue-200">
                <RxMoon size={39} />
              </span>
              <span className="inline-block text-blue-200">
                &nbsp;Moon&nbsp;Day&nbsp;
              </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewHoliday;
