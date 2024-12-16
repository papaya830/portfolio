import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import '../index.css';
import { plusSlides, showSlides } from './slideshow';

const Home = () => {
  useEffect(() => {
    showSlides(1);
  }, []);

  return (
    <main>
      <h1>
        Chloe Yip
        <img className="headliner" src="/pics-website/head-new.jpg" alt="avatar" />
        <img className="monkey-headliner" src="/pics-website/monkey.jpg" alt="monkey" />
      </h1>

      <div className="content-container">
        <div className="general-text">
          Hi there! My name is Chloe, and I am a third year <a href="https://www.sfu.ca/fas/study/future-undergraduates/programs/major/software-systems-bachelor-science.html">Software Systems</a> major at SFU doing an engineering minor in
          Computer and Electronics design. I'm interested in pursuing a career in software development, technical management,
          and computer engineering. I've recently finished my first placement as a <a href="https://github.com/cyip10">Software Developer Intern</a> at <a href="https://www.improving.com/">Improving</a> (formerly BitQuill Technologies) in December 2024. <br /><br />

        I'm currently the <strong>Lead Software Coordinator</strong> at SFU Enactus' Aqua Analyzer project, and I am also an executive member of the Software Systems Student Society. <br />
        In my free time, I enjoy staying active, exploring new food spots, and being creative.
        Right now, I’m training for a triathlon coming up in March, and I’m also part of multiple sport leagues.
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
