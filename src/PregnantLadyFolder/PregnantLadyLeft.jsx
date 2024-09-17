// eslint-disable-next-line no-unused-vars
import React from "react";
import PregnantLadyLeft from "./PregnantLady.svg";

const PregnantLadyLeftComponent = () => {
  return (
    <div className="scale-x-[-1]">
      <img
        src={PregnantLadyLeft}
        alt="Pregnant Lady Pointing Left"
        width={110}
        height={110}
      />
    </div>
  );
};

export default PregnantLadyLeftComponent;
