import "./index.css";
import Cube from "./assets/Components/CubeFolder/Cube.jsx";
import Timer from "./Timer.jsx";
import NewHoliday from "./assets/Components/NewHolidayFolder/NewHoliday.jsx";
import BottomComponents from "./assets/Components/BottomComponentsFolder/BottomComponents.jsx";
import ColumnL from "../public/ColumnLeft1.webp";
import ColumnR from "../public/ColumnRight1.webp";
 const Zenith = () => {
  return (
    <div className="zenithWrapper relative border-2 border-green-500 pb-4">

      <div className=" leftColumn hidden"> 
        <img  
          src={ColumnL}
          alt="Left Column"
          className="column-left fixed left-[-12.25rem] -top-4 h-full w-auto scale-[60%]"
          loading="lazy"
       />
        <div>

          
       <div className="rightColumn  hidden">
        <img
          src={ColumnR}
          alt="Right Column"
          className="column-right fixed right-[-12.75rem] -top-4 h-full w-auto scale-[60%]"
          loading="lazy"        />
        </div>


        </div>
      </div>


      <NewHoliday />
      <Timer />
      <Cube />
      <BottomComponents />



    </div>
  );
};

export default Zenith;
