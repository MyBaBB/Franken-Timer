import { GiReturnArrow } from "react-icons/gi";
import "./GoBackToMineButton.css"


const GoBackToMineButton = () => {
  return (
    <>
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