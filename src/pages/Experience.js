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
                    Front End Developer @ Cognizant
                  </p>
                  <p>Aug 2021 - Present</p>
                  <ul>
                    <li>
                      Delivered responsive and user-friendly websites as
                      internal projects utilizing React.
                    </li>
                    <li>
                      Implemented production-ready features including infinite
                      scroll, login, and registration.
                    </li>
                    <li>
                      Wrote tests and debugged to verify that code in
                      development functioned as expected.
                    </li>
                    <li>
                      Maintained services and provided production support on
                      internal API for client, Discover Financial Services LLC.
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p className="no-margin-bottom">
                    Web Developer Intern @ WUSB Radio Station
                  </p>
                  <p>Feb 2021 - July 2021</p>
                  <ul>
                    <li>
                      Designed mockups and created a prototype to revamp and
                      modernize the website using Figma.
                    </li>
                    <li>
                      Led and implemented the design into a responsive custom
                      sub-theme utilizing Sass.
                    </li>
                    <li>
                      Collaborated with the web development team to establish
                      tasks, track progress, and meet goals.
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
