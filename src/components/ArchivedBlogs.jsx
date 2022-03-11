import React from "react";
import { Card } from "react-bootstrap";
import { ArchivedBlogsData } from "../assets/data/ArchivedBlogsData";

const ArchivedBlog = () => {
  return (
    <>
      <Card className="w-100 mt-2 p-3 shadow">
        <div className="d-flex justify-content-between mb-3 p-2">
          <strong>Archived Blogs</strong>
          <button className="custom-button btn btn-primary text-dark">
            View all
          </button>
        </div>
        {ArchivedBlogsData.map((data, index) => (
          <div className="row p-2 border-bottom" key={index}>
            <div className="col-1">
              <p className="bullet-circle">{index + 1}</p>
            </div>
            <div className="archived-title col-10 text-start">{data.title}</div>
            <div className="col-1 bi-three-dots"></div>
          </div>
        ))}
      </Card>
    </>
  );
};
export default ArchivedBlog;
