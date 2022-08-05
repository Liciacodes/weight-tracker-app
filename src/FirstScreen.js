import React from "react";
import Card from "./Card";

const FirstScreen = () => {
  return (
    <div>
      <div className="first-screen">
        <h3 className="header-text">My weight loss progress plus one</h3>

        <div className="relative">
          {/* <Arrow height="50" height="50"/> */}
          <div className="triangle"></div>
          <div className="min-value">154LB</div>
          <div className="average-value">95 LB</div>
          <div className="semi-circle">
            <div className="top"></div>
          </div>
          <div className="max-value">135LB</div>
        </div>
      </div>
      <h4>Trends</h4>


      <Card />
    </div>
  );
};

export default FirstScreen;
