import React, { useContext } from 'react'
import { NavContext } from '../context/NavContext'

const NavLink = ({ navLinkId, scrollToId, navLinkToggle }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext)

  const handleClick = () => {
    setActiveNavLinkId(navLinkId)
    document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' })
    navLinkToggle(false)
  }

  return (
    <span
      id={navLinkId}
      className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  )
}

export default NavLink
