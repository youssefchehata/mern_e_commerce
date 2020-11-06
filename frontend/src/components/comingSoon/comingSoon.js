import React from "react";
import comingsoon from "./comingsoon.svg";
// import comingSoon from "./comingSoon.jpeg";

const ComingSoon = () => {
  return (
    <div>
      <div className="row d-flex justify-content-center  ">
        <div className="grid-container col-md-6 col-sm-9  col-xs-11   bg-white p-3 mb-5   " style={{ padding: "40px 40px" }} >
          <h1
            className="d-flex justify-content-center" style={{ padding: "20px 0px", color: "666766" }} >
            Coming Soon
          </h1>
          <p className="d-flex justify-content-center" style={{ padding: "0px 20px", color: "666766", fontWeight: "bold", fontSize: "1.3em" }} >
            Sorry,this page is not available right now
          </p>
        </div>
        <p style={{ width: "100%", margin: "0" }} />
        <div
          className="col-md-6  col-sm-9  col-xs-11 bg-white grid-container" style={{ padding: "40px 40px" }} >
          <img src={comingsoon} alt="comingsoon" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
