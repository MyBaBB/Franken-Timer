// eslint-disable-next-line no-unused-vars
import React from 'react'
import PregnantLadyLeft from './PregnantLadyFolder/PregnantLadyLeft'
import PregnantLadyRight from './PregnantLadyFolder/PregnantLadyRight'
import "./Rewind.css";

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
      <div className="forward relative inline-flex bottom-5 left-2 text-green-500 z-50
                      ">
        <PregnantLadyLeft />
      </div>
      </div>
      </a> 
      <a href="https://mybabb.com" target="_blank"  rel="noopener noreferrer" >
      <div
            className="dataToolTip82 font-BlackOpsOneRegular    "
            data-tool-tip="My Home Page"
          >   

      <div className="rewind relative inline-flex bottom-5 right-2 text-green-500 z-50 scale-x-[-1] 
                      ">
         <PregnantLadyRight/>
      </div>
      </div>
      </a> 
    </div>
    </div>
    </div>
  )
}

export default Rewind
