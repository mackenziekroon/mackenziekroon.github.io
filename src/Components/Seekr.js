import React from "react";
import Project from "./Project";
import seekr from "../Components/images/seekr-vector.png";

const Seekr = () => {
  const tech = ['JavaScript', 'React', 'Redux', 'Node', 'Express', 'PostgreSQL']
  return (
    <Project
      projectImage={seekr}
      projectTitle='seekr'
      projectDescription='A PWA that allows candidates and recruiters to connect'
      tech={tech}

    />
  )
}


export default Seekr
