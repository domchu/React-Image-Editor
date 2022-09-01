import React from "react";

const ButtonDetail = (props) => {
  return (
    <div className="btn__container">
      <button class="ui primary button " id="space">
        {props.name}
      </button>
      ;
    </div>
  );
};

export default ButtonDetail;
