import React from "react";
import ButtonDetail from "./ButtonDetail";
import RotateFlip from "./RotateFlip";
import SliderRange from "./SliderRange";

const Button = () => {
  return (
    <div>
      <h1>Filter</h1>
      <div className="btn">
        <ButtonDetail name="brightness" />
        <ButtonDetail name="Saturation" />
        <ButtonDetail name="Inversion" />
        <ButtonDetail name="grayscale" />
        <ButtonDetail name="Blur" />
      </div>
      <SliderRange />
      {/* <RotateFlip /> */}
    </div>
  );
};

export default Button;
