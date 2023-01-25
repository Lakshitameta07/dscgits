import React from "react";
import "./Navbar.css";
import {Link}  from "react-scroll";
import Toggle from "../Toggle/Toggle";

function Navbar() {
  return (
    <div className="nav">
      <Toggle />
      <div className="n-list">
        <ul style={{ listStyleType: "none" }}>
          <Link spy={true} to= 'Navbar' smooth={true} activeClass="activeClass">
            <li>Home</li>
          </Link>
          <Link spy={true} to='Body' smooth={true}>
            <li>About</li>
          </Link>
          <Link spy={true} to="Team" smooth={true}>
            <li>Team</li>
          </Link>
          <Link spy={true} to="Events" smooth={true}>
            <li>Events</li>
          </Link>
          <Link spy={true} to="Gallery" smooth={true}>
            <li>Gallery</li>
          </Link>
        </ul>
      </div>
      <Link to='contact' spy={true}  smooth={true}>
        <button className="buttn n-buttn">
          Contact
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
