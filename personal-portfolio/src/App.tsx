import React from "react";
import { NavLink, Routes, Route } from "react-router-dom"; // Import NavLink and routing components

import './index.css';
import './navbar.css'; // Include the navbar CSS
import './body.css'; // Include body CSS

const App: React.FC = () => {
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
              Hi there! My name is Chloe, and I am a third year{" "}
              <a href="https://www.sfu.ca/computing/prospective-students/undergraduate-students/programs/degree-programs/softwaresystems.html">Software Systems</a>{" "}
              major at SFU doing an engineering minor in Computer and Electronics design. I'm interested in pursuing a career in software development, technical management,
              and computer engineering. Currently, I'm a{" "}
              <a href="https://github.com/cyip10">Software Developer Intern</a> at <a href="https://www.improving.com/">Improving</a> (formerly BitQuill Technologies). <br /><br />

              I'm a member of SFU Enactus, Aqua Analyzer team, as a Software and Firmware Developer! In the spring I will be speaking at the Western Regional Case Competition for this project. <br />
              In my free time, I enjoy staying active, exploring new food spots, and being creative.
              Right now, I’m training for a triathlon coming up in March, and I’m also part of a pentasport and volleyball league.
              <br /><br />

              Dive into my <NavLink to="/projects">Projects</NavLink> to discover the exciting work I've been involved in and explore my professional journey.
              Learn more <NavLink to="/about">About Me</NavLink> to get to know who I am and what drives me.
              Hit <NavLink to="/contact">Contact</NavLink> to start a conversation and connect with me directly.
            </div>

            <div className="self-photo-slideshow">
              <div className="images">
                <img src="pics-website/me-pumpkin.jpg" alt="A photo of me with a pumpkin" />
              </div>
              <div className="images">
                <img src="pics-website/me-pomo.jpg" alt="A photo of me at the port moody pier" />
              </div>
              <div className="images">
                <img src="pics-website/me-theater.jpg" alt="A photo of me when I did theater" />
              </div>
              <a className="prev" onClick={() => console.log('Previous slide')}>❮</a>
              <a className="next" onClick={() => console.log('Next slide')}>❯</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
