// eslint-disable-next-line no-unused-vars
import React from 'react'
 
import "./Rewind.css";
import { GiBulletBill } from "react-icons/gi";
const Rewind = () => {
  return (
    <div className='fixed w-screen bottom-0 h-[100px] z-[5]'>
        <div>
        <div className='relative flex  justify-between   px-8   w-screen h-[50px]'>
       <a href="https://resume-hub.mybabb.com/"   target="_blank"  rel="noopener noreferrer">
       <div
            className="dataToolTip81  font-BlackOpsOneRegular   "
            data-tool-tip="Portfolio Hub "
          >
      <div className="forward relative inline-flex  text-green-500 z-50
                      ">
        < GiBulletBill size={50}/>
      </div>
      </div>
      </a> 
      <a href="https://mybabb.com" target="_blank"  rel="noopener noreferrer" >
      <div
            className="dataToolTip82 font-BlackOpsOneRegular    "
            data-tool-tip="My Home Page"
          >   

      <div className="rewind relative inline-flex  text-green-500 z-50
                      ">
         <GiBulletBill size={50}/>
      </div>
      </div>
      </a> 
    </div>
    </div>
    </div>
  )
}

export default Rewind
