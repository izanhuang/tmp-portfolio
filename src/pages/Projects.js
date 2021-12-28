import React from 'react'
import { useNav } from '../customHooks/useNav'
import './Page.css'
import '../styles/Projects.css'
import { Carousel, CarouselItem } from 'react-bootstrap'
import webDev from '../assets/web-dev.svg'

const Project = () => {
  const projectsRef = useNav('Projects')

  return (
    <section ref={projectsRef} id="projectsContainer">
      <div className="projects section-container">
        <p className="section-title">
          Projects
          <p className="section-title-sub">Featured works.</p>
        </p>
        <Carousel variant="dark">
          <Carousel.Item interval={500000} className="project-flex">
            <div className="project-flex-left custom-w-50">
              <p className="project-title">Pomodoro Clock</p>
              <p className="project-desc">ReactJS, CSS</p>
              <button
                className="colored-button"
                onClick={() => {
                  window.open('https://izanhuang.github.io/pomodoro-clock/')
                }}
              >
                View Project
              </button>
            </div>
            <div>
              <img className="custom-w-50" src={webDev} alt="First slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item className="project-flex">
            <div className="project-flex-left custom-w-50">
              <p className="project-title">JavaScript Calculator</p>
              <p className="project-desc">ReactJS, CSS</p>
              <button
                className="colored-button"
                onClick={() => {
                  window.open(
                    'https://izanhuang.github.io/javascript-calculator/',
                  )
                }}
              >
                View Project
              </button>
            </div>
            <img className="custom-w-50" src={webDev} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="project-flex">
            <div className="project-flex-left custom-w-50">
              <p className="project-title">Food with Friends</p>
              <p className="project-desc">Java, Firebase</p>
              <button
                className="colored-button"
                onClick={() => {
                  window.open(
                    'https://sbuvoting.github.io/SBU-Voting-Collab-master/',
                  )
                }}
              >
                View Project
              </button>
            </div>
            <img className="custom-w-50" src={webDev} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}

export default Project
