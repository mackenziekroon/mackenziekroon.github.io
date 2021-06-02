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
        {allSkills.map((skill, index) => (
          <p key={index} className="single-skill">
            {skill}
          </p>
        ))}
      </div>
      {/* <div className="skills-object"></div> */}
    </div>
  );
};

export default Skills;
