import { Link } from 'react-router-dom';
import { useEffect } from 'react'; // Add this import
import '/src/components/Navbar.css';
import '/src/home.css';
import { plusSlides, showSlides } from './slideshow';

// Import images
import meWithPumpkin from '/src/assets/images/me-pumpkin.jpg';
import mePomo from '/src/assets/images/me-pomo.jpg';
import meTheater from '/src/assets/images/me-theater.jpg';
import meAlcatraz from '/src/assets/images/me-alcatraz.jpg';
import meDiscord from '/src/assets/images/me-disc.jpg';
import meRun from '/src/assets/images/me-run.jpg';
import meSkull from '/src/assets/images/me-alcatraz.jpg';

const Home = () => {
  useEffect(() => {
    showSlides(1);
  }, []);

  return (
    <main className="home-container">
      <div className="content-wrapper">
        {/* Left side - Text content */}
        <div className="home-text-box">
          <p>
            Hi there! My name is Chloe, and I am a third year <a href="https://www.sfu.ca/fas/study/future-undergraduates/programs/major/software-systems-bachelor-science.html">Software Systems</a> major at SFU doing an engineering minor in
            Computer and Electronics design. I'm interested in pursuing a career in software development, technical management,
            and computer engineering.
          </p>
          <p>
            Dive into my <Link to="/projects">Projects</Link> to discover the exciting work I've been involved in and explore my professional journey.
            Learn more <Link to="/about">About Me</Link> to get to know who I am and what drives me.
            Hit <Link to="/contact">Contact</Link> to start a conversation and connect with me directly.
          </p>
        </div>

        {/* Right side - Slideshow */}
        <div className="slideshow-container">
          <div className="images">
            <img src={meWithPumpkin} alt="A photo of me with a pumpkin" />
          </div>
          <div className="images">
            <img src={mePomo} alt="A photo of me at the port moody pier" />
          </div>
          <div className="images">
            <img src={meTheater} alt="A photo of me when I did theater" />
          </div>
          <div className="images">
            <img src={meAlcatraz} alt="A photo of me at Alcatraz" />
          </div>
          <div className="images">
            <img src={meDiscord} alt="A photo of me at Discord" />
          </div>
          <div className="images">
            <img src={meRun} alt="A photo of me at the sun run" />
          </div>
          <div className="images">
            <img src={meSkull} alt="A photo of me as an ocean freak" />
          </div>

          {/* Navigation arrows */}
          <a className="slide-arrow prev-arrow" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="slide-arrow next-arrow" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
      </div>
    </main>
  );
};

export default Home;