import React from "react";
import "./pastJobs.css";
import { ImAddressBook } from "react-icons/im";
import { ImPriceTag } from "react-icons/im";
import { Typography } from "@mui/material";

const PastJobs = () => {
  return (
    <section id="pastJobs">
      <h5>Where I developed my skills</h5>
      <h2>Experience</h2>

      <div className="container pastJobs__container">
        <div className="pastJobs__card">
          <Typography variant="h5" color="lightblue">
            Software Engineer Intern
          </Typography>
          <div className="pastJobs__content">
            <ImAddressBook className="experience__details-icon" />
            <div>
              <h4>Karmo (Pty) Ltd</h4>
              <small className="text-light">
                Nov 2023 - June 2024 - Australian Company
              </small>
            </div>
          </div>
          <div className="pastJobs__content">
            <ImPriceTag className="experience__details-icon" />
            <p>
              Contributed to 3 team projects and gained hands-on experience in
              backend and frontend development.
            </p>
          </div>
        </div>

        <div className="pastJobs__card">
          <Typography variant="h5" color="lightblue">
            Director of Web
          </Typography>
          <div className="pastJobs__content">
            <ImAddressBook className="experience__details-icon" />
            <div>
              <h4>UoM Leos</h4>
              <small className="text-light">2022 June - 2023 June</small>
            </div>
          </div>
          <div className="pastJobs__content">
            <ImPriceTag className="experience__details-icon" />
            <p>
              Started a Web Development Competition called Devathon 1.0,
              Conducted a Web Development Workshop for Leos
            </p>
          </div>
        </div>

        <div className="pastJobs__card">
          <Typography variant="h5" color="lightblue">
            Undergraduate Student
          </Typography>
          <div className="pastJobs__content">
            <ImAddressBook className="experience__details-icon" />
            <div>
              <h4>University of Moratuwa</h4>
              <small className="text-light">
                2021 - Present - Moratuwa, Sri Lanka
              </small>
            </div>
          </div>
          <div className="pastJobs__content">
            <ImPriceTag className="experience__details-icon" />
            <p>
              Pursuing a specializing Hons degree in Computer Science and
              Engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastJobs;
