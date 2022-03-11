import React from "react";
import { RingProgress } from "@ant-design/plots";

const DemoRingProgress = () => {
  const config = {
    height: 150,
    width: 150,
    autoFit: false,
    percent: 0.5,
    color: ["#0961C9", "#E8EDF3"],
  };
  return <RingProgress {...config} />;
};
export default DemoRingProgress;
