import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import SocialIconGroup from "./SocialIconGroup";
import { TopBlogsData } from "../assets/data/TopBlogsData";

const TopBlogs = () => {
  const navigate = useNavigate();
  return (
    <Card className="w-100 shadow p-3">
      <div className="d-flex justify-content-between mb-3 p-2">
        <strong>Top Blogs</strong>
        <button
          className="custom-button btn btn-primary text-dark"
          onClick={(e) => {
            e.preventDefault();
            navigate("/allblogs");
          }}
        >
          View all
        </button>
      </div>
      {TopBlogsData.map((data, index) => (
        <div className="row p-2" key={index}>
          <div className="col-3 text-dark ">
            {" "}
            <img
              src={data.image}
              className="rounded "
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-9 text-dark text-start border-bottom">
            <p>{data.title}</p>
            <SocialIconGroup
              likes={data.likes}
              views={data.views}
              comments={data.comments.length}
              shareNo={data.shareNo}
            />
          </div>
        </div>
      ))}
    </Card>
  );
};
export default TopBlogs;
