import React from "react";
import TempSeekr from "./newSEekr";
import PupQuiz from "./PupQuiz";
import Juicery from "./Juicery";
import Portfolio from "./Portfolio";
import Ecom from "./Ecom";
import NewApp from "./NewApp";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seekrOpen: false,
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div>
        <div id="projects" className="projects-container">
          <div className="project-title">Projects</div>
          <div className="projects">
            <TempSeekr />
            <PupQuiz />
            <Juicery />
          </div>
          <div className="projects-row2">
            <Portfolio />
            <NewApp />
            <Ecom />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
