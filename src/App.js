import React, { useState } from "react";
import "./App.css";
import Button from "./Button";
import ButtonDetail from "./ButtonDetail";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    Range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "constrast",
    value: 100,
    Range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "Saturate",
    value: 100,
    Range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 100,
    Range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    Range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    Range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    Range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  return (
    <div className="page_container">
      <h1>Image Editor</h1>
      <div className="container">
        <div className="button__container">
          {options.map((option, index) => {
            return <Button key={index} name={option.name} />;
          })}
        </div>
        <div className="image__container">
          <h1>image</h1>
        </div>
      </div>
      <div className="images__button__container">
        <ButtonDetail name="RESET FILTER" className="reset__filter" />
        <div className="image__side">
          <input type="file" value="" />
          <ButtonDetail name="SAVE IMAGE" />
        </div>
      </div>
    </div>
  );
}

export default App;
