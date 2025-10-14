// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

const ThumbsUp = () => {
  return (
    <div>
      <div className="post-ratings-container fixed bottom-2 ">
        <div className="post-rating">
          <span className="post-rating-button material-symbols-outlined  text-black">
            <FaRegThumbsUp />
          </span>
          <span className="rating-count text-[#87ceeb] ">1818</span>
        </div>

        <div className="post-rating">
          <span className="post-rating-button material-symbols-outlined text-black">
            <FaRegThumbsDown />
          </span>
          <span className="rating-count   text-[#87ceeb] ">1</span>
        </div>
      </div>
    </div>
  );
};

export default ThumbsUp;
