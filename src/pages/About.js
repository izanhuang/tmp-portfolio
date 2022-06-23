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
          My pronouns are she/her, and I am a self-taught front-end developer. I
          graduated from Stony Brook University where I studied Information
          Systems. Before my last semester, I decided to pursue web development
          and found my passion! Fascinated with all the different ways data and
          interfaces are used to create user views.
        </p>
        <p>
          Currently, I&apos;m learning new technologies and improving my code
          quality!
        </p>
        <p>Here are a few technologies I&apos;ve been working with recently:</p>
        <ul className="techs">
          <li>JavaScript</li>
          <li>Firebase</li>
          <li>Java</li>
          <li>React</li>
          <li>AWS</li>
          <li>SQL</li>
        </ul>
        <img className="circle" id="blueCircle" src={blueCircle} />
      </div>
    </section>
  )
}

export default About
