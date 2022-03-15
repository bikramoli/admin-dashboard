import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="row pt-4">
      <div className="col-sm-6">
        <div className=" fw-bold fs-5 text-dark text-start">Dashboard</div>
      </div>
      <div className="col-sm-6">
        <div className="d-flex justify-content-end">
          <div className="ps-2">
            <button
              className="btn-addblog btn btn-secondary"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigate("/addblog");
              }}
            >
              Add blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
