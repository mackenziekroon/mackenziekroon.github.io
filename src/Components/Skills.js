import React from "react";

const allSkills = [
  "Javascript",
  "HTML",
  "CSS",
  "Node",
  "Express",
  "React",
  "Redux",
  "PostgreSQL",
  "Sequelize",
  "React Native",
  "Heroku",
  "Git",
];

const Skills = (props) => {
  return (
    <div className="skills-page-container">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-container">
        {allSkills.map((skill) => (
          <p className="single-skill">{skill}</p>
        ))}
        <p></p>
      </div>
    </div>
  );
};

export default Skills;
