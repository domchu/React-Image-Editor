import React from "react";
import ButtonDetail from "./ButtonDetail";
import RotateFlip from "./RotateFlip";

const Button = () => {
  return (
    <div>
      <h1>Image Editor</h1>
      <div className="buttons__container">
        <ButtonDetail name="brightness" />
        <ButtonDetail name="Saturation" />
        <ButtonDetail name="Inversion" />
        <ButtonDetail name="grayscale" />
      </div>
      <RotateFlip />
    </div>
  );
};

export default Button;
