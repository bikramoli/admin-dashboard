import React from "react";

const ColoredCircle = (props) => {
  return (
    <div>
      <div className="ColoredCircle" style={{ background: props.color }}></div>
      <div>{props.name}</div>
    </div>
  );
};
export default ColoredCircle;
