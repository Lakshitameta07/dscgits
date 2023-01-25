import React from "react";
import "./Body.css";
import whats from "../../assets/whats.png";
import about from "../../assets/about.png";
export default function Body() {
  return (
    <>
      <div className="gits">
        <h1 id="child1">GITS</h1>
        <h2 id="child2">
          Developer Student <br />
          Club
        </h2>
        <button>Join Us</button>
      </div>
      <h3 id="id1">What is GDSC?</h3>
      <div className="what">
        <h4>
          Google Collaborates With University Students Who Are Passionate About
          Growing Developer Communities. GDSC Is An Organisation For University
          Students Who Want To Bring About A Change Through Technology. We Are
          Focused Upon Building Technical And Non- Technical Skills, Which Would
          Help Students To Build A Better Community.# Lets Learn, Grow And
          Innovate Together.
        </h4>
        <img src={whats} alt="what" />
      </div>

      <h3 id="id2">About GDSC GITS</h3>
      <br />
      <div className="about">
        <img src={about} alt="" />
        <h4>
          GDSC's Primary Aim Lies In Empowering Students With Development Skills
          And Other Technical Abilities For Growth And Advancement. We Believe
          In Innovation And Evolution. For Students To Grow Their Skills To
          Tackle Problems And To Bring About Change The Club Is Intended As A
          Space For Students To Try Out New Ideas And Collaborate To Solve
          Mobile, Web Development Problems And As Well As Discover New Heights
          In Al, ML Designing And Much More.
        </h4>
      </div>
    </>
  );
}
