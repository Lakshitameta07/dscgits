import React,{useContext} from "react";
import "./About.css";
import what from "../../assets/what.gif";
import about from "../../assets/about.gif";
import { themeContext } from "../../Context";

function About() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div>
      <div className="Home">
        <h1 id="child1">GITS</h1>
        <h2 style={{ color: darkMode ? "white" : "" }} id="child2">
          Developer Student <br />
          Club
        </h2>
        <a href="https://gdsc.community.dev/geetanjali-institute-of-technical-studies-udaipur/">
          <button className="Join-btn">Join Us</button>
        </a>
      </div>
      <h3 id="gdsc">What is GDSC?</h3>
      <div className="what">
        <h4 style={{ color: darkMode ? "white" : "" }} id="h4-1">
          Google Developer Student Clubs "GDSC" are a global network of student
          developer communities initiated and sponsored by Google. GDSC is
          designed to help students gain the skills, knowledge, and experience
          necessary to develop innovative applications and solutions and become
          successful developers. Through the GDSC club, Google provides
          resources, learning opportunities, and mentorship to students. Google
          also helps to connect students with other developers, industry
          leaders, and peers.
        </h4>
        <img src={what} alt="" />
      </div>

      <h3 id="gdsc-2">About GDSC GITS</h3>
      <br />
      <div className="About">
        <img src={about} alt="" />
        <h4 style={{ color: darkMode ? "white" : "" }} id="h4-2">
          GDSC GITS is a student club organized by Google, dedicated to helping
          our community learn more about Google technologies. We provide our
          members with hands-on opporunities to build their skills, and engage
          in technology-related projects and events. Workshops are conducted
          with the aim of helping students gain knowledge and understanding of
          the latest technologies and tools available from Google. They cover
          topics such as Android Development, Cloud Computing, Machine Learning,
          Web Development, and more.
        </h4>
      </div>
    </div>
  );
}

export default About;
