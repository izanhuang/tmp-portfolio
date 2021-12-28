import React from 'react'
import { useNav } from '../customHooks/useNav'
import './Page.css'
import '../styles/Home.css'
import img from '../assets/web-dev.svg'

const Home = () => {
  const homeRef = useNav('Home')
  return (
    <section ref={homeRef} id="homeContainer">
      <div className="intro-container">
        <div className="intro-text">
          <p>Hi, my name is</p>
          <span className="name">Izan Huang.</span>
          <p className="name-subtitle">I design and build simple things.</p>
          <p className="name-subtitle-sub">
            I'm a full stack developer specializing in front end technologies
            with experience in creating prototypes.
          </p>
          <button
            className="white-button intro-button"
            onClick={() => {
              document
                .getElementById('projectsContainer')
                .scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Check out my projects!
          </button>
        </div>
        <div className="image">
          <img src={img} />
        </div>
      </div>
    </section>
  )
}

export default Home
