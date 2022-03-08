import React from "react";
import Header from "../components/Header";
import HeaderBelow from "../components/HeaderBelow";
import { Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="p-2 mt-5  text-white text-center">
        <Header />
        <HeaderBelow />
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-sm-6 p-2" style={{ height: "250px" }}>
                <Card className="w-100 h-100">hello</Card>
              </div>
              <div className="col-sm-6 p-2">
                <Card className="w-100 h-100">hello</Card>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 p-2" style={{ height: "250px" }}>
                <Card className="w-100 h-100">hello</Card>
              </div>
              <div className="col-sm-6 p-2">
                <Card className="w-100 h-100">hello</Card>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-2">
            <Card className="w-100 mb-3">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2020</h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </Card>

            <Card className="w-100">
              <div className="d-flex justify-content-between mb-3 p-2">
                <strong>Top Blogs</strong>
                <button className="top btn btn-primary text-dark">
                  View all
                </button>
              </div>

              <div className="row p-2">
                <div className="col-2 text-dark ">
                  {" "}
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                    className="rounded img-fluid"
                    height="70"
                    width="70"
                  />
                </div>
                <div className="col-10 text-dark text-start">
                  <p>
                    This is the short description of latest blog This is the
                    short description of latest blog
                  </p>
                  <p className="border-bottom">Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="row p-2">
                <div className="col-2 text-dark ">
                  {" "}
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                    className="rounded img-fluid"
                    height="70"
                    width="70"
                  />
                </div>
                <div className="col-10 text-dark text-start">
                  <p>
                    This is the short description of latest blog This is the
                    short description of latest blog
                  </p>
                  <p className="border-bottom">Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-2 text-dark ">
                  {" "}
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                    className="rounded img-fluid"
                    height="70"
                    width="70"
                  />
                </div>
                <div className="col-10 text-dark text-start">
                  <p>
                    This is the short description of latest blog This is the
                    short description of latest blog
                  </p>
                  <p className="border-bottom">Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-2 text-dark ">
                  {" "}
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                    className="rounded img-fluid"
                    height="70"
                    width="70"
                  />
                </div>
                <div className="col-10 text-dark text-start">
                  <p>
                    This is the short description of latest blog This is the
                    short description of latest blog
                  </p>
                  <p className="border-bottom">Kathmandu, Nepal</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-5 p-4 bg-dark text-white text-center">
        <p>Footer</p>
      </div>
    </div>
  );
};
export default Dashboard;
