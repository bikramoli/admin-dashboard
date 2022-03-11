import React from "react";
import { Column } from "@ant-design/plots";

const DemoColumn = () => {
  const data = [
    {
      type: "Sunday",
      hours: 38,
    },
    {
      type: "Monday",
      hours: 52,
    },
    {
      type: "Tuesday",
      hours: 61,
    },
    {
      type: "Wednesday",
      hours: 145,
    },
    {
      type: "Thrusday",
      hours: 48,
    },
    {
      type: "Friday",
      hours: 38,
    },
    {
      type: "Saturday",
      hours: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "hours",
    columnWidthRatio: 0.4,
    color: "#0961C9",
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "category",
      },
      hours: {
        alias: "hours",
      },
    },
  };
  return <Column {...config} />;
};
export default DemoColumn;
