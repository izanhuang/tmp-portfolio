import React from 'react'
import { useNav } from '../customHooks/useNav'
import './Page.css'
import '../styles/Projects.css'
import { Carousel, CarouselItem } from 'react-bootstrap'
import clock from '../assets/clock.svg'
import project2svg from '../assets/social.svg'
import project3svg from '../assets/search.svg'
import project4svg from '../assets/server.svg'
import addToCart from '../assets/add-to-cart.svg'

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
              <p className="project-title">Peri</p>
              <p className="project-desc">React, TypeScript, Stripe API, AWS</p>
              <button
                className="colored-button"
                onClick={() => {
                  window.open('https://master.d6dalrasgqnrs.amplifyapp.com/')
                }}
              >
                View Project
              </button>
            </div>
            <div>
              <img className="custom-w-50" src={addToCart} alt="First slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item className="project-flex">
            <div className="project-flex-left custom-w-50">
              <p className="project-title">Facebook Clone</p>
              <p className="project-desc">React, Firebase</p>
              <button
                className="colored-button"
                onClick={() => {
                  window.open('https://github.com/izanhuang/facebook-clone')
                }}
              >
                View Project
              </button>
            </div>
            <img className="custom-w-50" src={project2svg} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item className="project-flex">
            <div className="project-flex-left custom-w-50">
              <p className="project-title">Movie Finder</p>
              <p className="project-desc">React, OMDb API, Firebase</p>
              <button
                className="colored-button"
                onClick={() => {
                  window.open('https://izanhuang.github.io/movie-finder-web/')
                }}
              >
                View Project
              </button>
            </div>
            <img className="custom-w-50" src={project3svg} alt="Second slide" />
          </Carousel.Item>
          {/* <Carousel.Item className="project-flex">
            <div className="project-flex-left custom-w-50">
              <p className="project-title">Pokeball</p>
              <p className="project-desc">Java, Spring Boot, SQL, AWS</p>
              <button
                className="colored-button"
                onClick={() => {
                  window.open('https://main.dwdi6tuvlu9ta.amplifyapp.com/')
                }}
              >
                View Project
              </button>
            </div>
            <img className="custom-w-50" src={project4svg} alt="Fourth slide" />
          </Carousel.Item> */}
        </Carousel>
      </div>
    </section>
  )
}

export default Project
