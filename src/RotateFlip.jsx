import React from "react";

import { BsArrowClockwise } from "react-icons/bs";

const RotateFlip = () => {
  return (
    <div className="rotate__container">
      <h2>Rotate & Flip</h2>
      <div className="rotate__icons">
        <BsArrowClockwise className="icons" />
      </div>
    </div>
  );
};

export default RotateFlip;
