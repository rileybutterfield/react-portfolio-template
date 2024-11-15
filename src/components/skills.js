import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="skills-container">
          <Fade bottom cascade>
            <h1>Skills</h1>
            <div className="skills-grid">
              {data.skills.map((skill, index) => (
                <div className="skill" key={index}>
                  <img
                    src={skill.img}
                    alt="skill"
                    style={{
                      filter: "var(--iconFilter)",
                    }}
                  ></img>
                  <p>{skill.para}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <a
            href="https://drive.google.com/file/d/1iPFPZBSPUc1tSbmJgseYKX8DaOc-2uxN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="resume-btn"
              style={{
                color: "var(--bg)",
                backgroundColor: "var(--buttonBg)",
              }}
            >
              VIEW MY RESUME
            </button>
          </a>
        </Fade>
      </div>
    </div>
  )
}

export default Skills
