import React, { useState } from 'react'
import NavLink from './NavLink'
import { navLinks } from './navLinks'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import resume from '../assets/resume.pdf'

const Nav = () => {
  const [navLinkOpen, navLinkToggle] = useState(false)

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen)
  }

  return (
    <nav>
      <div className="logo">
        <NavLink
          navLinkId="IH"
          scrollToId="homeContainer"
          navLinkToggle={navLinkToggle}
        />
      </div>
      <div className={'sections' + (navLinkOpen ? ' hamburger-active' : '')}>
        {navLinks.map(({ navLinkId, scrollToId }, idx) => (
          <NavLink
            key={idx}
            navLinkId={navLinkId}
            scrollToId={scrollToId}
            navLinkToggle={navLinkToggle}
          />
        ))}
        <a href={resume} download="IzanHuangResume.pdf">
          <button className="white-button resume-button">Resume</button>
        </a>
      </div>
      <div className="hamburger-toggle" onClick={handleNavLinksToggle}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  )
}

export default Nav
