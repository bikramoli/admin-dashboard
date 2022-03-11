import React from "react";

const SideNav = () => {
  return (
    <div className="sidenav col-auto col-md-3 col-xl-2 px-sm-2 px-0">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-5 mt-4 text-white min-vh-100">
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item ">
            <a href="#" className="nav-link align-middle px-0">
              <i className="fs-4 bi-house"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu1"
              data-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
              <i className="fs-4 bi-card-heading"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Blog</span>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-collection-play"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Media</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu2"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle "
            >
              <i className="fs-4 bi-gear"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Setting</span>
            </a>
            <ul
              className="collapse nav flex-column ms-1"
              id="submenu2"
              data-bs-parent="#menu"
            >
              <li className="w-100">
                <a href="#" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Help</span> 1
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Item</span> 2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
              <i className="fs-4 bi-question-circle"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Help</span>{" "}
            </a>
            <ul
              className="collapse nav flex-column ms-1"
              id="submenu3"
              data-bs-parent="#menu"
            >
              <li className="w-100">
                <a href="#" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Product</span> 1
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Product</span> 2
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Product</span> 3
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Product</span> 4
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};
export default SideNav;
