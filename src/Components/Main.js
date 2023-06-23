import React from "react";
import name from "./images/name-vector.png"
import engineer from "./images/software-engineer-vector.png"

const Main = () => {
  return (
    <div id="home" className="heading-container">
      <div className="title">
        <img className="name" src={name} alt="name"/>
        <img className="softwareEngineer" src={engineer} alt="software engineer"/>
      </div>
      <div className="extras">

      </div>
    </div>
  );
};

export default Main;
