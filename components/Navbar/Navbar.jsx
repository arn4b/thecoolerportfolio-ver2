import React from 'react'
import Fade from 'react-reveal/Fade';


export default function Navbar() {
  return (
    <Fade duration={1500} top>
      <div className="navbar">
        <h1 className="navbar-text">A.</h1>
        <div className="navbar-items">
          <h3 className="navbar-items-text"><a href="#about">About</a></h3>
          <h3 className="navbar-items-text">Tech</h3>
          <h3 className="navbar-items-text">Work</h3>
          <h3 className="navbar-items-text">Contact</h3>
        </div>
      </div>
    </Fade>
  )
}
