import React from "react";

const Header = () => {
  return (
    <div className="row py-4">
      <div className="col-sm-6">
        <div className=" fw-bold fs-3 text-dark text-start">Dashboard</div>
      </div>
      <div className="col-sm-6">
        <div className="d-flex justify-content-end">
          <div className="dropdown ">
            <a
              className="btn bg-white text-dark dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Last week
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div className="ps-2">
            <button className="btn-addblog btn btn-secondary" type="button">
              Add blog
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="d-flex justify-content-between mb-3 py-4">
    //   <div className=" fw-bold fs-3 text-dark">Dashboard</div>

    //   {/* dropdown */}
    //   <div className="d-flex justify-content-between">
    //     <div className="dropdown ">
    //       <a
    //         className="btn bg-white text-dark dropdown-toggle"
    //         href="#"
    //         role="button"
    //         id="dropdownMenuLink"
    //         data-bs-toggle="dropdown"
    //         aria-expanded="false"
    //       >
    //         Last week
    //       </a>

    //       <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    //         <li>
    //           <a className="dropdown-item" href="#">
    //             Action
    //           </a>
    //         </li>
    //         <li>
    //           <a className="dropdown-item" href="#">
    //             Another action
    //           </a>
    //         </li>
    //         <li>
    //           <a className="dropdown-item" href="#">
    //             Something else here
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     {/* dropdown */}
    //     {/* add blog button */}
    //     <div className="ps-2">
    //       <button
    //         className="btn-addblog btn btn-secondary"
    //         type="button"
    //         id="MenuButton1"
    //         aria-expanded="false"
    //       >
    //         Add blog
    //       </button>
    //     </div>
    //     {/* add blog button */}
    //   </div>
    // </div>
  );
};
export default Header;
