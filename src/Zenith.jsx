
import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
import Cube from "./CubeFolder/Cube.jsx";
import Timer from "./Timer.jsx";
import LeftWallSconce from "./assets/Components/LeftWallSconce.jsx"
import RightWallSconce from "./assets/Components/RightWallSconce.jsx"
import NewHoliday from "./NewHoliday.jsx";
import MiddleMobileSconce from "./assets/Components/MiddleMobileSconce.jsx"
import BottomComponents from "../src/BottomComponentsFolder/BottomComponents.jsx";
const Zenith = () => {
  return (
  ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

 
    <NewHoliday />

    <Timer />

    <Cube />
     <div className="leftColumnLight absolute top-[4.8rem] left-[2.34rem] hidden md:block">
      < LeftWallSconce />
    </div>
 <div className="leftColumnWrapper ">
      <img src="/Goody_Column-Right-2.jpg" alt="left Overlay" 
   className="leftColumn-overlay rotate-180 " />
 </div>




 <div className="rightColumnLight absolute top-[4.8rem] right-[2.34rem] hidden md:block  ">
      < RightWallSconce />
 </div>
 <div className="rightColumnWrapper">
   <img src="/Goody_Column-Left-2.jpg " alt="right Overlay"
    className="rightColumn-overlay rotate-180" />
 </div>



 <div className="middleColumnLight absolute top-[5.8rem] left-[50%] translate-x-[-50%] block md:hidden  ">
      < MiddleMobileSconce />
 </div>
 <div className="middleColumnWrapper">
   <img src="/Goody_Column-Middle.jpg " alt="middle Overlay" 
   className="middleColumn-overlay" />
 </div>



    <BottomComponents />
  </React.StrictMode>,
)


  )
}

export default Zenith


