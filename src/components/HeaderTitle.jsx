import React from "react";

const HeaderTitle = (props) => {
  return (
    <>
      <div className="fw-bold fs-5 text-dark text-start">{props.title}</div>
      <p>{props.description}</p>
    </>
  );
};
export default HeaderTitle;
