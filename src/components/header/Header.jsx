import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/myprofile.png";
import HeaderSocial from "./HeaderSocials";
import { Box, Typography } from "@mui/material";
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <header>
      <Box className="container header_container">
        <Typography variant="h4">Hello I'm</Typography>
        <Typography
          variant="h1"
          color="#90caf9"
          fontFamily={"Apple Color Emoji"}
        >
          Oshan Madawa
        </Typography>
        <Typography variant="h5" className="text-light">
          <ReactTyped
            strings={["Full Stack Developer", "Mobile Developer"]}
            typeSpeed={50}
            loop
            backSpeed={20}
          />
        </Typography>
        <CTA />
        <HeaderSocial />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>

        <div className="me">
          <img src={ME} alt="" />
        </div>
      </Box>
    </header>
  );
};

export default Header;
