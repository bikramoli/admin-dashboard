import React, { useState } from "react";

const HeaderBelow = (props) => {
  const current = new Date();

  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  // "5:25 AM"
  return (
    <>
      <div className="row py-5 ">
        <div className="col-sm-6 ">
          <div className="fw-bold fs-3  text-dark text-start">
            Hi <span className="user--name">{props.userName}</span>,
            <p>Welcome Back!</p>
          </div>
        </div>
        <div className="col-sm-6  d-flex justify-content-end">
          <div className="country-info card shadow ">
            <div className="row p-2">
              <div className="col-4 text-dark">
                <img
                  src={`https://flagcdn.com/32x24/${props.countryName}.png`}
                  srcSet={`https://flagcdn.com/64x48/${props.countryName}.png 2x,
            https://flagcdn.com/96x72/${props.countryName}.png 3x`}
                  className="rounded-circle border white "
                  width="70"
                  height="70"
                  alt="flag"
                />
              </div>
              <div className="col-8 text-white text-start">
                <h4>{time}</h4>
                <p>
                  {props.cityname},{props.countryName.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------- */}
    </>
  );
};
export default HeaderBelow;
