import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
        <Fade bottom className = "resume-btn">
            <a
              href="https://drive.google.com/file/d/11ZAIH690oPzzAyn8gYg-KBGHSR2lXAua/view?usp=sharing"
              className="resume-btn"
            >
              VIEW MY RESUME
            </a>
          </Fade>
      </div>
    </div>
  )
}

export default Skills
