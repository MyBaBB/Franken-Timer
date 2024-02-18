// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
const ThumbsUp = () => {
  return (
    <div>
      <div className="post-ratings-container fixed bottom-2 ">
        <div className="post-rating">
          <span className="post-rating-button text-black  material-symbols-outlined">
          <FaRegThumbsUp />
          </span>
          <span className="rating-count text-black ">1818</span>
        </div>
        <div className="post-rating">
          <span className="post-rating-button text-black material-symbols-outlined">
          <FaRegThumbsDown />
          </span>
          <span className="rating-count  text-black ">1</span>
        </div> 
      </div> 
    </div>
  )
}

export default ThumbsUp
