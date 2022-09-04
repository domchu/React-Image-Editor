import React, { useState } from "react";
import "./App.css";
import Button from "./Button";
import ButtonDetail from "./ButtonDetail";
// import DEFAULT_OPTIONS from "./DefaultOptions";
// import FilterProps from "./FilterProps";

function App() {
  const [options, setOptions] = useState("");
  return (
    <div className="page_container">
      <h1>Image Editor</h1>
      <div className="container">
        <div className="button__container">
          <Button />
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
