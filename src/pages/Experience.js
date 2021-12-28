import React from 'react'
import { useNav } from '../customHooks/useNav'
import './Page.css'
import '../styles/Experience.css'
import { Tab, Row, Col, Nav } from 'react-bootstrap'

const Experience = () => {
  const experienceRef = useNav('Experience')

  return (
    <section ref={experienceRef} id="experienceContainer">
      <div className="experience section-container">
        <p className="section-title">Experience</p>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="custom-padding">
            <Col sm={4} md={{ span: 3, offset: 1 }} lg={{ span: 2, offset: 2 }}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Cognizant</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">WUSB</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={8} md={8} lg={6}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p className="no-margin-bottom">
                    Full Stack Developer @ Cognizant
                  </p>
                  <p>Aug 2021 - Present</p>
                  <ul>
                    <li>
                      Developed an e-commerce web app with CRUD functionality
                      using ReactJS and AWS, for internal stakeholders.
                    </li>
                    <li>
                      Implemented authorization and authentication by creating a
                      custom UI with AWS Cognito
                    </li>
                    <li>
                      Worked in an Agile environment to create an Instagram
                      clone web app using ReactJS and Jest.
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p className="no-margin-bottom">
                    Web Developer Intern @ WUSB Radio Station
                  </p>
                  <p>Feb 2021 - July 2021</p>
                  <ul>
                    <li>Designed and created prototypes on Figma.</li>
                    <li>
                      Wrote and maintained a responsive custom sub-theme in
                      Drupal using Lando, Gulp, and Sass.
                    </li>
                    <li>
                      Engaged with the web development team to establish
                      milestones, goals, track progress, and resolve conflicts.
                    </li>
                  </ul>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </section>
  )
}

export default Experience
