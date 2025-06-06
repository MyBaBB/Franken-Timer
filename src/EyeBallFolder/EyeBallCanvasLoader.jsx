import { Html, useProgress } from "@react-three/drei";
// eslint-disable-next-line no-unused-vars
import React from "react";

const DeskCanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="loaderWrapper relative z-[500] m-auto -ml-[2.3rem] h-fit w-fit flex-row items-center justify-center">
        <div
          className="loader relative m-auto 
                        flex items-center justify-center rounded-full "
        >
          <span className="absolute scale-125 font-Itim-Regular text-2xl text-green-200">
            👽
          </span>
          <div className="h-20 w-20 animate-spin rounded-full border-b-4 border-t-4 border-green-400"></div>
        </div>
        <div className="relative flex ">
          <p className="relative font-sans text-[1.5rem] font-bold text-green-500  ">
            {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
          </p>
        </div>
      </div>
    </Html>
  );
};

export default DeskCanvasLoader;
