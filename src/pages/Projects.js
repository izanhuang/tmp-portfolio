import React from 'react'
import { useNav } from '../customHooks/useNav'
import './Page.css'

const Project = () => {
  const projectsRef = useNav('Projects')

  return (
    <section ref={projectsRef} id="projectsContainer">
      <img
        src="https://source.unsplash.com/random/600x600/?nature,water"
        alt="unsplash-img"
      />
      <div>
        <h3>Projects</h3>
        <p>This is the contact section</p>
      </div>
    </section>
  )
}

export default Project
