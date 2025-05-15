import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '/src/components/Navbar.css';
import '/src/index.css';
import { plusSlides, showSlides } from './slideshow';

// Import images directly with absolute paths
import meWithPumpkin from '/src/assets/images/me-pumpkin.jpg';
import mePomo from '/src/assets/images/me-pomo.jpg';
import meTheater from '/src/assets/images/me-theater.jpg';

const Home = () => {
  useEffect(() => {
    showSlides(1);
  }, []);

  return (
    <main>
      {/* No title here - it's now only in the App component */}
      <div className="content-container">
        <div className="general-text">
          Hi there! My name is Chloe, and I am a third year <a href="https://www.sfu.ca/fas/study/future-undergraduates/programs/major/software-systems-bachelor-science.html">Software Systems</a> major at SFU doing an engineering minor in
          Computer and Electronics design. I'm interested in pursuing a career in software development, technical management,
          and computer engineering. <br /><br />

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