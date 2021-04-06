import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Riley Butterfield - Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")} style={{
          color: 'var(--textNormal)',
          }}>Work</button>
            <button onClick={() => scrollTo("#about")}
            style={{
              color: 'var(--textNormal)',
            }}>About</button>
            <button onClick={() => scrollTo("#contact")}
            style={{
              color: 'var(--textNormal)',
            }}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
