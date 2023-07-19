import React from "react";
import name from "./images/name-vector.png"
import engineer from "./images/software-engineer-vector.png"
import star from "./images/star-vector.png"
import projects from "./images/projects-vector.png"
import linkedin from "./images/linked-vector.png"
import github from "./images/github-vector.png"
import contact from "./images/contact-vector.png"

const Main = () => {
  return (
    <div id="home">
      <div className="leftMain">
        <img className="name" src={name} alt="name"/>
        <div className="softwareEngineer">
          <img className="engineer" src={engineer} alt="software engineer"/>
          <img className="star" src={star} alt="star"/>
        </div>
      </div>
      <div className="rightMain">
        <div className="titles">
          <a href="https://www.linkedin.com/in/mackenziekroon/" target="_blank" rel="noopener noreferrer">
            <img className="projectsTitle" src={projects} alt="Projects"/>
          </a>
          <a href="https://www.linkedin.com/in/mackenziekroon/" target="_blank" rel="noopener noreferrer">
            <img className="linkedinTitle" src={linkedin} alt="LinkedIn"/>
          </a>
          <a href="https://www.linkedin.com/in/mackenziekroon/" target="_blank" rel="noopener noreferrer">
            <img className="githubTitle" src={github} alt="GitHub"/>
          </a>
          <a href="https://www.linkedin.com/in/mackenziekroon/" target="_blank" rel="noopener noreferrer">
            <img className="contactTitle" src={contact} alt="Contact Me"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
