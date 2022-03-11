import React from "react";
import { TinyLine } from "@ant-design/plots";

const DemoTinyLine = () => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
    546, 983, 340, 539, 243, 226, 192,
  ];
  const config = {
    height: 80,
    autoFit: false,
    data,
    smooth: true,
    color: "#0961C9",
  };
  return <TinyLine {...config} />;
};
export default DemoTinyLine;
