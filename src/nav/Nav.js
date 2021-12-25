import React, { useState } from 'react'
import NavLink from './NavLink'
import { navLinks } from './navLinks'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

const Nav = () => {
  const [navLinkOpen, navLinkToggle] = useState(false)

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen)
  }

  // const renderClasses = () => {
  //   let classes = 'sections'

  //   if (navLinkOpen) {
  //     classes += ' hamburger-active'
  //   }

  //   return classes
  // }

  return (
    <nav>
      <div className="logo">
        <NavLink navLinkId="IH" scrollToId="homeContainer" />
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
        <button
          className="white-button resume-button"
          onClick={() => {
            window.open('https://www.google.com/')
          }}
        >
          Resume
        </button>
      </div>
      <div className="hamburger-toggle" onClick={handleNavLinksToggle}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  )
}

export default Nav
