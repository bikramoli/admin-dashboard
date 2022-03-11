import React from "react";
import { Bar } from "@ant-design/plots";

const DemoBar = () => {
  const data = [
    {
      action: "Austrilia",
      pv: 50000,
    },
    {
      action: "Nepal",
      pv: 35000,
    },
    {
      action: "USA",
      pv: 25000,
    },
    {
      action: "Filipine",
      pv: 15000,
    },
  ];
  const config = {
    data,
    xField: "pv",
    yField: "action",
    color: "#0961C9",
    conversionTag: {},
  };
  return <Bar {...config} />;
};
export default DemoBar;
