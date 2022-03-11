import React from "react";
import { Card } from "react-bootstrap";
import RecentItems from "./RecentItems";
import { RecentBlogsData } from "../assets/data/RecentBlogsData";
import { RecentCommentsData } from "../assets/data/RecentCommentsData";

const Activities = () => {
  return (
    <Card className="w-100 mb-4 p-3 shadow">
      <strong className="text-start ps-2">Activities</strong>
      {/* Recent blog */}
      <p className="text-start ps-2 text-secondary">Recent Blogs</p>
      {RecentBlogsData.map((data, index) => (
        <RecentItems name={data.title} date={data.date} key={index} />
      ))}
      <hr />
      {/* Recent comments */}
      <p className="text-start ps-2 text-secondary">Recent Comments</p>
      {RecentCommentsData.map((data, index) => (
        <RecentItems
          name={data.comments[0].comment}
          date={data.date}
          key={index}
        />
      ))}
    </Card>
  );
};
export default Activities;
