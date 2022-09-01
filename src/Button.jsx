import React from "react";
import ButtonDetail from "./ButtonDetail";

const Button = () => {
  return (
    <div>
      <h1>Image Editor</h1>
      <div className="buttons__container">
        <ButtonDetail />
        <ButtonDetail />
        <ButtonDetail />
        <ButtonDetail />
      </div>
    </div>
  );
};

export default Button;
