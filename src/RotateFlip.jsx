import React from "react";
// import { HiArrowUturnDown } from "react-icons/hi";
import { BsArrowClockwise } from "react-icons/bs";

const RotateFlip = () => {
  return (
    <div className="image__container">
      <h2>Rotate & Flip</h2>
      <div className="rotate__icons">
        {/* <HiArrowUturnDown /> */}
        <BsArrowClockwise className="icons" />
      </div>
    </div>
  );
};

export default RotateFlip;
