import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
              <br></br>
              <br></br>
              {data.aboutParaFour}
            </p>
          </div>
          <div className="image-wrapper">
            <img src="https://i.ibb.co/dGMft70/Riley-Butterfield.jpg"
            alt="about"
            className = "aboutMePic"
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
