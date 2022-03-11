import React from "react";
import copyright from "../assets/images/copyright.png";

const Footer = () => {
  return (
    <div className=" p-4 bg-white text-dark text-center">
      <p>
        <img src={copyright} height="20" alt="C" /> CopyRight{" "}
        <strong>Cagtu Nepal</strong>, All Rights Reserved
      </p>
    </div>
  );
};
export default Footer;
