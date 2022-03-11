import React from "react";
import { Card } from "react-bootstrap";
import DemoColumn from "./DemoColumn";
import DemoTinyLine from "./DemoTinyLine";
import DemoRingProgress from "./DemoRingProgress";
import DemoBar from "./DemoBar";
import ColoredCircle from "./ColoredCircle";

const ChartCard = () => {
  return (
    <div className="mb-4">
      <div className="row mb-4">
        <div className="col-md-6 " style={{ height: "260px" }}>
          <Card className="w-100 h-100 p-2 shadow text-center">
            <p className="card-title">Visitors</p>
            <DemoTinyLine />
            <div className="d-flex justify-content-between mb-3 p-2">
              <ColoredCircle color="#0961C9" name="Likes" />
              <p>60%</p>
            </div>
          </Card>
        </div>
        <div className="col-md-6 " style={{ height: "260px" }}>
          <Card className="w-100 h-100 p-2 shadow text-center">
            <p>Average Blog Duration</p>
            <DemoColumn />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 " style={{ height: "260px" }}>
          <Card className="w-100 h-100 p-2 shadow text-center">
            <p>Top Countries</p>
            <DemoBar />
          </Card>
        </div>
        <div className="col-md-6 " style={{ height: "260px" }}>
          <Card className="w-100 h-100 p-2 shadow text-center">
            {" "}
            <p>Status</p>
            <DemoRingProgress />
            <div className="d-flex justify-content-between mb-3 p-2">
              <span className="a">
                <ColoredCircle color="#0961C9" />
              </span>
              <span className="a">Published</span>
              <span className="a">
                <ColoredCircle color="#CEDFF4" />
              </span>
              <span className="a">Unpublished</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartCard;
