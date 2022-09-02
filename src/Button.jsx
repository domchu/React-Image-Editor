import React from "react";
import ButtonDetail from "./ButtonDetail";
import RotateFlip from "./RotateFlip";

const Button = () => {
  return (
    <div>
      <div className="btn">
        <ButtonDetail name="brightness" />
        <ButtonDetail name="Saturation" />
        <ButtonDetail name="Inversion" />
        <ButtonDetail name="grayscale" />
        <RotateFlip />
      </div>
    </div>
  );
};

export default Button;
