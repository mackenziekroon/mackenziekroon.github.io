import React from "react";
import name from "./images/name-vector.png"
import engineer from "./images/software-engineer-vector.png"
import star from "./images/star-vector.png"

const Main = () => {
  return (
    <div id="home" className="heading-container">
      <div className="leftMain">
        <img className="name" src={name} alt="name"/>
        <div className="softwareEngineer">
          <img className="engineer" src={engineer} alt="software engineer"/>
          <img className="star" src={star} alt="star"/>
        </div>
      </div>
      <div className="rightMain"></div>
    </div>
  );
};

export default Main;
