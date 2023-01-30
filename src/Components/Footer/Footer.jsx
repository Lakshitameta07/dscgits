import React from "react";
import "./Footer.css";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { SiYoutube } from "react-icons/si";

function Footer() {
  return (
    <div className="footer">
      {/* <div className="googlebar">
        <span id="blue"></span>
        <span id="red"></span>
        <span id="orange"></span>
        <span id="green"></span>
      </div> */}
      <div className="f-content">
        <span id="span1">Join The Community</span>
        <span id="span2">Follow us on.</span>
        <div className="f-icons">
          <a
            id="insta"
            href="https://www.instagram.com/gdscgits/?igshid=MDM4ZDc5MmU%3D"
          >
            <SiInstagram color="white" size="1rem" />
          </a>
          <a id="discord" href="https://discord.com/invite/UjGNndNv">
            <SiDiscord color="white" size="1rem" />
          </a>
          <a id="youtube" href="https://www.youtube.com/@gdscgits2616">
            <SiYoutube color="white" size="1rem" />
          </a>
          <a id="linkedin" href="https://www.linkedin.com/company/gdsc-gits/">
            <SiLinkedin color="white" size="1rem" />
          </a>
        </div>
        <span id="span3">Drop us an Email at gdsc@gits.ac.in</span>
        <div className="Map">
          <iframe title="Mymap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.117489488903!2d73.85265161499811!3d24.619635184168025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967dd6f3fb82267%3A0xa3d6f9776c71bd6c!2sGeetanjali%20Institute%20of%20Technical%20Studies%20(GITS)!5e0!3m2!1sen!2sin!4v1674394846425!5m2!1sen!2sin">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
