<<<<<<< HEAD
import { GiReturnArrow } from "react-icons/gi";
import "./GoBackToMineButton.css"

=======
// import { GiReturnArrow } from "react-icons/gi";
import { PiArrowBendDoubleUpRightDuotone } from "react-icons/pi";
import "./GoBackToMineButton.css";
>>>>>>> 4d3500e70352d4efcb4e5671222cde3fc934fee0

const GoBackToMineButton = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="GoBackToMineButtonWrapper  w-fit     z-50
                      ">
        <button
          className="GoBackToMineButton z-50 text-red-500 hover:text-red-700 transform scale-y-[-1]"
          onClick={() => window.history.back()}
        >
          <span className="text-4xl">
            <GiReturnArrow />
          </span>
        </button>
      </div>
       
    </>
  )
}

export default GoBackToMineButton
=======
      <div
        className="GoBackToMineButtonWrapper  z-50     w-fit
                      "
      >
        <button
          className="GoBackToMineButton z-50 scale-x-[-1] transform hidden md:block  "
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
>>>>>>> 4d3500e70352d4efcb4e5671222cde3fc934fee0
