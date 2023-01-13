import React from 'react'
import './Body.css';

export default function Body() {
  return (
    <>
    <div className='Gits'>
      <h1>GITS</h1>
      <h2>Developer Student <br/>Club</h2>
      <button>Join Us</button>
    </div>
    <h3>What is GDSC?</h3>
    <div className="what">
        <h4>Google Collaborates With University Students Who Are Passionate About Growing Developer Communities. GDSC Is An Organisation For University Students Who Want To Bring About A Change Through Technology. We Are Focused Upon Building Technical And Non- Technical Skills, Which Would Help Students To Build A Better Community.# Lets Learn, Grow And Innovate Together.</h4>
        <img src="whats.png" alt="what" />

    </div>

    <h3 >About GDSC GITS</h3>
    <br />
    <div className="about">
        <img src="about.png" alt="" />
        <h4>GDSC's Primary Aim Lies In Empowering Students With Development Skills And Other Technical Abilities For Growth And Advancement. We Believe In Innovation And Evolution. For Students To Grow Their Skills To Tackle Problems And To Bring About Change The Club Is Intended As A Space For Students To Try Out New Ideas And Collaborate To Solve Mobile, Web Development Problems And As Well As Discover New Heights In Al, ML Designing And Much More.</h4>
    </div>

    </>
  )
}
