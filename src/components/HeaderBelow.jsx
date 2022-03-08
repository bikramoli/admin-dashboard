import React from "react";

const HeaderBelow = () => {
  return (
    <div className="d-flex justify-content-between mb-3">
      <div className=" fw-bold fs-3 w-25 p-3 text-dark text-start">
        Hi, Hari Welcome Back!!
      </div>

      <div className="card w-25 p-3 shadow bg-primary">
        <div className="row">
          <div className="col-4 text-dark ">
            {" "}
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
              className="rounded-circle img-fluid"
              height="70"
              width="70"
            />
          </div>
          <div className="col-8 text-white text-start">
            <h4>01:06 PM</h4>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBelow;
