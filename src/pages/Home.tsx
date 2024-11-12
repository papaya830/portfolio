import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import '../index.css'; 
import { plusSlides } from './slideshow';

const Home = () => {
  return (
    <main>
      <h1>
        Chloe Yip
        <img className="headliner" src="/pics-website/head-new.jpg" alt="avatar" />
        <img className="monkey-headliner" src="/pics-website/monkey.jpg" alt="monkey" />
      </h1>

      <div className="content-container">
        <div className="general-text">
          Hi there! My name is Chloe, and I am a third year <a href="https://www.sfu.ca/computing/prospective-students/undergraduate-students/programs/degree-programs/softwaresystems.html">Software Systems</a> major at SFU doing an engineering minor in
          Computer and Electronics design. I'm interested in pursuing a career in software development, technical management,
          and computer engineering. Currently, I'm a <a href="https://github.com/cyip10">Software Developer Intern</a> at <a href="https://www.improving.com/">Improving</a> (formerly BitQuill Technologies). <br /><br />

          I'm a member of SFU Enactus, Aqua Analyzer team, as a Software and Firmware Developer! <br />
          In my free time, I enjoy staying active, exploring new food spots, and being creative.
          Right now, I’m training for a triathlon coming up in March, and I’m also part of a pentasport and volleyball league.
          <br /><br />

          Dive into my <Link to="/projects">Projects</Link> to discover the exciting work I've been involved in and explore my professional journey.
          Learn more <Link to="/about">About Me</Link> to get to know who I am and what drives me.
          Hit <Link to="/contact">Contact</Link> to start a conversation and connect with me directly.
        </div>

        <div className="self-photo-slideshow">
          <div className="images">
            <img src="/pics-website/me-pumpkin.jpg" alt="A photo of me with a pumpkin" />
          </div>
          <div className="images">
            <img src="/pics-website/me-pomo.jpg" alt="A photo of me at the port moody pier" />
          </div>
          <div className="images">
            <img src="/pics-website/me-theater.jpg" alt="A photo of me when I did theater" />
          </div>
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
      </div>
    </main>
  );
};

export default Home;
