import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll'

function Navbar () {
  return (
      <div className='nav'>
        <a href="/">Home</a>
        <a href="/">About us</a>
        <a href="/">Team</a>
        <a href="/">Events</a>
        <a href="/">Gallery</a>
      <Link to="Contact" smooth={true} spy={true}>
        <text className='nav-btn'>Contact Us</text>
      </Link>
    </div>
  )
}

export default Navbar
