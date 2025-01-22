import React from "react";
import ProjectsHeading from "../Components/images/projects-heading-vector.png";
import Project from "./Project";
import data from "../projectData.json";

function Projects() {
  return (
    <div id="project-section">
      <div className="projects-container">
        <img
          className="project-heading"
          src={ProjectsHeading}
          alt="Projects Heading"
        />
        <div className="projects">
          {Object.entries(data.data).map(([project, value]) => {
            return (
              <Project
                key={value.id}
                id={value.id}
                projectImage={value.projectImage}
                projectTitle={value.projectTitle}
                projectDescription={value.projectDescription}
                tech={value.tech}
                projectLink={value.projectLink}
                youtubeLink={value.youtubeLink}
                githubLink={value.githubLink}
                addInfoHeading={value.addInfoHeading}
                addInfoContent={value.addInfoContent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
