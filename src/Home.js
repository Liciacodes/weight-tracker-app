import React from "react";
import Card from "./Card";
const Home = () => {
  return (
    <div>
      <div>
        <h3 className="header-text">My weight loss progress</h3>
      </div>
      <div className="center">
        <div className="progress">
          <div className="barOverflow">
            <div className="bar"></div>
          </div>
          <span>148</span>
          <p> 13 Ib left to my goal</p>
        </div>
      </div>
      <h3 className="trends">Trends </h3>
      <section className="grid">
        <Card lastdays="LAST 7 DAYS" weight="2" />
        <Card lastdays="LAST 30 DAYS" weight="4" />
        <Card lastdays="ALL TIME" weight="6" />
        <Card lastdays="MEDIAN WEIGHT" weight="150" />
      </section>
    </div>
  );
};

export default Home;
