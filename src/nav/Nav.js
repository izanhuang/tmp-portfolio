import React from 'react'
import NavLink from './NavLink'
import { navLinks } from './navLinks'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <NavLink navLinkId="IH" scrollToId="homeContainer" />
      </div>
      <div>
        {navLinks.map(({ navLinkId, scrollToId }, idx) => (
          <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
        ))}
        <button
          className="white-button resume-button"
          onClick={() => {
            window.open('https://www.google.com/')
          }}
        >
          Resume
        </button>
      </div>
    </nav>
  )
}

export default Nav
