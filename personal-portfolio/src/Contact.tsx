import React from "react";
import { NavLink, Routes, Route } from "react-router-dom"; import './index.css';
import './navbar.css'; // Include the navbar CSS
import './body.css'; // Include body CSS

const Contact: React.FC = () => {
  return (
    <>
      <div className="background-image">
        <header>
          <nav className="nav-bar">
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to="/projects" activeClassName="active">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <h1>
            Chloe Yip
            <img className="headliner" src="pics-website/head-new.jpg" alt="avatar" />
            <img className="monkey-headliner" src="pics-website/monkey.jpg" alt="monkey" />
          </h1>

          <div className="content-container">
            <div className="general-text">
              <p>
                Feel free to reach me through my personal email: <a href="mailto:emmacarstairs2013@gmail.com">emmacarstairs2013@gmail.com</a>
              </p>
              <p>
                <strong>Links:</strong>
              </p>
              <ul>
                <li><a href="resume-software.pdf" target="_blank">Epic new Software Engineering Resume</a></li>
                <li><a href="resume-pm.pdf" target="_blank">Epic new PM Resume</a></li>
                <li><a href="https://github.com/improving" target="_blank">Improving Github</a></li>
                <li><a href="https://github.com/personal" target="_blank">Personal Github</a></li>
                <li><a href="https://linkedin.com/in/chloeyip" target="_blank">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
