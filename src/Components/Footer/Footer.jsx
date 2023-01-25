import React from "react";
import "./Footer.css"
import {SiInstagram} from "react-icons/si";
import {SiLinkedin} from "react-icons/si";
import {SiDiscord} from "react-icons/si";
import {SiYoutube} from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="googlebar">
        <span id="blue"></span>
        <span id="red"></span>
        <span id="orange"></span>
        <span id="green"></span>
      </div>
      <div className="f-content">
      <span id="span1">Join The Community</span>
      <span id="span2">Follow us on.</span>
        <div className="f-icons">
          <a id="insta" href="https://www.instagram.com/gdscgits/?igshid=MDM4ZDc5MmU%3D">
            <SiInstagram color="white" size="1rem" />
          </a>
          <a id="discord" href="https://discord.com/invite/UjGNndNv">
            <SiDiscord color="white" size="1rem"/>            
          </a>
          <a id="youtube" href="https://www.youtube.com/@gdscgits2616">
            <SiYoutube color="white" size="1rem"/>
          </a>
          <a id="linkedin" href="https://www.linkedin.com/company/gdsc-gits/">
            <SiLinkedin color="white" size="1rem"/>
          </a>
        </div>
        <span id="span3">Drop us an Email at gdsc@gits.ac.in</span>
      </div>
    </div>
  );
};

export default Footer;
