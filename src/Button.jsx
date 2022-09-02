import React from "react";
import ButtonDetail from "./ButtonDetail";
import RotateFlip from "./RotateFlip";
import SliderRange from "./SliderRange";

const Button = () => {
  return (
    <div>
      <div className="btn">
        <ButtonDetail name="brightness" />
        <ButtonDetail name="Saturation" />
        <ButtonDetail name="Inversion" />
        <ButtonDetail name="grayscale" />
      </div>
      <SliderRange />
      {/* <RotateFlip /> */}
    </div>
  );
};

export default Button;
