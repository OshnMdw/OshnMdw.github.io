import React from "react";
import "./about.css";
import ME from "../../assets/aboutmenew.png";
import { FaAward } from "react-icons/fa";
import { LiaLanguageSolid } from "react-icons/lia";
import { LuFolderTree } from "react-icons/lu";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about__card">
              <LiaLanguageSolid className="about__icon" />
              <h5>Expertise</h5>
              <small>10+ Programming Languages</small>
            </article>

            <article className="about__card">
              <LuFolderTree className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>
            I'm a Computer Science and Engineering Undergraduate and an
            energetic, versatile, and highly dedicated person who is passionate
            to do hard work and achieving goals.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
