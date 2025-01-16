import React from "react";
import CV from "../../assets/cv.pdf";
import Button from "@mui/material/Button";

const CTA = () => {
  return (
    <div className="cta">
      <Button
        size="large"
        variant="outlined"
        className="btn"
        href={CV}
        download
      >
        Download CV
      </Button>
      <Button size="large" variant="contained" className="btn" href="#contact">
        Let's Talk
      </Button>
      {/* <a href={CV} download className="btn">Download CV</a> */}
      {/* <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a> */}
    </div>
  );
};

export default CTA;
