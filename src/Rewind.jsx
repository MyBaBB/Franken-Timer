// eslint-disable-next-line no-unused-vars
import React from "react";
import PregnantLadyLeft from "./PregnantLadyFolder/PregnantLadyLeft";
import PregnantLadyRight from "./PregnantLadyFolder/PregnantLadyRight";
import "./Rewind.css";

const Rewind = () => {
  return (
    <div className="fixed bottom-0 z-[5] h-[100px] w-screen">
      <div>
        <div className="relative flex  h-[50px]   w-screen   justify-between px-8">
          <a
            href="https://resume-hub.mybabb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="dataToolTip81  font-BlackOpsOneRegular   "
              data-tool-tip="Portfolio Hub "
            >
              <div
                className="forward relative bottom-5 left-2 z-50 inline-flex text-green-500
                      "
              >
                <PregnantLadyLeft />
              </div>
            </div>
          </a>
          <a
            href="https://mybabb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="dataToolTip82 font-BlackOpsOneRegular    "
              data-tool-tip="My Home Page"
            >
              <div
                className="rewind relative bottom-5 right-2 z-50 inline-flex scale-x-[-1] text-green-500 
                      "
              >
                <PregnantLadyRight />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rewind;
