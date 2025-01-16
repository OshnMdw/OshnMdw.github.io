import React, { useState } from "react";
import "./projects.css";
import IMG7 from "../../assets/project1.jpg";
import IMG1 from "../../assets/myportfolio.png";
import IMG3 from "../../assets/drivesmart.jpg";
import IMG2 from "../../assets/JobBoard.png";
import IMG5 from "../../assets/Cosmic Ways.png";
import IMG6 from "../../assets/leoscroll.png";
import IMG4 from "../../assets/votezone.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio Website",
    github: "https://github.com/OshnMdw/MyPortfolio",
    details:
      "This is the portfolio website you are looking at right now.Technologies: React JS, HTML, CSS",
  },
  {
    id: 2,
    image: IMG2,
    title: "Job Finder",
    github: "https://github.com/OshnMdw/job-finder",
    details:
      "This job board app allows users to search and apply for jobs. Users can search for jobs by keyword, location, or job type, and display a list of jobs with titles, companies, and short descriptions. Then they can view more details or apply for the job... #Technologies: ReactJS, Node JS",
  },
  {
    id: 3,
    image: IMG3,
    title: "Drive Smart",
    github: "https://github.com/Luxshan2000/drivers-license-test-application",
    details:
      "It is an innovative online learning web application and mobile application designed to revolutionize the process of preparing for driving license tests in Sri Lanka. It includes instructional videos, interactive quizzes, video-based quizzes, and specialized exercises for recognizing road signs... #Technologies: ReactJS, React-Native, Node.js, MongoDB, ExpressJS, AWS",
  },
  {
    id: 4,
    image: IMG7,
    title: "Talk Together",
    github: "https://github.com/adeeshajayasinghe/talk-together",
    details:
      "TalkTogether is an innovative mobile app designed to bridge language barriers by providing real-time translation for voice calls... #Technologies: Flutter, Dart, Firebase, Node JS",
  },
  {
    id: 5,
    image: IMG5,
    title: "Cosmic Ways",
    github: "https://github.com/CoderNavinda/CSEwasps_CosmicWays",
    details:
      "It is an innovative mobile application designed for space travel. This competition was held in three stages. In the first stage, we came up with a design for the app using Figma and Balsamiq. In the next stage, we implemented the mobile app. In the final stage, we came up with a deep neural network that was capable of identifying brain tumors in space travelers... #Technologies: React Native, MySQL, Firebase, Node JS",
  },
  {
    id: 6,
    image: IMG6,
    title: "Leo Scroll",
    github: "https://github.com/UoMLeos-WEB-PR/leoscroll",
    details:
      "This is a social platform for all the Leos from around Sri Lanka to publish their work with the community... #Technologies: Flutter, Dart, Java, Firebase, Node.js... #Awards: - Most Innovative Project - Best Project Organized on behalf of the Leo Multiple District",
  },
  {
    id: 7,
    image: IMG4,
    title: "VoteZone Frontend",
    github: "https://github.com/UoMLeos-WEB-PR/leoscroll",
    details:
      "VoteZone is a web-based online voting system that helps to manage elections easily and securely... #Technologies:ReactJS, TypeScript, Material UI, HTML, CSS...",
  },
];

const Projects = () => {
  // State to track which project's details should be displayed
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to toggle project details visibility
  const toggleProjectDetails = (id) => {
    if (selectedProject === id) {
      setSelectedProject(null); // Hide details if they are already shown
    } else {
      setSelectedProject(id); // Show details of the selected project
    }
  };

  return (
    <section id="projects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {data.map(({ id, image, title, github, details }) => {
          const isDetailsVisible = selectedProject === id;
          return (
            <article
              key={id}
              className={`project__item ${isDetailsVisible ? "active" : ""}`}
            >
              <div className="project__item-content">
                {isDetailsVisible ? (
                  <div className="project__item-details">
                    <p>{details}</p>
                  </div>
                ) : (
                  <div className="project__item-image">
                    <img src={image} alt={title} />
                  </div>
                )}
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <button
                  className="btn btn-primary"
                  onClick={() => toggleProjectDetails(id)}
                >
                  {isDetailsVisible ? "Back" : "More Details"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
