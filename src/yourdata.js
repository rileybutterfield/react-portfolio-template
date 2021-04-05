// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import nodeIcon from "./images/node.svg"
import expressIcon from "./images/express.svg"
import postgresIcon from "./images/postgresql.svg"
import reduxIcon from "./images/redux.svg"
import apiIcon from "./images/api.svg"
import gitIcon from "./images/git.svg"
import sequelizeIcon from "./images/sequelize.svg"
import pwaIcon from "./images/pwa1.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import gmailIcon from "./images/gmail.svg"


export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Riley",
  headerTagline: [
    //Line 1 For Header
    "I'm Software Engineer",
    //Line 2 For Header
    "etc",
    //Line 3 For Header
    "etc",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm an software engineer living in Brooklyn, NY.",

  //Contact Email
  contactEmail: "rileybutterfield1@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "seeQL",
      para:
        "An NPM library and graphical user interface that allows users to build SQL queries and visualize results using their own data",
      imageSrc:
        "https://i.ibb.co/yf8t9WW/seeql.png",
      url: "https://seeql-app.herokuapp.com/",
    },
    {
      title: "Popcorn",
      para:
        "A dating-app-esque movie swiping mobile app that generates a movie watch list based on paired user preferences", // Add
      imageSrc:
        "https://i.ibb.co/8mDVQZk/popcorn.png",
      url: "https://expo.io/@rileybutterfield/projects/Popcorn",
    },
    {
      title: "Grace Bakes",
      para:
        "A full stack e-commerce website with Stripe integration built for selling delicious pastries and beverages ",
      imageSrc:
        "https://i.ibb.co/BqscHg4/gracebakes.png",
      url: "https://grace-bakes.herokuapp.com/",
    },
    {
      title: "Guide to Publishing an NPM Package",
      para:
        "Blog post and guided walkthrough for publishing your first custom-built package to NPM",
      imageSrc:
        "https://i.ibb.co/YtDfWF2/npmblog.png",
      url: "https://rileybutterfield.medium.com/a-guide-to-publishing-your-first-npm-package-36db1ce7760f",
    },
    {
      title: "Disrupt the Digital Divide",
      para:
        "Co-authored policy brief advocating for improved and equitable tech access for all students",
      imageSrc:
        "https://i.ibb.co/VDp8Fsv/digitaldivide.png",
      url: "policy-brief.pdf",
    },
    {
      title: "See more on GitHub",
      para:
        "View more of my public repositories on my GitHub profile",
      imageSrc:
        "https://i.ibb.co/262Q9BR/more.png",
      url: "https://github.com/rileybutterfield",
    },
  ],


  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Before transitioning into tech, I worked as an educator. I was introduced to the tech world when I was working as a Web Development Program Manager at an education non-profit. Immediately, I became fascinated by the power of code. I started with self-guided learning, focusing primarily on HTML, CSS, and JavaScript. I fell more in love with code with each line I wrote and, eventually, decided to make the leap into tech for good.",
  aboutParaTwo:
    "In August 2020, I had my first day of classes with the Grace Hopper Program at Fullstack Academy, a top coding bootcamp for women and non-binary people. At Grace Hopper, I deepened my existing skills, learned new frameworks, and was certified in the NERP (Node.js, Express.js, React, PostgreSQL) stack. Before I knew it, I was dreaming in code. Now, I am working as a Senior Software Engineering Fellow at Fullstack Academy, where I serve as a technical manager for student projects, lead weekly code reviews, instruct on data structures and algorithms, and run technical admissions interviews.",
  aboutParaThree:
    "When I'm not learning new tech (I'm learning TypeScript now!), you can find me curating Spotify playlists, watching reruns of Jeopardy, or admiring the beauty of NYC.",
  aboutImage: "public/static/RileyButterfield.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: jsIcon,
      para:
        "JavaScript ES6",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: htmlIcon,
      para:
        "HTML5",
    },
    {
      img: cssIcon,
      para:
        "CSS3",
    },
    {
      img: nodeIcon,
      para:
        "Node.js",
    },
    {
      img: expressIcon,
      para:
        "Express.js",
    },
    {
      img: postgresIcon,
      para:
        "PostgreSQL",
    },
    {
      img: reduxIcon,
      para:
        "Redux",
    },
    {
      img: sequelizeIcon,
      para:
        "Sequelize",
    },
    {
      img: pwaIcon,
      para:
        "Progressive Web Apps",
    },
    {
      img: gitIcon,
      para:
        "Git",
    },
    {
      img: apiIcon,
      para:
        "REST APIs",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Up Next",
  promotionPara:
    "I'm currently looking for my next role! I am hoping to land somewhere that is using technology for good to make material impact in our society. I am excited about working on collaborative teams with individuals who love what they do. Does that sound like your company? Drop me a line below!",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Get in touch!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/rileybutterfield" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/rileybutterfield",
    },
    {
      img: gmailIcon,
      url: "mailto:rileybutterfield1@gmail.com",
    },
  ],

  // End Contact Section ---------------
}

