import React from "react";
import ButtonDetail from "./ButtonDetail";

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
    </div>
  );
};

export default Button;
