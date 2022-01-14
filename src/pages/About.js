import React from 'react'
import { useNav } from '../customHooks/useNav'
import '../styles/About.css'
import './Page.css'
import purpleCircle from '../assets/purple-circle.svg'
import blueCircle from '../assets/blue-circle.svg'

const About = () => {
  const aboutRef = useNav('About')

  return (
    <section ref={aboutRef} id="aboutContainer">
      <div className="about section-container">
        <img className="circle" id="purpleCircle" src={purpleCircle} />
        <p className="section-title">About Me</p>
        <p>
          My pronouns are she/her, and I am fascinated with all the different
          ways data and interfaces are used to create user views. My background
          in information technology, combined with my interest in programming
          and design, pushes me to think outside the box and be creative.
        </p>
        <p>
          Currently, I&apos;m building and incorportating backend technologies
          into my personal projects!
        </p>
        <p>Here are a few technologies I&apos;ve been working with recently:</p>
        <ul className="techs">
          <li>JavaScript</li>
          <li>Spring Boot</li>
          <li>SQL</li>
          <li>React</li>
          <li>Java</li>
          <li>AWS</li>
        </ul>
        <img className="circle" src={blueCircle} />
      </div>
    </section>
  )
}

export default About
