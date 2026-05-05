// import { GiReturnArrow } from "react-icons/gi";
import { PiArrowBendDoubleUpRightDuotone } from "react-icons/pi";
import "./GoBackToMineButton.css";

const GoBackToMineButton = () => {
  return (
    <>
      <div
        className="GoBackToMineButtonWrapper  z-50     w-fit
                      "
      >
        <button
          className="GoBackToMineButton z-50 scale-x-[-1] transform    "
          onClick={() => window.history.back()}
          title="Reverse"
        >
          <span className="">
            {/* <GiReturnArrow size={50} /> */}
             <PiArrowBendDoubleUpRightDuotone  size={50} />
          </span>
        </button>
      </div>
    </>
  );
};

export default GoBackToMineButton;
