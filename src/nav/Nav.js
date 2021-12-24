import React from 'react'
import NavLink from './NavLink'
import { navLinks } from './navLinks'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <NavLink
        className="logo"
        navLinkId="IH"
        scrollToId="homeContainer"
      ></NavLink>
      {navLinks.map(({ navLinkId, scrollToId }, idx) => (
        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
      ))}

      <button>Resume</button>
    </nav>
  )
}

export default Nav
