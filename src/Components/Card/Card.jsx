import React,{useContext} from "react";
import "./Card.css";
import { SiLinkedin } from "react-icons/si";
import  {SiGithub} from "react-icons/si";
import { themeContext } from "../../Context";

const Card = ({ profile, heading, detail,icon1,icon2}) => {

  
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

  return (
    <div className="card">
      <img id="team-image" src={profile} alt="" />
      <div className="c-icons">
        <a  href={icon1}>
       <SiLinkedin style={{ color: darkMode ? "white" : "" }} id="linkedin" color="black" size="1rem" />
       </a>
       <a href={icon2}>
       <SiGithub style={{ color: darkMode ? "white" : "" }} id="github" color="black" size="1rem"/>
       </a>
      </div>
      <div className="container">
      <h4 id="name"><b>{heading}</b></h4>
      <p>{detail}</p>
      </div>
    </div>
  );
};

export default Card;