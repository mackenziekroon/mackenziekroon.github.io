import React from "react";
import ProjectsHeading from "../Components/images/projects-heading-vector.png"
import Project from "./Project";
import data from "../projectData"

function Projects() {
    return (
      <div>
        <div id="projects" className="projects-container">
          <img className="project-title" src={ProjectsHeading} alt="Projects Heading"/>
          <div className="projects">
              { Object.entries(data).map(([project, value]) => {
                return (
                    <Project
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
