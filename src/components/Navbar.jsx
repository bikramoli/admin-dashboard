import React from "react";
import "../assets/style/Style.css";
import logo from "../assets/images/logo.svg";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top p-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="offcanvasExample"
        >
          <span
            className="navbar-toggler-icon"
            data-bs-target="#sidebar"
          ></span>
        </button>
        <a
          className="navbar-brand me-auto ms-lg-0 ps-4 text-uppercase fw-bold text-dark"
          href="/"
        >
          <img src={logo} height="30" alt="logo" loading="lazy" />
        </a>
        <button
          className="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNavBar"
          aria-controls="topNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="topNavBar">
          <form className="navbar-search-form d-flex text-center ms-auto my-lg-0">
            <div className="input-group ms-5">
              <input
                className="form-control"
                type="search"
                placeholder="Type here to search..."
                aria-label="Search"
              />
            </div>
            <button className="btn ms-2 btn-outline-primary" type="submit">
              {/* <i className="bi bi-search"></i> */}
              Search
            </button>
          </form>
          <ul className="navbar-nav ms-5">
            <li className="nav-item dropdown">
              <a
                href="#"
                className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1 text-dark">
                  Bikram
                </span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end bg-secondary">
                <li>
                  <a className="dropdown-item" href="#">
                    My porfile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Setting
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
