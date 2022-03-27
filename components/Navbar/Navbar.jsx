import React from 'react'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'

export default function Navbar() {
  return (
    <Fade duration={1500} top>
      <div className="navbar">
        <h1 className="navbar-text">
          <Link href="/">
            A.
          </Link></h1>
        <div className="navbar-items">
          <h3 className="navbar-items-text">
            <Link href="/uses">
              Tech I Use
            </Link>
          </h3>
        </div>
      </div>
    </Fade>
  )
}
