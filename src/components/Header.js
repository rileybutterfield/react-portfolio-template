import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import ThemeToggle from "./themetoggler"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                  Hi, I'm Riley.
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href="https://www.linkedin.com/in/rileybutterfield/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className = "primary-btn" style={{
              color: 'var(--bg)',
              backgroundColor:'var(--buttonBg)',}}>
              CONNECT WITH ME
              </button>
            </a>
            <ThemeToggle />
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
