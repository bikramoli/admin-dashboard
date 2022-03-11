import React from "react";

const RecentItems = (props) => {
  const { name, date } = props;
  return (
    <>
      <div className="d-flex justify-content-between p-2">
        <p>{name}</p>
        <p>{date}</p>
      </div>
    </>
  );
};
export default RecentItems;
