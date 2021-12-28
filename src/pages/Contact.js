import React, { useState } from 'react'
import { useNav } from '../customHooks/useNav'
import './Page.css'
import '../styles/Contact.css'
import { FloatingLabel, Form } from 'react-bootstrap'
import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const contactRef = useNav('Contact')

  return (
    <section ref={contactRef} id="contactContainer">
      <div className="contact section-container">
        <p className="section-title">Contact Me</p>
        <div className="icons">
          <FaGithubSquare
            onClick={() => {
              window.open('https://github.com/izanhuang')
            }}
          />
          <FaLinkedin
            onClick={() => {
              window.open('https://www.linkedin.com/in/izanhuang/')
            }}
          />
          <FaEnvelope
            onClick={() => {
              window.open('mailto:huang.izan@gmail.com')
            }}
          />
        </div>
        <div id="form">
          <form
            id="form-id"
            className="form-class pageclip-form"
            method="post"
            action="https://getform.io/f/eba73395-b64b-4139-9638-f6c42345d76c"
          >
            <FloatingLabel label="Name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                id="Name"
                required
              />
            </FloatingLabel>

            <FloatingLabel label="Email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                id="Email"
                name="email"
                required
              />
            </FloatingLabel>

            <FloatingLabel label="Message" className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="Message"
                style={{ height: '200px' }}
                id="Message"
                name="message"
                maxLength="3000"
                required
              />
            </FloatingLabel>

            <button
              type="submit"
              id="button"
              className="button button-primary button-lg button-block"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <a
          href="https://www.figma.com/file/dai19c8WTE92ivh3udT9a8/Untitled?node-id=0%3A1"
          target="_blank"
        >
          Designed
        </a>{' '}
        and Built by Izan Huang
      </footer>
    </section>
  )
}

export default Contact
