import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import ContactForm from "./contactform"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <ContactForm action="https://www.flexyform.com/f/97ee130a21d61b5b8be329fc53c8d7846b460472"/>
          <Fade bottom cascade>
          <p>Or email me directly at:</p>
          <a className="email-link" href={`mailto:${data.contactEmail}`} style={{
          color: 'var(--textNormal)',
        }}>
            {data.contactEmail}
          </a>
          </Fade>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons" style={{
              filter: 'var(--iconFilter)',
              }}></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
