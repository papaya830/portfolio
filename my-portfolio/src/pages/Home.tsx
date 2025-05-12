import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import '../index.css';
import { plusSlides, showSlides } from './slideshow';

// Import images directly
import headImage from '../assets/images/head-new.jpg';
import monkeyImage from '../assets/images/monkey.jpg';
import meWithPumpkin from '../assets/images/me-pumpkin.jpg';
import mePomo from '../assets/images/me-pomo.jpg';
import meTheater from '../assets/images/me-theater.jpg';

const Home = () => {
  useEffect(() => {
    showSlides(1);
  }, []);

  return (
    <main>
      <h1>
        Chloe Yip
        <img className="headliner" src={headImage} alt="avatar" />
        <img className="monkey-headliner" src={monkeyImage} alt="monkey" />
      </h1>

      <div className="content-container">
        <div className="general-text">
          Hi there! My name is Chloe, and I am a third year <a href="https://www.sfu.ca/fas/study/future-undergraduates/programs/major/software-systems-bachelor-science.html">Software Systems</a> major at SFU doing an engineering minor in
          Computer and Electronics design. I'm interested in pursuing a career in software development, technical management,
          and computer engineering. <br /><br />

          I finished my first work placement as a <a href="https://github.com/cyip10">Software Developer Intern</a> at <a href="https://www.improving.com/">Improving</a> (formerly BitQuill Technologies) in December 2024. <br /><br />

          Dive into my <Link to="/projects">Projects</Link> to discover the exciting work I've been involved in and explore my professional journey.
          Learn more <Link to="/about">About Me</Link> to get to know who I am and what drives me.
          Hit <Link to="/contact">Contact</Link> to start a conversation and connect with me directly.
        </div>

        <div className="self-photo-slideshow">
          <div className="images">
            <img src={meWithPumpkin} alt="A photo of me with a pumpkin" />
          </div>
          <div className="images">
            <img src={mePomo} alt="A photo of me at the port moody pier" />
          </div>
          <div className="images">
            <img src={meTheater} alt="A photo of me when I did theater" />
          </div>
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
      </div>
    </main>
  );
};

export default Home;