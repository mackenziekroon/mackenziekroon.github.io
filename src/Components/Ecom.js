import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import ReactCardFlip from "react-card-flip";
import newecom from "./newecom.png";

class Ecom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="vertical"
        >
          <div>
            {/* THIS IS THE FRONT OF THE CARD */}
            <button className="project-pods">
              <img className="img-container" alt="" src={newecom} />

              <div>
                <div className="projects-title">New Ecom Project</div>
                <p className="project-desc">
                  This project is under construction......
                </p>
              </div>
              <div onClick={this.handleClick} className="card-detail-btn">
                <p>Click for details</p>
              </div>
            </button>
          </div>
          <div>
            {/* THIS IS THE BACK OF THE CARD */}
            <button className="project-pods-back">
              <div className="pods-content-back">
                <div className="tech-group">
                  <div className="tech">Javascript</div>
                  <div className="tech">HTML</div>
                  <div className="tech">CSS</div>
                  <div className="tech">React</div>
                </div>

                <div className="links-circle">
                  <div className="seekr-github">
                    <a
                      className="links"
                      href="https://github.com/mackenziekroon/mackenziekroon.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#b6bb8b" }}
                    >
                      <GitHubIcon fontSize="large" />
                    </a>
                  </div>
                </div>
              </div>
              <div onClick={this.handleClick} className="card-detail-btn">
                <p>Flip Back</p>
              </div>
            </button>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default Ecom;
