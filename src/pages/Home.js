import React, { useEffect } from 'react'
import { useNav } from '../customHooks/useNav'
import './Page.css'
import '../styles/Home.css'
import img from '../assets/web-dev.svg'
import ScrollAnimation from 'react-animate-on-scroll'

const Home = () => {
  const homeRef = useNav('Home')
  return (
    <section ref={homeRef} id="homeContainer">
      <div className="intro-container">
        <div className="intro-text">
          <p>Hi, my name is</p>

          <h1 className="name">Izan Huang.</h1>
          {/* <h4 className="name-subtitle">I design and build simple things.</h4> */}
          <p className="name-subtitle-sub">
            I'm a front-end developer with an interest in design and cloud
            platforms.
          </p>
          <button
            className="white-button intro-button"
            onClick={() => {
              document
                .getElementById('aboutContainer')
                .scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <i className="arrow down"></i>
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
