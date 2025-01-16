import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import PastJobs from "./components/pastJobs/PastJobs";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <PastJobs />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
