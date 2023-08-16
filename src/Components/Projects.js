import React from "react";
import ProjectsHeading from "../Components/images/projects-heading-vector.png"
import Project from "./Project";
import data from "../projectData"

function Projects() {
    return (
      <div id="project-section">
        <div className="projects-container">
          <img className="project-heading" src={ProjectsHeading} alt="Projects Heading"/>
          <div className="projects">
              { Object.entries(data).map(([project, value]) => {
                return (
                    <Project
                    id={value.id}
                    projectImage={value.projectImage.default}
                    projectTitle={value.projectTitle}
                    projectDescription={value.projectDescription}
                    tech={value.tech}
                    projectLink={value.projectLink}
                    youtubeLink={value.youtubeLink}
                    githubLink={value.githubLink}
                    addInfoHeading={value.addInfoHeading}
                    addInfoContent={value.addInfoContent}
                  />
                )
              })
              }
          </div>
        </div>
      </div>
    );
  }

export default Projects;
